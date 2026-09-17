import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import prettier from 'prettier'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const here = path.dirname(fileURLToPath(import.meta.url))
const docsRoot = path.resolve(here, '../docs')

function createTurndown() {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    fence: '```',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined',
  })
  turndown.use(gfm)
  turndown.keep(['details', 'summary'])
  turndown.addRule('strikethrough', {
    filter: ['del', 's'],
    replacement: (content) => '~~' + content + '~~',
  })
  return turndown
}

function normalizeHtml(html) {
  let value = html
  value = value.replace(/<p[^>]*class="[^"]*block[^"]*"[^>]*>\s*<strong>([\s\S]*?)<\/strong>\s*<\/p>/gi, '<h2>$1</h2>')
  value = value.replace(/<p[^>]*>\s*<strong[^>]*class="[^"]*block[^"]*"[^>]*>([\s\S]*?)<\/strong>\s*<\/p>/gi, '<h2>$1</h2>')
  value = value.replace(/<p[^>]*class="[^"]*notice[^"]*"[^>]*>([\s\S]*?)<\/p>/gi, '<blockquote>$1</blockquote>')
  value = value.replace(/<p[^>]*class="[^"]*block[^"]*"[^>]*>([\s\S]*?)<\/p>/gi, '<h2>$1</h2>')
  value = value.replace(/<br\s*\/?>/gi, '  \n')
  value = value.replace(/<span[^>]*>/gi, '').replace(/<\/span>/gi, '')
  value = value.replace(/\s+style="[^"]*"/gi, '')
  return value
}

function stripCustomAttributes(markdown) {
  return markdown
    .split('\n')
    .map((line) => {
      const match = line.match(/^(.*?)\s*\{\.(block|gray|notice|tip)(?:\s+\.[^}]*)?\}\s*$/)
      if (!match) return line
      const content = match[1].trim()
      if (!content) return ''
      if (match[2] === 'notice') return '> **提示：** ' + content
      if (match[2] === 'tip') return '> ' + content
      return '> **' + content + '**'
    })
    .filter((line) => line.trim() !== '[[toc]]')
    .join('\n')
}

function convertInlineHtml(markdown) {
  let value = markdown
  value = value.replace(/<img\b([^>]*)\/?>/gi, (_, attrs) => {
    const src = (attrs.match(/src=["']([^"']+)["']/i) || [])[1]
    const alt = (attrs.match(/alt=["']([^"']*)["']/i) || [])[1] || ''
    return src ? '![' + alt + '](' + src.replace(/\\/g, '/') + ')' : ''
  })
  value = value.replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
  value = value.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/(strong|b)>/gi, '**$2**')
  value = value.replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/(em|i)>/gi, '*$2*')
  value = value.replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
  value = value.replace(/<br\s*\/?>/gi, '  \n')
  value = value.replace(/<\/?(?:small|u|sub|sup|span)\b[^>]*>/gi, '')
  value = value.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n\n$1\n\n')
  value = value.replace(/\[([^\]]+)\]\(\)/g, '$1')
  return value
}

function convertHtmlBlocks(markdown) {
  const turndown = createTurndown()
  return markdown.replace(/<(table|div|section|details|video|iframe|ul|ol|blockquote)\b[\s\S]*?<\/\1>/gi, (block) => {
    return '\n\n' + turndown.turndown(block).trim() + '\n\n'
  })
}

function normalizeImages(markdown) {
  return markdown.replace(/!\[\]\(([^)]+)\)/g, (_, rawUrl) => {
    const url = rawUrl.replace(/\\/g, '/')
    const filename = decodeURIComponent(url.split('/').pop() || 'image').replace(/\.[a-z0-9]+$/i, '')
    const alt = filename || 'image'
    return '![' + alt + '](' + url + ')'
  })
}

function normalizeLinkSpacing(markdown) {
  return markdown
    .replace(/\[\s*\n\s*(!\[[^\]]*\]\([^)]*\))\s*\n\s*\]\(([^)]+)\)/g, '[$1]($2)')
    .replace(/\[\s+(!\[[^\]]*\]\([^)]*\))\s+\]\(([^)]+)\)/g, '[$1]($2)')
}

function normalizeBareUrls(markdown) {
  const protectedSegments = []
  let value = markdown.replace(/(!?\[[^\]]*\]\()([^)]+)(\))/g, (full) => {
    const token = '@@URL' + protectedSegments.length + '@@'
    protectedSegments.push(full)
    return token
  })
  value = value.replace(/(^|[^\w(])(https?:\/\/[^\s<>()]+)(?=$|[\s.,，。;；:：)])/gim, (_, prefix, url) => prefix + '<' + url + '>')
  value = value.replace(/@@URL(\d+)@@/g, (_, index) => protectedSegments[Number(index)])
  return value
}

function parseCells(line) {
  const trimmed = line.trim()
  if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return null
  return trimmed.slice(1, -1).split('|').map((cell) => cell.trim())
}

function renderCells(cells) {
  return '| ' + cells.join(' | ') + ' |'
}

function normalizeKnownStructure(markdown) {
  return markdown
    .replace(/\s+\|\s+\*\*常见问题\*\*(?=1\.)/g, '\n\n## 常见问题\n\n')
    .replace(/^## (声明)(?!\s*$)(.+?保证[：:])(-\s+.+)$/gm, '## $1\n\n$2\n\n$3')
    .replace(/^## (售后服务内容)(?!\s*$)(.+?)(\d+\.\s+.+)$/gm, '## $1\n\n$2\n\n$3')
    .replace(/https:\/\/192\.168\.1\.2:8006/gi, '<https://192.168.1.2:8006>')
}

function normalizeTables(markdown) {
  const value = markdown.replace(/\| 虚拟机系统 \| IP地址 \|\s*\n\s*用户名\s*\n\s*\| 密码 \| 备注 \|/g, '| 虚拟机系统 | IP地址 | 用户名 | 密码 | 备注 |')
  const lines = value.split('\n')
  const output = []
  let index = 0

  while (index < lines.length) {
    if (!lines[index].trim().startsWith('|')) {
      output.push(lines[index])
      index++
      continue
    }

    const block = []
    while (index < lines.length && lines[index].trim().startsWith('|')) {
      block.push(lines[index])
      index++
    }

    if (block.length < 2) {
      output.push(...block)
      continue
    }
    const header = parseCells(block[0])
    const separator = parseCells(block[1])
    if (!header || !separator) {
      output.push(...block)
      continue
    }

    const expected = separator.length
    const merged = [block[0], block[1]]
    for (let rowIndex = 2; rowIndex < block.length; rowIndex++) {
      let line = block[rowIndex]
      let cells = parseCells(line)
      while (cells && cells.length < expected && rowIndex + 1 < block.length) {
        const nextCells = parseCells(block[rowIndex + 1])
        if (!nextCells) break
        line = line.trimEnd() + ' ' + block[rowIndex + 1].trimStart()
        cells = parseCells(line)
        rowIndex++
      }
      merged.push(line)
    }

    const normalized = []
    let previousRow = null
    for (const line of merged) {
      let row = parseCells(line) || []
      if (row.length < expected) {
        const missing = expected - row.length
        if (row.length === 1 && previousRow && previousRow.length === expected) {
          previousRow[expected - 1] = previousRow[expected - 1] + ' ' + row[0]
          continue
        }
        if (missing === 1 && previousRow && previousRow[0]) row.unshift(previousRow[0])
        while (row.length < expected) row.push('')
      }
      if (row.length > expected) row = row.slice(0, expected)
      normalized.push(row)
      previousRow = row
    }

    output.push(...normalized.map(renderCells))
  }

  return output.join('\n')
}

function normalizeHeadings(markdown) {
  const lines = markdown.split('\n')
  let previousLevel = 0
  let inFence = false
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const match = lines[i].match(/^(#{1,6})\s+(.*?)\s*$/)
    if (!match) continue
    let level = match[1].length
    let title = match[2].replace(/\*\*/g, '').replace(/[：:。；;]+$/, '').trim()
    if (previousLevel > 0 && level > previousLevel + 1) level = previousLevel + 1
    lines[i] = '#'.repeat(level) + ' ' + title
    previousLevel = level
  }
  return lines.join('\n')
}

function normalizeEmphasis(markdown) {
  return markdown
    .replace(/\*\*\[([^\]]+)\]\(([^)]+)\)\*\*/g, '[**$1**]($2)')
    .replace(/\*\*\s+/g, '**')
    .replace(/\s+\*\*/g, '**')
    .replace(/(^|\s)\*\s+([^*]+?)\s+\*(?=\s|$)/g, '$1*$2*')
}

function pageTitle(file) {
  const slug = path.basename(file, '.md')
  const language = file.includes(path.sep + 'zh' + path.sep) ? 'zh' : 'en'
  const titles = {
    r2_max: { zh: 'R2 Max 产品文档', en: 'R2 Max Documentation' },
    r2_: { zh: 'R2 产品文档', en: 'R2 Documentation' },
    r1: { zh: 'R1 产品文档', en: 'R1 Documentation' },
    bios: { zh: '常见设置', en: 'Settings' },
    update: { zh: '升级更新', en: 'Update' },
    source: { zh: '资源下载', en: 'Downloads' },
    firewall: { zh: '路由系统', en: 'Firewall' },
    virtualization: { zh: '虚拟化', en: 'Virtualization' },
  }
  return titles[slug]?.[language] || slug
}

function ensureTopLevelHeading(markdown, file) {
  if (!file.includes(path.sep + 'v1.2' + path.sep)) return markdown
  if (/^#\s+/m.test(markdown)) return markdown
  return '# ' + pageTitle(file) + '\n\n' + markdown
}

async function formatMarkdown(markdown) {
  const normalized = markdown
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return prettier.format(normalized + '\n', {
    parser: 'markdown',
    printWidth: 10000,
    proseWrap: 'always',
    singleQuote: true,
    trailingComma: 'none',
  })
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(target))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(target)
  }
  return files
}

async function normalizeFile(file) {
  const original = await readFile(file, 'utf8')
  let markdown = original
  if (file.includes(path.sep + 'v1.2' + path.sep) && /^\s*</.test(original)) markdown = createTurndown().turndown(normalizeHtml(original))
  markdown = stripCustomAttributes(markdown)
  markdown = convertHtmlBlocks(markdown)
  markdown = convertInlineHtml(markdown)
  markdown = normalizeImages(markdown)
  markdown = normalizeLinkSpacing(markdown)
  markdown = normalizeBareUrls(markdown)
  markdown = normalizeKnownStructure(markdown)
  markdown = normalizeTables(markdown)
  markdown = normalizeHeadings(markdown)
  markdown = normalizeEmphasis(markdown)
  markdown = ensureTopLevelHeading(markdown, file)
  const formatted = await formatMarkdown(markdown)
  await writeFile(file, formatted, 'utf8')
}

const files = await walk(docsRoot)
let changed = 0
for (const file of files) {
  const before = await readFile(file, 'utf8')
  await normalizeFile(file)
  const after = await readFile(file, 'utf8')
  if (before !== after) changed++
}
console.log('Processed ' + files.length + ' Markdown files; changed ' + changed + '.')

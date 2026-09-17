import { readFile, writeFile } from 'node:fs/promises'
import vm from 'node:vm'
import MarkdownIt from 'markdown-it'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const files = {
  'r1.md': 'tools/legacy/r1.js',
  'r2_.md': 'tools/legacy/r2_.js',
  'r2_max.md': 'tools/legacy/r2_max.js',
}
const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '@@BT@@@@BT@@@@BT@@',
  emDelimiter: '*',
  strongDelimiter: '**',
  linkStyle: 'inlined',
})
turndown.use(gfm)
const markdown = new MarkdownIt({ html: true, linkify: true, typographer: true })

function decodeStrings(source) {
  const values = []
  const pattern = /(['"])((?:\\.|(?!\1)[^\\])*)\1/g
  for (const match of source.matchAll(pattern)) {
    let value
    try {
      value = vm.runInNewContext(match[0])
    } catch {
      continue
    }
    if (typeof value !== 'string' || value.length < 180) continue
    if (!/<(?:p|br|hr|ul|ol|li|table|img|blockquote)\b/i.test(value)) continue
    values.push({ index: match.index || 0, value })
  }
  return values.sort((a, b) => a.index - b.index).map((item) => item.value)
}

for (const [output, input] of Object.entries(files)) {
  const source = await readFile(input, 'utf8')
  const parts = decodeStrings(source)
  if (!parts.length) throw new Error('No content strings found in ' + input)
  const html = markdown.render(parts.join('\n\n'))
  let result = turndown.turndown(html)
  result = result.replaceAll('@@BT@@', String.fromCharCode(96)).replace(/\n{3,}/g, '\n\n').trim() + '\n'
  await writeFile('docs/v1.2/en/' + output, result, 'utf8')
  console.log(output + ': ' + parts.length + ' content strings, ' + result.length + ' bytes')
}

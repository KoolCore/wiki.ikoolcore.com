<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import config from '../../env.config'
import logoIcon from '@/assets/logo.svg?raw'

interface DocItem {
  title: string
  path: string
}

interface DocGroup {
  title: string
  children: DocItem[]
}

interface TocItem {
  id: string
  text: string
  level: number
}

const env = import.meta.env
const route = useRoute()
const router = useRouter()
const languages = JSON.parse(env.DOC_LANGUAGE)
const navigations = JSON.parse(env.DOC_NAVIGATIONS)

const menuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const theme = ref('light')
const readingProgress = ref(0)
const heroImage = ref('')
const heroDescription = ref('')
const readingMinutes = ref(0)
const toc = ref<TocItem[]>([])
const activeHeading = ref('')
const articleEl = ref<HTMLElement | null>(null)
let tocObserver: IntersectionObserver | null = null

const icons = {
  search: '<circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path>',
  book: '<path d="M4.5 5.5c3.2-.8 5.7-.2 7.5 1.7v12c-1.8-1.9-4.3-2.5-7.5-1.7v-12Z"></path><path d="M19.5 5.5c-3.2-.8-5.7-.2-7.5 1.7v12c1.8-1.9 4.3-2.5 7.5-1.7v-12Z"></path>',
  cpu: '<rect x="6.5" y="6.5" width="11" height="11" rx="2"></rect><path d="M9.5 9.5h5v5h-5zM12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M6 3.5v3M18 3.5v3M6 17.5v3M18 17.5v3M3.5 6h3M17.5 6h3M3.5 18h3M17.5 18h3"></path>',
  support: '<path d="M5 13v-2a7 7 0 0 1 14 0v2"></path><path d="M5 12.5h2.2v5H6a1 1 0 0 1-1-1v-4ZM16.8 12.5H19v4a1 1 0 0 1-1 1h-1.2v-5ZM16 18c-.8 1.2-2 1.8-3.7 1.8"></path>',
  shield: '<path d="M12 3 5.5 5.7v5.6c0 4.2 2.7 7.8 6.5 9.2 3.8-1.4 6.5-5 6.5-9.2V5.7L12 3Z"></path><path d="m9.2 11.7 1.8 1.8 3.9-4"></path>',
  clock: '<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path>',
  version: '<path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z"></path><path d="M9 8h6"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
  sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>',
  moon: '<path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"></path>',
  arrow: '<path d="M5 12h13M14 8l4 4-4 4"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>'
}

const routeParts = computed(() => route.fullPath.split('/').filter(Boolean))
const navValue = computed(() => routeParts.value[0] || navigations[0].value)
const langValue = computed(() => routeParts.value[1] || languages[0].value)
const currentLanguage = computed(() => languages.find((item: any) => item.value === langValue.value)?.content || langValue.value)
const currentNavigation = computed(() => navigations.find((item: any) => item.value === navValue.value) || navigations[0])
const currentConfig = computed(() => config.find((item: any) => item.nav.value === navValue.value && item.lang.value === langValue.value))
const groups = computed<DocGroup[]>(() => currentConfig.value?.children || [])
const flatItems = computed<DocItem[]>(() => groups.value.flatMap((group) => group.children))
const activeItem = computed(() => flatItems.value.find((item) => item.path === route.fullPath))
const isZh = computed(() => langValue.value === 'zh')
const ui = computed(() => isZh.value
  ? {
      badge: '官方知识库',
      search: '搜索文档',
      searchPlaceholder: '搜索文档、产品与支持内容',
      official: '官方文档',
      version: '内容版本',
      reading: '预计阅读',
      minutes: '分钟',
      kicker: 'IKOOLCORE / 官方知识库',
      sidebarTitle: '产品知识与技术支持',
      sidebarDesc: '按产品、固件与使用场景整理的官方资料。',
      maintained: '官方团队维护',
      maintainedDesc: '官方资料持续维护，支持邮件响应。',
      toc: '本页目录',
      support: '官方支持',
      supportText: '内容由 iKOOLCORE 官方维护。发现文档错误或需要技术支持，请通过官方邮箱联系我们。',
      contact: '联系技术支持',
      officialContent: '官方内容',
      officialContentText: '本文档由 iKOOLCORE 官方发布与维护。',
      help: '需要帮助？',
      helpText: '提交问题、订单信息或设备日志，我们会跟进处理。',
      goSupport: '前往支持',
      resources: '资源与固件',
      resourcesText: '获取驱动、BIOS 更新和售后支持资料。',
      viewResources: '查看下载资源',
      docType: '文档',
      pageType: '本页',
      noResult: '没有找到匹配的文档，请尝试更短的关键词。',
      knowledge: '知识与支持文档',
      select: '选择',
      close: '关闭目录',
      theme: '切换主题',
      brand: 'iKOOLCORE 官方知识库'
    }
  : {
      badge: 'Official KB',
      search: 'Search docs',
      searchPlaceholder: 'Search products, guides and support',
      official: 'Official document',
      version: 'Content version',
      reading: 'Reading time',
      minutes: 'min',
      kicker: 'iKOOLCORE / OFFICIAL KB',
      sidebarTitle: 'Product knowledge & support',
      sidebarDesc: 'Official resources organized by product, firmware and use case.',
      maintained: 'Maintained by iKOOLCORE',
      maintainedDesc: 'Official documentation with direct support escalation.',
      toc: 'On this page',
      support: 'Official support',
      supportText: 'Maintained by the iKOOLCORE team. Contact us for technical support or documentation feedback.',
      contact: 'Contact support',
      officialContent: 'Official content',
      officialContentText: 'Published and maintained by iKOOLCORE.',
      help: 'Need help?',
      helpText: 'Share your issue, order details or device logs with our support team.',
      goSupport: 'Contact support',
      resources: 'Resources & firmware',
      resourcesText: 'Find drivers, BIOS updates and after-sales support resources.',
      viewResources: 'Browse downloads',
      docType: 'Doc',
      pageType: 'Page',
      noResult: 'No matching document found. Try a shorter keyword.',
      knowledge: 'Knowledge & support',
      select: 'select',
      close: 'Close navigation',
      theme: 'Toggle theme',
      brand: 'iKOOLCORE Official Knowledge Base'
    })
const pageTitle = computed(() => activeItem.value?.title || currentNavigation.value.name || 'iKOOLCORE Wiki')
const heroTitle = computed(() => /^(R\d|R\d Max)$/i.test(pageTitle.value) ? pageTitle.value + (isZh.value ? ' 官方文档' : ' Documentation') : pageTitle.value)

const allSearchItems = computed(() => [
  ...groups.value.flatMap((group) => group.children.map((item) => ({ ...item, type: ui.value.docType, group: group.title }))),
  ...toc.value.map((item) => ({ title: item.text, path: '', type: ui.value.pageType, group: pageTitle.value, id: item.id }))
])

const searchResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const items = allSearchItems.value
  if (!query) return items.slice(0, 12)
  return items.filter((item) => (item.title + item.group + item.type).toLowerCase().includes(query)).slice(0, 12)
})

function icon(name: keyof typeof icons) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>'
}

function groupIcon(index: number) {
  const body = [icons.book, icons.cpu, icons.support][index] || icons.book
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>'
}

function switchLanguage() {
  const next = langValue.value === 'zh' ? 'en' : 'zh'
  const parts = route.fullPath.split('/')
  parts[2] = next
  router.push(parts.join('/'))
}

function goTo(item: DocItem) {
  router.push(item.path)
  menuOpen.value = false
  searchOpen.value = false
}

function openSearch() {
  searchOpen.value = true
  nextTick(() => searchInput.value?.focus())
}

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}

function selectSearch(item: any) {
  if (item.id) {
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  else {
    goTo(item)
  }
  closeSearch()
}

function scrollToToc(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

function slugify(text: string, index: number) {
  const base = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\p{L}\p{N}-]+/gu, '').replace(/^-+|-+$/g, '')
  return 'section-' + (base || index + 1)
}

function disconnectToc() {
  tocObserver?.disconnect()
  tocObserver = null
}

function prepareArticle() {
  disconnectToc()
  const article = document.querySelector('.doc-content .markdown-body') as HTMLElement | null
  articleEl.value = article
  if (!article) return

  article.querySelectorAll('h1,h2,h3').forEach((heading, index) => {
    const element = heading as HTMLElement
    if (!element.id) element.id = slugify(element.textContent || '', index)
  })

  const firstTitle = article.querySelector(':scope > h1') as HTMLElement | null
  const firstImage = article.querySelector('img') as HTMLImageElement | null
  const firstQuote = article.querySelector(':scope > blockquote') as HTMLElement | null
  const firstParagraph = Array.from(article.querySelectorAll(':scope > p')).find((item) => (item.textContent || '').trim().length > 50)

  if (firstTitle) firstTitle.classList.add('wiki-hidden-title')
  if (firstImage) {
    heroImage.value = firstImage.currentSrc || firstImage.src
    firstImage.closest('p')?.classList.add('wiki-hidden-image')
  }
  const summary = firstQuote || firstParagraph
  heroDescription.value = (summary?.textContent || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().slice(0, 190)
  if (heroDescription.value.length === 190) heroDescription.value += '…'

  toc.value = Array.from(article.querySelectorAll('h2,h3')).map((heading) => ({
    id: (heading as HTMLElement).id,
    text: (heading.textContent || '').replace(/\s+/g, ' ').trim(),
    level: Number(heading.tagName.slice(1))
  }))

  readingMinutes.value = Math.max(2, Math.ceil((article.textContent || '').length / 450))

  if (toc.value.length > 1) {
    tocObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) activeHeading.value = visible.target.id
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] })
    toc.value.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) tocObserver?.observe(element)
    })
  }
}

function onScroll() {
  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
  readingProgress.value = Math.min(100, Math.max(0, (window.scrollY / max) * 100))
}

function onKeydown(event: KeyboardEvent) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    searchOpen.value ? closeSearch() : openSearch()
  }
  if (event.key === 'Escape') {
    closeSearch()
    menuOpen.value = false
  }
}

watch(() => route.fullPath, async () => {
  heroImage.value = ''
  heroDescription.value = ''
  toc.value = []
  activeHeading.value = ''
  menuOpen.value = false
  closeSearch()
  document.title = heroTitle.value + ' | ' + ui.value.brand
  window.scrollTo(0, 0)
  await nextTick()
  window.setTimeout(prepareArticle, 40)
})

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  localStorage.setItem('ikoolcore-theme', value)
})

onMounted(() => {
  theme.value = localStorage.getItem('ikoolcore-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  document.title = heroTitle.value + ' | ' + ui.value.brand
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  prepareArticle()
})

onBeforeUnmount(() => {
  disconnectToc()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="wiki-app">
    <div class="reading-progress" :style="{ width: readingProgress + '%' }" />

    <header class="wiki-header" :class="{ scrolled: readingProgress > 1 }">
      <div class="header-inner">
        <a class="brand" href="#/" :aria-label="ui.brand">
          <span class="brand-logo" v-html="logoIcon" />
          <span class="official-badge">{{ ui.badge }}</span>
        </a>

        <button class="search-trigger" type="button" @click="openSearch">
          <span class="icon" v-html="icon('search')" />
          <span>{{ ui.search }}</span>
          <kbd>Ctrl K</kbd>
        </button>

        <nav class="header-actions">
          <button class="header-button language-button" type="button" @click="switchLanguage">
            {{ currentLanguage }}
          </button>
          <button class="header-button version-button" type="button">{{ currentNavigation.name }}</button>
          <button class="theme-button" type="button" :aria-label="ui.theme" @click="toggleTheme">
            <span v-html="icon(theme === 'dark' ? 'sun' : 'moon')" />
          </button>
          <button class="menu-button" type="button"  :aria-label="menuOpen ? ui.close : ui.sidebarTitle" @click="menuOpen = true">
            <span v-html="icon('menu')" />
          </button>
        </nav>
      </div>
    </header>

    <aside class="wiki-sidebar" :class="{ open: menuOpen }" :aria-label="ui.sidebarTitle">
      <div class="sidebar-header">
        <strong>{{ ui.sidebarTitle }}</strong>
        <button type="button" :aria-label="ui.close" @click="menuOpen = false">
          <span v-html="icon('close')" />
        </button>
      </div>

      <div class="sidebar-intro">
        <span>{{ ui.kicker }}</span>
        <strong>{{ ui.sidebarTitle }}</strong>
        <small>{{ ui.sidebarDesc }}</small>
      </div>

      <nav class="sidebar-nav">
        <section v-for="(group, groupIndex) in groups" :key="group.title" class="nav-group">
          <h3>
            <span class="nav-icon" v-html="groupIcon(groupIndex)" />
            {{ group.title }}
          </h3>
          <button
            v-for="item in group.children"
            :key="item.path"
            class="nav-link"
            :class="{ active: item.path === route.fullPath }"
            type="button"
            @click="goTo(item)"
          >
            {{ item.title }}
          </button>
        </section>
      </nav>

      <div class="sidebar-support">
        <strong><i />{{ ui.maintained }}</strong>
        <p>{{ ui.maintainedDesc }}</p>
        <a href="mailto:service@ikoolcore.com">service@ikoolcore.com</a>
      </div>
    </aside>
    <div v-if="menuOpen" class="sidebar-mask" @click="menuOpen = false" />

    <main class="wiki-main">
      <section class="page-hero">
        <div class="hero-copy">
          <span class="eyebrow">OFFICIAL DOCUMENTATION</span>
          <h1>{{ heroTitle }}</h1>
          <p>{{ heroDescription || 'iKOOLCORE 官方产品文档、配置指南与技术支持资料。' }}</p>
          <div class="hero-meta">
            <span class="meta-pill official"><i v-html="icon('shield')" />{{ ui.official }}</span>
            <span class="meta-pill"><i v-html="icon('version')" />{{ ui.version }} {{ currentNavigation.name }}</span>
            <span class="meta-pill"><i v-html="icon('clock')" />{{ ui.reading }} {{ readingMinutes }} {{ ui.minutes }}</span>
          </div>
        </div>
        <div class="hero-visual" :class="{ empty: !heroImage }">
          <img v-if="heroImage" :src="heroImage" :alt="pageTitle">
          <span v-else class="hero-orb" />
        </div>
      </section>

      <div class="content-layout">
        <article class="doc-card doc-content">
          <router-view />
        </article>

        <aside class="page-rail">
          <nav v-if="toc.length > 1" class="rail-card">
            <h2>{{ ui.toc }}</h2>
            <button
              v-for="item in toc"
              :key="item.id"
              type="button"
              :class="{ active: activeHeading === item.id, sub: item.level === 3 }"
              @click="scrollToToc(item.id)"
            >
              {{ item.text }}
            </button>
          </nav>

          <div class="support-card">
            <h2>{{ ui.support }}</h2>
            <p>{{ ui.supportText }}</p>
            <a href="mailto:service@ikoolcore.com">{{ ui.contact }} <span v-html="icon('arrow')" /></a>
          </div>
        </aside>
      </div>

      <section class="doc-footer">
        <div>
          <span v-html="icon('shield')" />
          <strong>{{ ui.officialContent }}</strong>
          <p>{{ ui.officialContentText }}</p>
          <a href="mailto:service@ikoolcore.com">service@ikoolcore.com</a>
        </div>
        <div>
          <span v-html="icon('support')" />
          <strong>{{ ui.help }}</strong>
          <p>{{ ui.helpText }}</p>
          <a href="mailto:service@ikoolcore.com">{{ ui.goSupport }}</a>
        </div>
        <div>
          <span v-html="icon('book')" />
          <strong>{{ ui.resources }}</strong>
          <p>{{ ui.resourcesText }}</p>
          <button type="button" @click="goTo(groups[2]?.children?.[0] || flatItems[0])">{{ ui.viewResources }}</button>
        </div>
      </section>
    </main>

    <div v-if="searchOpen" class="search-overlay" @mousedown.self="closeSearch">
      <section class="search-panel">
        <header>
          <span v-html="icon('search')" />
          <input ref="searchInput" v-model="searchQuery" type="search" :placeholder="ui.searchPlaceholder">
          <button type="button" @click="closeSearch">Esc</button>
        </header>
        <div class="search-results">
          <button v-for="item in searchResults" :key="item.type + item.title" type="button" @click="selectSearch(item)">
            <span class="result-icon" v-html="icon(item.type === '本页' ? 'book' : 'version')" />
            <span><strong>{{ item.title }}</strong><small>{{ item.group }}</small></span>
            <em>{{ item.type }}</em>
          </button>
          <p v-if="!searchResults.length">{{ ui.noResult }}</p>
        </div>
        <footer><span>{{ ui.knowledge }}</span><span><kbd>↑</kbd><kbd>↓</kbd> {{ ui.select }} <kbd>Esc</kbd></span></footer>
      </section>
    </div>
  </div>
</template>

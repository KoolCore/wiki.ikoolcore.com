const { DOC_NAVIGATIONS } = import.meta.env

type DocSlug = 'r2_max' | 'r2_' | 'r1' | 'bios' | 'update' | 'source' | 'firewall' | 'virtualization'
type LangValue = 'en' | 'zh'

const docModules: Record<LangValue, Record<DocSlug, () => Promise<any>>> = {
  en: {
    r2_max: () => import('~/docs/v1.2/en/r2_max.md'),
    r2_: () => import('~/docs/v1.2/en/r2_.md'),
    r1: () => import('~/docs/v1.2/en/r1.md'),
    bios: () => import('~/docs/v1.2/en/bios.md'),
    update: () => import('~/docs/v1.2/en/update.md'),
    source: () => import('~/docs/v1.2/en/source.md'),
    firewall: () => import('~/docs/v1.2/en/firewall.md'),
    virtualization: () => import('~/docs/v1.2/en/virtualization.md'),
  },
  zh: {
    r2_max: () => import('~/docs/v1.2/zh/r2_max.md'),
    r2_: () => import('~/docs/v1.2/zh/r2_.md'),
    r1: () => import('~/docs/v1.2/zh/r1.md'),
    bios: () => import('~/docs/v1.2/zh/bios.md'),
    update: () => import('~/docs/v1.2/zh/update.md'),
    source: () => import('~/docs/v1.2/zh/source.md'),
    firewall: () => import('~/docs/v1.2/zh/firewall.md'),
    virtualization: () => import('~/docs/v1.2/zh/virtualization.md'),
  },
}

interface MenuItem {
  zhTitle: string
  enTitle: string
  path: string
  component: () => Promise<any>
}

interface MenuGroup {
  zhTitle: string
  enTitle: string
  type: 'doc'
  children: MenuItem[]
}

function createItem(nav: string, language: LangValue, slug: DocSlug, zhTitle: string, enTitle: string): MenuItem {
  return {
    zhTitle,
    enTitle,
    path: '/' + nav + '/' + language + '/' + slug,
    component: docModules[language][slug],
  }
}

function generateMenus(nav: string, language: LangValue): MenuGroup[] {
  return [
    {
      zhTitle: '产品',
      enTitle: 'Products',
      type: 'doc',
      children: [
        createItem(nav, language, 'r2_max', 'R2 Max', 'R2 Max'),
        createItem(nav, language, 'r2_', 'R2', 'R2'),
        createItem(nav, language, 'r1', 'R1', 'R1'),
      ],
    },
    {
      zhTitle: 'BIOS',
      enTitle: 'BIOS',
      type: 'doc',
      children: [
        createItem(nav, language, 'bios', '常见设置', 'Settings'),
        createItem(nav, language, 'update', '升级更新', 'Update'),
      ],
    },
    {
      zhTitle: '服务与支持',
      enTitle: 'Support',
      type: 'doc',
      children: [
        createItem(nav, language, 'source', '资源下载', 'Downloads'),
        createItem(nav, language, 'firewall', '路由系统', 'Firewall'),
        createItem(nav, language, 'virtualization', '虚拟化', 'Virtualization'),
      ],
    },
  ]
}

function setLanguage(items: any[], language: any) {
  items.forEach((item) => {
    item.title = item[language.value + 'Title']
    if (item.children) setLanguage(item.children, language)
  })
  return items
}

function generate() {
  const result: any[] = []
  const navs: any[] = JSON.parse(DOC_NAVIGATIONS)
  const languages: LangValue[] = ['en', 'zh']

  navs.forEach((nav) => {
    languages.forEach((language) => {
      result.push({
        nav,
        lang: { content: language === 'zh' ? '中文' : 'English', value: language },
        children: setLanguage(generateMenus(nav.value, language), { value: language }),
      })
    })
  })

  return result
}

export default generate()

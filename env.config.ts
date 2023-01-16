const { DOC_LANGUAGE, DOC_NAVIGATIONS } = import.meta.env
function generate() {
  const result: any[] = []
  const navs: any[] = JSON.parse(DOC_NAVIGATIONS)
  const langs: any[] = JSON.parse(DOC_LANGUAGE)
  navs.forEach((nav) => {
    langs.forEach((l) => {
      const children = setLanguage(
        filterMenus(generateMenus(nav, l), {
          nav,
          lang: l,
        }),
        l,
      )
      result.push({
        nav,
        lang: l,
        children,
      })
    })
  })
  return result
}

function setLanguage(arr: any[], lang: any) {
  arr.forEach((item: any) => {
    item.title = item[`${lang.value}Title`]
    if (item.children)
      setLanguage(item.children, lang)
  })
  return arr
}
/**
//  * 过滤隐藏菜单
 * @param arr
 * @param nav
 */
function filterMenus(arr: any[], filter: any) {
  arr.forEach((item: any, index: number) => {
    const p = `${filter.nav.value}/${filter.lang.value}`
    if (item.disabled?.includes(p))
      arr.splice(index, 1)

    if (item.children)
      filterMenus(item.children, filter)
  })
  return arr
}
/**
 * 生成菜单路由数据
 * @param nav
 * @param language
 * @returns
 */
function generateMenus(nav: any, language: any) {
  return [
    {
      'zh-CNTitle': '描述',
      'enTitle': 'Describe',
      'type': 'doc', // 普通文档
      'children': [
        {
          'zh-CNTitle': '了解项目',
          'enTitle': 'Learn about the project',
          'disabled': ['R2/zh-CN', 'R2/en'],
          'path': `/${nav.value}/${language.value}/understand`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/understand.md`),
        },
        {
          'zh-CNTitle': '项目由来',
          'enTitle': 'Origin of project',
          'path': `/${nav.value}/${language.value}/origin`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/origin.md`),
        },
        {
          'zh-CNTitle': '产品定位',
          'enTitle': 'Product Positioning',
          'path': `/${nav.value}/${language.value}/position`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/position.md`),
        },
        {
          'zh-CNTitle': '硬件参数',
          'enTitle': 'Hardware Parameters',
          'path': `/${nav.value}/${language.value}/hardware`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/hardware.md`),
        },
      ],
    },
    {
      'zh-CNTitle': '设计',
      'enTitle': 'Design',
      'type': 'doc', // 普通文档
      'children': [
        {
          'zh-CNTitle': '设计图纸',
          'enTitle': 'Design Drawings',
          'path': `/${nav.value}/${language.value}/design`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/design.md`),
        },
      ],
    },
    {
      'zh-CNTitle': '预售',
      'enTitle': 'Pre Sale',
      'type': 'doc', // 普通文档
      'children': [
        {
          'zh-CNTitle': '配置及价格',
          'enTitle': 'Configuration and Price',
          'path': `/${nav.value}/${language.value}/configuration`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/configuration.md`),
        },
        {
          'zh-CNTitle': '购买须知',
          'enTitle': 'Purchase Notes',
          'path': `/${nav.value}/${language.value}/purchase-notes`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/purchase-notes.md`),
        },
        {
          'zh-CNTitle': '实时库存',
          'enTitle': 'Real-time Inventory',
          'path': `/${nav.value}/${language.value}/reserve`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/reserve.md`),
        },
        {
          'zh-CNTitle': '进度信息',
          'enTitle': 'Progress',
          'path': `/${nav.value}/${language.value}/progress`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/progress.md`),
        },
      ],
    },
    {
      'zh-CNTitle': '售后',
      'enTitle': 'After Sales',
      'type': 'doc', // 普通文档
      'children': [
        {
          'zh-CNTitle': '服务内容',
          'enTitle': 'Service Content',
          'path': `/${nav.value}/${language.value}/service`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/service.md`),
        },
        {
          'zh-CNTitle': 'BIOS与驱动',
          'enTitle': 'BIOS and Drivers',
          'path': `/${nav.value}/${language.value}/bios-drive`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/bios-drive.md`),
        },
        {
          'zh-CNTitle': 'R1组件',
          'enTitle': 'R1 Component',
          'path': `/${nav.value}/${language.value}/component`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/component.md`),
        },
        {
          'zh-CNTitle': '常见问题',
          'enTitle': 'Problem',
          'path': `/${nav.value}/${language.value}/question`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/question.md`),
        },
      ],
    },
    {
      'zh-CNTitle': '使用',
      'enTitle': 'Use',
      'type': 'doc', // 普通文档
      'children': [
        {
          'zh-CNTitle': '出厂配置',
          'enTitle': 'Factory Configuration',
          'path': `/${nav.value}/${language.value}/factory-setting`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/factory-setting.md`),
        },
        {
          'zh-CNTitle': '使用说明书',
          'enTitle': 'Manual',
          'path': `/${nav.value}/${language.value}/manual`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/manual.md`),
        },
        {
          'zh-CNTitle': '默认系统',
          'enTitle': 'Default System',
          'path': `/${nav.value}/${language.value}/default-system`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/default-system.md`),
        },
        {
          'zh-CNTitle': '开箱、拆解评测',
          'enTitle': 'Review',
          'path': `/${nav.value}/${language.value}/review`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/review.md`),
        },
        {
          'zh-CNTitle': '教程分享',
          'enTitle': 'Tutorial Sharing',
          'path': `/${nav.value}/${language.value}/tutorial-share`,
          'component': () => import(`~/docs/${nav.value}/${language.value}/tutorial-share.md`),
        },
      ],
    },
  ]
}

export default generate()

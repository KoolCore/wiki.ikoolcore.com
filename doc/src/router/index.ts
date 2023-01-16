import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import config from '../../env.config'
import LayoutPage from '@/layout/Index.vue'

/** 是否hash模式 */
const isHash = import.meta.env.DOC_ROUTER_MODE === 'hash'

const { DOC_LANGUAGE, DOC_NAVIGATIONS } = import.meta.env

/** 当前的一级导航 */
const cNav = JSON.parse(DOC_NAVIGATIONS)[0]
/** 当前语言 */
const cLang = JSON.parse(DOC_LANGUAGE)

function getDocsRoutes(docs: RouteRecordRaw[] & any, type?: string) {
  let docsRoutes: RouteRecordRaw[] = []
  let docRoute

  docs.forEach((item: any) => {
    const docType = item.type || type
    let { children } = item
    if (item.type === 'component') {
      children = item.children.sort((a: any, b: any) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    }
    if (children) {
      docsRoutes = docsRoutes.concat(getDocsRoutes(children, docType))
    }
    else {
      docRoute = { ...item }
      docsRoutes.push(docRoute)
    }
  })
  return docsRoutes
}

function generateRoutes() {
  const routes: any[] = []
  config.forEach((item: any) => {
    routes.push({
      path: `/${item.nav.value}`,
      component: LayoutPage,
      redirect: item.lang.value === cLang[0].value ? `${item.children[0].children[0].path}` : '',
      children: getDocsRoutes(item.children),
    })
  })
  return routes
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/${cNav.value}`,
  },
  {
    path: '/:w+',
    redirect: '/404',
  },
].concat(generateRoutes())

const router = createRouter({
  routes,
  history: isHash ? createWebHashHistory('./') : createWebHistory(import.meta.env.DOC_BASE_DIR),
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

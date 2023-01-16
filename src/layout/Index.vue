<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts">
import type { DropdownOption } from '@ldesign/desktop-next'
import { computed, defineComponent, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MessagePlugin } from '@ldesign/desktop-next'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import config from '../../env.config'
import getCurrentTitleIndex from '../utils/listenScroll'
import { throttle } from '../utils'
import logoIcon from '@/assets/logo.svg?raw'
const env = import.meta.env

const { DOC_LANGUAGE, DOC_NAVIGATIONS, DOC_ROUTER_MODE } = env

export default defineComponent({
  setup() {
    const $route = useRoute()
    const $router = useRouter()
    const aside = ref<any>(null as any)
    const isHash = ref(DOC_ROUTER_MODE === 'hash')
    const header = ref<any>(null)
    const loaded = ref(false)
    const logo = ref(logoIcon)
    const gitTalk = ref<any>(null)
    const gitalk = ref<any>(null)
    const tocs = ref<any>([])
    const hasToc = computed(() => tocs.value.length)
    const curIndex = ref<number>(0)
    const titles = ref<any>([])
    const tocDom = ref<any>(null)
    const isPhone = ref<boolean>(false)
    const visible = ref<boolean>(false)
    // const tocsList = computed(() => {
    //   const arr: any[] = []
    //   titles.value.forEach((item: any, index: number) => {
    //     const id = item.innerText
    //     item.id = id
    //     arr[index] = id
    //   })
    //   return arr
    // })

    const languages = ref(JSON.parse(DOC_LANGUAGE))

    const navigations = ref(JSON.parse(DOC_NAVIGATIONS))

    const [, nav, lang] = $route.fullPath.split('/')

    const cnav = ref(nav)
    const clang = ref(lang)

    const isActive = computed(() => {
      return (c: string) => {
        return $route.fullPath.includes(c)
      }
    })

    const menuList = computed(() => config.filter((a: any) => a.nav.value === cnav.value && a.lang.value === clang.value)[0].children)

    const currentLanguage = computed(() => {
      return languages.value.filter((a: any) => {
        return a.value === clang.value
      })[0].content
    })

    /**
     * 渲染gitalk
     */
    const renderGitalk = () => {
      document.querySelector('#gitalk').innerHTML = ''
      const { DOC_GITHUB_CLIENTID, DOC_GIHUB_CLIENT_SECRET, DOC_GITHUB_REPO, DOC_GITHUB_OWNER, DOC_GITHUB_ADMIN, DOC_GITALK } = import.meta.env
      if (DOC_GITALK !== 'true')
        return

      gitTalk.value = new Gitalk({
        clientID: DOC_GITHUB_CLIENTID,
        clientSecret: DOC_GIHUB_CLIENT_SECRET,
        repo: DOC_GITHUB_REPO,
        owner: DOC_GITHUB_OWNER,
        admin: JSON.parse(DOC_GITHUB_ADMIN),
        id: location.pathname,
        language: clang.value,
        distractionFreeMode: false,
      })

      gitTalk.value.render('gitalk')
    }

    const renderTocActive = (index: number) => {
      tocs.value.forEach((t: any) => {
        t.classList.remove('active')
      })
      tocs.value[index]?.classList.add('active')
    }

    const observeTableContents = () => {
      const dom: any = document.querySelector('.page-content')
      const config = {
        attributes: true,
        childList: true,
        subtree: true,
      }
      const observer = new MutationObserver(() => {
        tocs.value = document.querySelectorAll('.table-of-contents li')
        titles.value = document.querySelectorAll('.markdown-body h2, .markdown-body h3')
        isPhone.value = dom.offsetWidth < 800
        // renderTocActive(0)
      })
      observer.observe(dom, config)
    }

    /**
     * 渲染左侧菜单
     */
    const renderAside = () => {
      /** 设置左侧菜单导航 */
      aside.value.routerList = menuList.value
    }

    /**
     * 监听一级导航切换
     * @param item
     */
    const onNavClick = (item: any) => {
      if (item.disabled && item.disabled === 'true') {
        MessagePlugin.info('开发中！')
        return
      }
      const cpath = $route.fullPath
      const [, oN, oL] = cpath.split('/')
      const { value: nN } = item
      if (oN === nN)
        return
      const arr = cpath.split('/')
      arr[1] = nN
      cnav.value = nN
      let npath = arr.join('/')
      if (!$router.getRoutes().map((a: any) => a.path).includes(npath))
        npath = `/${item.value}`

      $router.push(npath)
      renderGitalk()
      visible.value = false
    }

    /**
     * 监听左侧菜单点击
     */
    const bindAsideChange = () => {
      /** 监听左侧菜单的切换事件 */
      aside.value.onchange = ({ detail }: any) => {
        curIndex.value = 0
        renderGitalk()
        if ($route.path === detail)
          return
        loaded.value = false
        $router.push(detail)
        window.scrollTo(0, 0)
      }
    }
    /**
     * 切换语言
     * @param item
     */
    const onLanguageChange = (item: DropdownOption) => {
      clang.value = item.value as any
    }

    const fixedToc = (y: number) => {
      if (!hasToc.value)
        return
      const isFixed = y > 68
      tocDom.value.style.position = isFixed ? 'fixed' : 'absolute'
      tocDom.value.style.top = isFixed ? '0px' : '68px'
    }

    const getTitleActive = () => {
      const index = getCurrentTitleIndex(titles.value)
      curIndex.value = index
      renderTocActive(index)
      scrollToActiveToc(index)
    }

    const bindContentScroll = () => {
      let last_know_scroll_position = 0
      let ticking = false

      function doSomething(scroll_pos: number) {
        if (tocs.value.length < 1)
          return

        fixedToc(scroll_pos)
        getTitleActive()
      }

      window.addEventListener('scroll', (e) => {
        last_know_scroll_position = window.scrollY

        if (!ticking) {
          window.requestAnimationFrame(() => {
            doSomething(last_know_scroll_position)
            ticking = false
          })
        }
        ticking = true
      })
    }

    const initHash = () => {
      const { hash } = $route
      titles.value.forEach((t: any) => {
        if (hash.includes(t.id)) {
          const top = t.offsetTop + t.parentNode.getBoundingClientRect().top
          document.documentElement.scrollTop = top
        }
      })
    }

    const scrollToActiveToc = (index: number) => {
      const activeToc: HTMLElement = tocs.value[index]
      const ctop = activeToc.offsetTop
      activeToc.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      })
    }

    watch(clang, (v) => {
      const arr = $route.fullPath.split('/')
      arr[2] = v
      const cpath = arr.join('/')
      $router.push(cpath)
      renderAside()
      const clabel = languages.value.filter((a: any) => a.value === v)[0].content
      MessagePlugin.info(`当前语言【${clabel}】`)
      renderGitalk()
      visible.value = false
    })
    /**
     * 当左侧菜单数据改变的时候重新渲染菜单
     */
    watch(menuList, (v) => {
      renderAside()
    })

    onMounted(() => {
      // 放置抖动
      tocs.value = document.querySelectorAll('.table-of-contents li')
      tocDom.value = document.querySelector('.table-of-contents')
      titles.value = document.querySelectorAll('.markdown-body h2, .markdown-body h3')
      // 初始化渲染菜单
      renderAside()
      // 绑定监听事件
      bindAsideChange()
      // 渲染gitalk
      renderGitalk()
      observeTableContents()
      renderTocActive(0)
      initHash()

      if (document.body.offsetWidth > 800)
        bindContentScroll()
    })

    onUpdated(() => {
      tocDom.value = document.querySelector('.table-of-contents')
    })

    return {
      aside,
      header,
      menuList,
      languages,
      visible,
      navigations,
      cnav,
      clang,
      titles,
      logo,
      gitalk,
      // tocsList,
      isActive,
      currentLanguage,
      isHash,
      isPhone,
      hasToc,
      onNavClick,
      onLanguageChange,
    }
  },
})
</script>

<template>
  <ldesign-page>
    <ldesign-header
      ref="header"
      slot="header"
      disabled-icon
      header-menu="[]"
    >
      <l-space slot="logo">
        <div class="logo" v-html="logo" />
      </l-space>
      <l-space v-if="!isPhone" align="center" size="16px" style="margin-right: 16px;">
        <l-dropdown min-column-width="100px" :options="languages" @click="onLanguageChange">
          <l-button variant="text">
            {{ currentLanguage }}
            <template #suffix>
              <l-icon name="chevron-down" />
            </template>
          </l-button>
        </l-dropdown>
        <l-button v-for="(item, index) in navigations" :key="index" :variant="isActive(item.value) ? 'base' : 'text'" @click="onNavClick(item)">
          {{ item.name }}
        </l-button>
      </l-space>
      <div v-if="isPhone" slot="right">
        <l-button variant="text" shape="square" @click="visible = !visible">
          <template #icon>
            <l-icon name="bulletpoint" />
          </template>
        </l-button>
        <l-drawer v-model:visible="visible">
          <l-radio-group slot="header" v-model="clang" variant="default-filled">
            <l-radio-button v-for="(item, index) in languages" :key="index" :value="item.value">
              {{ item.content }}
            </l-radio-button>
          </l-radio-group>
          <ul class="mobile-menu">
            <li v-for="(item, index) in navigations" :key="index" :class="{ active: item.value === cnav }">
              <p @click="onNavClick(item)">
                {{ item.name }}
              </p>
            </li>
          </ul>
          <template #footer>
            <ldesign-theme />
          </template>
        </l-drawer>
      </div>
    </ldesign-header>
    <ldesign-aside ref="aside" />
    <div
      class="page-content" :class="{
        'has-toc': hasToc,
      }"
    >
      <!-- {{ tocsList }} -->
      <router-view :style="{ visibility: 'visible' }" />
      <div id="gitalk" ref="gitalk" />
    </div>
    <ldesign-backtop />
  </ldesign-page>
</template>

<style lang="less">
ldesign-header {
  a{
    display: inline-flex;
    text-decoration: none;
    height: 32px;
    align-items: center;
    vertical-align: middle;
    margin: 0 12px;
    padding: 0 16px;
    color: inherit;

    &.router-link-active {
      background-color: var(--bg-color-container-select);
    }
  }
  .logo {
    height: 36px;
    margin-left: -12px;
    color: var(--text-primary);
    svg {
      path, rect {
        fill: currentColor;
      }
    }
  }
}
</style>

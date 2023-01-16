import { createApp } from 'vue'
import '@ldesign/site-component'
import '@ldesign/site-component/lib/style.css'
import '@ldesign/icons-view'
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import { createHead } from '@vueuse/head'
import router from './router'
import '@ldesign/desktop-next/es/style/index.css'
import './styles/index.less'
import App from './App.vue'

const head = createHead()
const app = createApp(App)
app.config.performance = true
app.use(router)
app.use(head)
app.mount('#app')

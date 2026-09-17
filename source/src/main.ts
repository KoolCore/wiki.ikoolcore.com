import { createApp } from 'vue'
import router from './router'
import './styles/index.less'
import App from './App.vue'

const app = createApp(App)
app.config.performance = true
app.use(router)
app.mount('#app')

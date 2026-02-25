import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createApp } from 'vue'
import pinia from '@/config/pinia'
import router from '@/packages/vue-router/index'
import App from './App.vue'
import 'virtual:uno.css'
import 'element-plus/dist/index.css'
import './style.css'
import 'virtual:svg-icons-register'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(pinia)
app.use(router)

app.mount('#app')

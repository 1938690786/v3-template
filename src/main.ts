import { createApp } from 'vue'
import VConsole from 'vconsole'
import './styles/index.css'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import 'virtual:uno.css'
import { useEnv } from './hooks/useEnv'
import pinia from '@/config/pinia'
import router from '@/packages/vue-router/index'

// 引入全局自定义指令
import directive from '@/packages/directive'

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

if (!useEnv('production')) {
  new VConsole()
}

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueDOMPurifyHTML)

Object.keys(directive).forEach((key) => {
  app.directive(key, directive[key])
})

app.mount('#app')

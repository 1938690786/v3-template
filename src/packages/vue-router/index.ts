import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.log('路由跳转前', to, from)
  next()
})

router.afterEach((to) => {
  console.log('路由跳转后', to)
})

export default router

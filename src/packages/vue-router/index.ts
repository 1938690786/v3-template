import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.log('from', from)
  console.log('to', to)
  useRouteCache().addRoute(to)
  next()
})

router.afterEach((to) => {
  console.log(to)
})

export default router

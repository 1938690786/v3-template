import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'
import useApp from '@/config/pinia/modules/app'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  console.log(to.meta, from.meta?.level)
  const app = useApp()
  const toLevel = to.meta?.level
  const fromLevel = from.meta?.level
  if (!to.meta.isTab) {
    if (toLevel && fromLevel) {
      if (toLevel > fromLevel) {
        app.setName('slide-right')
      }
      else {
        app.setName('slide-left')
      }
    }
    else {
      app.setName('absolute-layout')
    }
  }
  else {
    app.setName('')
  }

  useRouteCache().addRoute(to)
  next()
})

export default router

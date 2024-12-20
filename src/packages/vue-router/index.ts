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
  console.log(to, from)
  const app = useApp()
  const toLevel = to.meta?.level
  const fromLevel = from.meta?.level
  if (toLevel && fromLevel) {
    if (toLevel > fromLevel) {
      app.setName('slide-right')
    }
    else if (toLevel < fromLevel) {
      app.setName('slide-left')
    }
    else {
      app.setName('absolute-layout')
    }
  }
  else {
    app.setName('absolute-layout')
  }

  useRouteCache().addRoute(to)
  next()
})

export default router

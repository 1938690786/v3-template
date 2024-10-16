import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'
import useApp from '@/config/pinia/modules/app'
import useSleep from '@/hooks/useSleep'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  useRouteCache().addRoute(to)
  const app = useApp()
  const isBack = app.isBack
  if (isBack === null || (to.meta?.isTab && from.meta?.isTab)) {
    /** 页面初始化，tab切换的时候，不显示动画 */
    app.setName('absolute-layout')
    app.setBack(false)
  }
  else if (isBack === true) {
    /** 执行返回操作 */
    app.setName('slide-right')
    app.setBack(false)
  }
  else {
    /** 执行前进操作 */
    app.setName('slide-left')
  }
  await useSleep(30)
  next()
})

router.afterEach((to) => {
  console.log(to)
})

export default router

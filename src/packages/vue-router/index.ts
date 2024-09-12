import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'
import useRouteTransitionNameStore from '@/config/pinia/modules/routeTransitionName'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  useRouteCache().addRoute(to)
  console.log(1111111111)
  const isBack = useRouteTransitionNameStore().isBack;
  if (isBack === null || (to.meta?.isTab && from.meta?.isTab)) {
    /** 页面初始化，tab切换的时候，不显示动画 */
    useRouteTransitionNameStore().setName('absolute-layout')
    useRouteTransitionNameStore().setBack(false)
  } else if (isBack === true) {
    /** 执行返回操作 */
    console.log(2323232332)
    useRouteTransitionNameStore().setName('slide-left')
    useRouteTransitionNameStore().setBack(false)
  } else {
    console.log(7867867789)




    
    
    /** 执行前进操作 */
    useRouteTransitionNameStore().setName('slide-right')
  }
  next()
})

router.afterEach((to) => {})

export default router

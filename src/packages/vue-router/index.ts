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

export const SIDER_ROUTES = (() => {
    const FILTER_PATH = ['/login', '/:pathMatch(.*)*']
    return router.options.routes.filter(item => !FILTER_PATH.includes(item.path))
})()

export default router

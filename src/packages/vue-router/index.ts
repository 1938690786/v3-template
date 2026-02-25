import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'
import useApp from '@/config/pinia/modules/app'
import { getToken } from '@/utils/storage'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
    const token = getToken()
    const { signPageNames } = useApp()
    const isSignPage = signPageNames.includes(to.name as string)

    if (!token && !isSignPage) {
        next('/login')
        return
    }

    if (token && to.path === '/login') {
        next('/')
        return
    }

    useRouteCache().addRoute(to)
    next()
})

router.afterEach((to) => {
    console.log(to)
})

export const SIDER_ROUTES = (() => {
    const FILTER_PATH = ['/login', '/:pathMatch(.*)*']
    return router.options.routes.filter(item => !FILTER_PATH.includes(item.path)).sort((a: any, b: any) => {
        return a?.sort - b?.sort
    })
})()

export default router

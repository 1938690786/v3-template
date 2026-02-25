import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useRouteCache from '@/config/pinia/modules/routeCache'
import useApp from '@/config/pinia/modules/app'
import { getToken } from '@/utils/storage'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 路由前置守卫（vue-router 5 使用 return 替代 next）
router.beforeEach(async (to) => {
    const token = getToken()
    const { signPageNames } = useApp()
    const isSignPage = signPageNames.includes(to.name as string)

    // 未登录且非签名页面 → 跳转登录
    if (!token && !isSignPage) {
        return '/login'
    }

    // 已登录访问登录页 → 跳转首页
    if (token && to.path === '/login') {
        return '/'
    }

    useRouteCache().addRoute(to)
})

export const SIDER_ROUTES = (() => {
    const FILTER_PATH = ['/login', '/:pathMatch(.*)*']
    return router.options.routes.filter(item => !FILTER_PATH.includes(item.path)).sort((a: any, b: any) => {
        return a?.sort - b?.sort
    })
})()

export default router

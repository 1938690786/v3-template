import type { RouteConfig } from 'types'

const routers: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
        },
        component: () => import('@/views/login/index.vue'),
    },
]

export default routers

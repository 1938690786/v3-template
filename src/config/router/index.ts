import type { RouteConfig } from 'types'

const routers: RouteConfig[] = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            icon: 'menu-home',
        },
        sort: 1,
        component: () => import('@/views/index/index.vue'),
    },
]

export default routers

import type { RouteConfig } from 'types'

const routers: RouteConfig[] = [
    {
        path: '/develop',
        name: 'develop',
        meta: {
            title: '开发者工具',
            icon: 'menu-develop',
        },
        sort: 9999,
        children: [
            {
                path: '/develop',
                name: 'develop',
                meta: {
                    title: '开发者工具',
                },
                component: () => import('@/views/develop/index.vue'),
            },
            {
                path: '/develop/table',
                name: 'developTable',
                meta: {
                    title: '表格',
                },
                component: () => import('@/views/develop/table/index.vue'),
            },
            {
                path: '/develop/form',
                name: 'developForm',
                meta: {
                    title: '表单',
                },
                component: () => import('@/views/develop/form/index.vue'),
            },
        ],
    },
]

export default routers

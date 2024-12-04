import type { RouteConfig } from 'types'

const routers: RouteConfig[] = [
  {
    path: '/',
    meta: {
      title: '首页',
      isTab: true,
      level: 1,
    },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/user',
    meta: {
      title: '我的',
      isTab: true,
      level: 1,
    },
    component: () => import('@/views/user/index.vue'),
  },
]

export default routers

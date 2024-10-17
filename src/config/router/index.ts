import type { RouteConfig } from 'types'

const routers: RouteConfig[] = [
  {
    path: '/',
    meta: {
      title: '首页',
      isTab: true,
    },
    component: () => import('@/views/index/index.vue'),
  },
]

export default routers

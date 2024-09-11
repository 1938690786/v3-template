const routers = [
  {
    path: '/dev',
    name: 'dev',
    meta: {
      title: '开发者工具',
    },
    component: () => import('@/views/dev/index.vue'),
  },
  {
    path: '/dev/keep-alive',
    name: 'KeepAlive',
    meta: {
      title: 'KeepAlive',
      keepAlive: true,
    },
    component: () => import('@/views/dev/keep-alive/index.vue'),
  },
]

export default routers

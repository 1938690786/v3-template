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
      title: 'keep-alive',
      keepAlive: true,
    },
    component: () => import('@/views/dev/keep-alive/index.vue'),
  },
  {
    path: '/dev/rich-text',
    meta: {
      title: 'rich-text',
    },
    component: () => import('@/views/dev/rich-text/index.vue'),
  },
  {
    path: '/dev/copy',
    meta: {
      title: 'copy',
    },
    component: () => import('@/views/dev/copy/index.vue'),
  },
  {
    path: '/dev/float',
    meta: {
      title: 'float',
    },
    component: () => import('@/views/dev/float/index.vue'),
  },
  {
    path: '/dev/loading',
    meta: {
      title: 'loading',
    },
    component: () => import('@/views/dev/loading/index.vue'),
  },
]

export default routers

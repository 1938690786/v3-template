const routers = [
  {
    path: '/dev',
    name: 'dev',
    meta: {
      title: '开发者工具',
      level: 2,
    },
    component: () => import('@/views/dev/index.vue'),
  },
  {
    path: '/dev/keep-alive',
    name: 'KeepAlive',
    meta: {
      title: 'keep-alive',
      keepAlive: true,
      level: 3,
    },
    component: () => import('@/views/dev/keep-alive/index.vue'),
  },
  {
    path: '/dev/rich-text',
    meta: {
      title: 'rich-text',
      level: 3,
    },
    component: () => import('@/views/dev/rich-text/index.vue'),
  },
  {
    path: '/dev/copy',
    meta: {
      title: 'copy',
      level: 3,
    },
    component: () => import('@/views/dev/copy/index.vue'),
  },
  {
    path: '/dev/float',
    meta: {
      title: 'float',
      level: 3,
    },
    component: () => import('@/views/dev/float/index.vue'),
  },
  {
    path: '/dev/loading',
    meta: {
      title: 'loading',
      level: 3,
    },
    component: () => import('@/views/dev/loading/index.vue'),
  },
  {
    path: '/dev/ua',
    meta: {
      title: 'ua',
      level: 3,
    },
    component: () => import('@/views/dev/ua/index.vue'),
  },
  {
    path: '/dev/drag',
    meta: {
      title: 'drag',
      level: 3,
    },
    component: () => import('@/views/dev/drag/index.vue'),
  },
  {
    path: '/dev/virtuallist',
    meta: {
      title: 'virtuallist',
      level: 3,
    },
    component: () => import('@/views/dev/virtuallist/index.vue'),
  },
]

export default routers

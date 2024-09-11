const routers = [
  {
    path: '/dev',
    name: 'dev',
    meta: {
      title: '开发者工具',
    },
    component: () => import('@/views/dev/index.vue'),
  },
]

export default routers

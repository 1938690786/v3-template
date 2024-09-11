const routers = [
  {
    path: '/',
    meta: {
      title: '首页',
      isTab: true,
    },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/user',
    meta: {
      title: '我的',
      isTab: true,
    },
    component: () => import('@/views/user/index.vue'),
  },
]

export default routers

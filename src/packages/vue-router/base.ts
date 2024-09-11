const baseRouter = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: '找不到页面',
    },
    component: (): any => import('@/views/404/index.vue'),
  },
]

export default baseRouter

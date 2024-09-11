import indexActive from '@/assets/images/tabbar/index-active@2x.png'
import indexInactive from '@/assets/images/tabbar/index@2x.png'
import userActive from '@/assets/images/tabbar/user-active@2x.png'
import userInactive from '@/assets/images/tabbar/user@2x.png'

const tabbar = [
  {
    router: '/',
    title: '首页',
    inactive: indexInactive,
    active: indexActive,
  },
  {
    router: '/user',
    title: '我的',
    inactive: userInactive,
    active: userActive,
  },
]
export default tabbar

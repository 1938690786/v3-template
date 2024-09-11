import useRouteTransitionNameStore from '@/config/pinia/modules/routeTransitionName'

const routeTransitionNameStore = useRouteTransitionNameStore()

/** 监听浏览器后退事件 */
function handleListenBack(): void {
  window.addEventListener(
    'popstate',
    () => {
      console.log(879879)
      routeTransitionNameStore.setName('slide-left')
      routeTransitionNameStore.setBack(true)
    },
    false,
  )
}
/** 禁止页面级的touchmove事件 */
function disableTouchMove(): void {
  document.body.addEventListener(
    'touchmove',
    (e: _TouchEvent) => {
      if (e._isScroller)
        return
      // 阻止默认事件
      e.preventDefault()
    },
    {
      passive: false,
    },
  )
}

handleListenBack()
disableTouchMove()

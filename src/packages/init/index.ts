import type { _TouchEvent } from 'types'

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

disableTouchMove()

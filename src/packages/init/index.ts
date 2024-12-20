import type { _TouchEvent } from 'types'
import VConsole from 'vconsole'
import { useEnv } from '@/hooks/useEnv'

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

// disableTouchMove()

if (!useEnv('production')) {
  new VConsole()
}

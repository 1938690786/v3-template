import uaHelper from '@/utils/helper/ua'

declare let WeixinJSBridge: any

/**
 * 在安卓环境下，禁止缩放
 */
if (uaHelper.isWechat && uaHelper.isAndroid) {
  if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
    handleFontSize()
  }
  else {
    document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
  }
}

function handleFontSize(): void {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', () => {
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
  })
}

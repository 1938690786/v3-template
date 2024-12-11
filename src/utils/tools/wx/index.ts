import session from '../session'
import uaHelper from '@/utils/helper/ua'

// 重置微信字体，老人机模式
import './wxreset'
// 设置微信sdk注册地址
if (uaHelper.isIos) {
  session.setWxSdkUrl(window.location.href.split('#')[0])
}

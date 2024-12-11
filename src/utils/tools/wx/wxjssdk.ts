import wx from 'weixin-js-sdk'
import { showFailToast } from 'vant'
import session from '../session'
import { getWxConfig } from '@/config/apis/wx'
import uaHelper from '@/utils/helper/ua'
import retry from '@/utils/tools/retry'

/**
 * 微信sdk授权
 * @param wxUrl 授权url，不包含#之后的部分
 */
export function wxConfig(wxUrl = window.location.href.split('#')[0]): Promise<any> {
  return new Promise((resolve, reject) => {
    const url: string = session.getWxSdkUrl() || wxUrl
    getWxConfig({ url })
      .then((res: any) => {
        const { appId, nonceStr, signature, timestamp } = res
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
          appId, // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr, // 必填，生成签名的随机串
          signature, // 必填，签名
          jsApiList: ['hideMenuItems', 'updateAppMessageShareData', 'updateTimelineShareData', 'scanQRCode'], // 必填，需要使用的JS接口列表
          openTagList: ['wx-open-launch-weapp', 'wx-open-subscribe'], // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
        })
        wx.ready(() => {
          // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
          wx.hideMenuItems({
            menuList: [
              // "menuItem:share:qq",
              // "menuItem:share:weiboApp",
              // "menuItem:favorite",
              // "menuItem:share:facebook",
              // "menuItem:share:facebook",
              // "menuItem:share:QZone",
              // "menuItem:openWithSafari"
            ],
          })
          let isSuccess = true
          wx.error((err: any) => {
            isSuccess = false
            console.log('签名验证失败:', err)
            reject(err)
          })
          if (isSuccess) {
            console.log('签名验证完成')
            resolve('签名验证完成')
          }
        })
      })
      .catch((err) => {
        console.log('微信授权接口请求失败', err)
        reject(new Error('微信授权接口请求失败'))
      })
  })
}

/** 微信分享核心 */
export function wxAppShareCore(params: { title: string, des: string, link: string, img: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!uaHelper.isWechat) {
      reject(new Error('请在微信浏览器打开'))
    }
    wx.updateAppMessageShareData({
      title: params.title, // 分享标题
      desc: params.des, // 分享描述
      link: params.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: params.img, // 分享图标
      success() {
        resolve('设置微信好友分享成功')
      },
      fail(err: any) {
        let configErr: null | Error = null
        wxConfig()
          .catch((e) => {
            configErr = e
          })
          .finally(() => {
            reject(configErr || err)
          })
      },
    })
  })
}

/**
 * 微信好友分享
 * @param title 分享标题
 * @param des 分享描述
 * @param link 分享链接
 * @param img 分享Icon
 */
export function wxAppShare(title: string, des: string, link: string, img: string): Promise<string> {
  return new Promise((resolve, reject) => {
    retry({
      fn: wxAppShareCore,
      params: { title, des, link, img },
    })
      .then(() => {
        console.log('设置微信好友分享成功')
        resolve('设置微信好友分享成功')
      })
      .catch((error) => {
        console.error('设置微信好友分享失败', error)
        reject(new Error('设置微信好友分享失败'))
      })
  })
}

/**
 * 微信朋友圈分享
 * @param title 分享标题
 * @param link 分享链接
 * @param img 分享Icon
 */
export function wxTimelineShare(title: string, link: string, img: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!uaHelper.isWechat) {
      reject(new Error('请在微信浏览器打开'))
    }
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: img, // 分享图标
      success() {
        // 设置成功
        console.log('设置微信朋友圈分享成功')
        resolve('设置微信朋友圈分享成功')
      },
      fail(err: any) {
        console.log('设置微信分享朋友圈失败', err)
        reject(new Error('设置微信分享朋友圈失败'))
      },
    })
  })
}

/**
 * 微信扫码
 * @param needRes 是否返回扫码结果
 * @returns
 */
export function wxScan(needRes: boolean): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!uaHelper.isWechat) {
      reject(new Error('请在微信浏览器打开'))
    }
    wx.scanQRCode({
      needResult: needRes ? 1 : 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      success(res: any) {
        console.log('扫码成功')
        resolve(res.resultStr) // 当needResult 为 1 时，扫码返回的结果
      },
      fail(err: any) {
        console.log('扫码失败', err)
        showFailToast('发起扫码失败')
        reject(new Error('扫码失败'))
      },
    })
  })
}

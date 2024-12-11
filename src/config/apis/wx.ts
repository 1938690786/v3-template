import request from '@/packages/request'

export function getWxConfig(data: { url: string, jsApilist?: string[] }): Promise<{
  appId: string
  nonceStr: string
  timestamp: number
  /** 当前前端请求url地址 */
  url: string
  signature: string
}> {
  return request({
    url: '',
    params: data,
  })
}

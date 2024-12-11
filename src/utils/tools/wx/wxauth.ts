import envHelper from '@/utils/helper/env'

export default function wxauth(): void {
  let apiUrl = ''
  if (envHelper.dev()) {
    apiUrl
            = envHelper.get('VITE_APP_API_URL') === '/proxy_url'
        ? `${envHelper.get('VITE_APP_PROXY_URL')}/api/app`
        : `${envHelper.get('VITE_APP_API_URL')}/api/app`
  }
  else {
    apiUrl = `${location.origin}/api/app`
  }

  const regOne = /\?code=[^&]*/g
  const reg = /&code=[^&]*/g
  let backUrl = location.href.replace(regOne, '?').replace(reg, '')
  // let backUrl = location.href;
  backUrl = backUrl.replace('#', 'abcdefg')
  if (!location.href.includes('?')) {
    backUrl += `?realhost=${location.host}`
  }
  else {
    backUrl += `&realhost=${location.host}`
  }
  const result = `${envHelper.get('VITE_APP_WX_LOGIN')}?backUrl=${backUrl}`
  const timestamp = new Date().getTime()
  location.href = `${apiUrl}/channel/official_accounts/auth_code?back_url=${encodeURIComponent(
    result,
  )}&app-type=gzh&_t=${timestamp}`
}

const imageHelper = {
  /**
   * 获取图片真实宽高
   * @param src 图片地址
   * @param maxWaitLoad 等待时间，默认2500
   */
  getWidthHeight(src: string, maxWaitLoad = 2500): Promise<{ width: number, height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      if (img.complete) {
        const { width, height } = img
        resolve({
          width,
          height,
        })
        return
      }
      const timeOut = setTimeout(() => {
        reject(new Error('图片加载失败！'))
      }, maxWaitLoad)
      img.onload = function () {
        const { width, height } = img
        window.clearTimeout(timeOut)
        resolve({
          width,
          height,
        })
      }
    })
  },
}
export default imageHelper

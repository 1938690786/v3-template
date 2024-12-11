import request from '@/packages/request'

/**
 * 上传图片
 * @param file
 */
export function uploadImage(file: HTMLFormElement): Promise<{
  path_name: string
}> {
  const data = new FormData()
  // 这里需要注意，后端接文件的name是什么，一般是image、file
  data.append('image', file.file)
  data.append('type', 'folder')
  return request({
    url: 'https://exmple.com/upload',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    enableCancel: false,
    timeout: 0,
    data,
  })
}

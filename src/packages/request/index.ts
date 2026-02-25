import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/storage'

// 创建 Axios 实例
const service: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 从环境变量中获取基础 URL
    timeout: 5000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    // 例如：添加 token 到请求头
        const token = getToken()
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
    // 对请求错误做些什么
        return Promise.reject(error)
    },
)

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
    // 对响应数据做点什么
        const res = response.data
        if (res.code !== 200) {
            ElMessage.error(res.message || '请求失败')
            return Promise.reject(new Error(res.message || '请求失败'))
        }
        return res
    },
    (error) => {
    // 对响应错误做点什么
        ElMessage.error(error.message || '请求失败')
        return Promise.reject(error)
    },
)

// // 取消请求的管理
// const pending: { [key: string]: any } = {}

// function generateCancelToken(config: AxiosRequestConfig) {
//     return new axios.CancelToken((cancel) => {
//     // 计算请求唯一标识
//         const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
//         if (pending[url]) {
//             pending[url]('操作取消')
//             delete pending[url]
//         }
//         pending[url] = cancel
//     })
// }

// function removePending(config: AxiosRequestConfig) {
//     const url = [config.method, config.url, JSON.stringify(config.params), JSON.stringify(config.data)].join('&')
//     if (pending[url]) {
//         pending[url]('操作取消')
//         delete pending[url]
//     }
// }

// // 添加取消请求的方法到 Axios 实例
// service.addCancelToken = (config: AxiosRequestConfig) => {
//     config.cancelToken = generateCancelToken(config)
// }

// // 添加移除请求的方法到 Axios 实例
// service.removePending = (config: AxiosRequestConfig) => {
//     removePending(config)
// }

export default service

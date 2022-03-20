import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestConfig, Hook } from './type'

class Http {
  instance: AxiosInstance
  interceptors?: Hook
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      config => config,
      e => e
    )
    this.instance.interceptors.response.use(
      res => res,
      e => e
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }
}

export default Http

import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface Hook {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: Hook
  showLoading?: boolean
}
export interface IDataType<T = any> {
  code: number
  data: T
}

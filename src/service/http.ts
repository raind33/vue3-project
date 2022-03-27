import axios from 'axios'
import { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import type { RequestConfig, Hook } from './types'

class Http {
  instance: AxiosInstance
  interceptors?: Hook
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: RequestConfig) {
    this.showLoading = config.showLoading ?? true
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
      config => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      e => e
    )
    this.instance.interceptors.response.use(
      res => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      err => {
        // 将loading移除
        this.loading?.close()

        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request<T>(config: RequestConfig): Promise<T> {
    // 2.判断是否需要显示loading
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = true
          resolve(res)
        })
        .catch(e => {
          reject(e)
          this.showLoading = true
        })
    })
  }

  get<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }
  post<T>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }
  delete<T = any>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Http

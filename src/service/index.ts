import Http from './http'
import config from '@/global/config/domain'
import localCache from '@/utils/cache'
const service = new Http({
  baseURL: config.baseUrl,
  timeout: 4000,
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch(e) {
      return e
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(e) {
      if (e.response.status === 404) {
        console.log(404)
      }
      return e
    }
  }
})
export default service

import Http from './http'
import config from '@/global/config/doamain'

const service = new Http({
  baseURL: config.baseUrl,
  timeout: 4000,
  interceptors: {
    requestInterceptor(config) {
      const token = ''
      if (token) {
        config.headers!.auth = token
      }
      return config
    },
    requestInterceptorCatch(e) {
      return e
    },
    responseInterceptor(res) {
      const data = res.data
      if (data.code === '-10001') {
        console.log('失败')
      } else {
        return data
      }
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

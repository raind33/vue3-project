interface Obj {
  [key: string]: {
    baseUrl: string
  }
}
const DOMAIN_MAP: Obj = {
  test: {
    baseUrl: '/api'
  },
  development: {
    baseUrl: '/api'
  },
  production: {
    baseUrl: 'http://152.136.185.210:5000'
  }
}
const env = DOMAIN_MAP[process.env.NODE_ENV || 'development']
export default env

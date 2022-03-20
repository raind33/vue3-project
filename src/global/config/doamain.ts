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
    baseUrl: 'aaa'
  }
}
const env = DOMAIN_MAP[process.env.NODE_ENV || 'development']
export default env

interface Obj {
  [key: string]: {
    baseUrl: string
  }
}
const DOMAIN_MAP: Obj = {
  test: {
    baseUrl: 'aaa'
  },
  development: {
    baseUrl: 'aaa'
  },
  production: {
    baseUrl: 'aaa'
  }
}
const env = DOMAIN_MAP[process.env.NODE_ENV || 'development']
export default env

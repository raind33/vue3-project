import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { IAccount } from '@/service/login/type'
import router from '@/router'
import { LoginState } from './types'
import { mapMenusToRoutes } from '@/utils/map-menus'
export const useLoginStore = defineStore<string, LoginState, any, any>(
  'login',
  {
    state: () => {
      return {
        token: '',
        userInfo: {},
        userMenus: [],
        permissions: []
      }
    },
    actions: {
      async accountLoginAction(payload: IAccount) {
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        this.token = token
        localCache.setCache('token', token)

        // 2.请求用户信息
        const userInfoResult = await requestUserInfoById(id)
        const userInfo = userInfoResult.data
        this.userInfo = userInfo
        localCache.setCache('userInfo', userInfo)

        // 3.请求用户菜单
        const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
        const userMenus = userMenusResult.data
        this.userMenus = userMenus
        this.menuToRoute()
        localCache.setCache('userMenus', userMenus)

        setTimeout(() => {
          router.push('/main')
        }, 2000)
      },
      loadLocalLogin() {
        debugger
        const token = localCache.getCache('token')
        if (token) {
          this.token = token
        }
        const userInfo = localCache.getCache('userInfo')
        if (userInfo) {
          this.userInfo = userInfo
        }
        const userMenus = localCache.getCache('userMenus')
        if (userMenus) {
          this.userMenus = userMenus
          this.menuToRoute()
        }
      },
      menuToRoute() {
        const routes = mapMenusToRoutes(this.userMenus)

        // 将routes => router.main.children
        routes.forEach(route => {
          router.addRoute('main', route)
        })
      }
    }
  }
)
export const setupStore = () => {
  const store = useLoginStore()
  store.loadLocalLogin()
}

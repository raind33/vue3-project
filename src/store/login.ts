import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { IAccount } from '@/service/login/type'
import router from '@/router'
export const useLoginStore = defineStore('login', {
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
      localCache.setCache('userMenus', userMenus)

      router.push({ name: 'home' })
    },
    loadLocalLogin() {
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
      }
    }
  }
})

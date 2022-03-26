import { getPageListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import { ASystemAction, ISystemGetter, ISystemState } from './types'

export const useSystemStore = defineStore<
  string,
  ISystemState,
  ISystemGetter,
  ASystemAction
>('system', {
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return state[`${pageName}List` as keyof ISystemState]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction(payload) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // 3.将数据存储到state中

      const { list, totalCount } = pageResult.data
      this[`${pageName}List` as keyof ISystemState] = list
      this[`${pageName}Count` as keyof ISystemState] = totalCount
    }
  }
})

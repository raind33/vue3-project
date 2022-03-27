import {
  createPageData,
  deletePageData,
  editPageData,
  getPageListData
} from '@/service/main/system/system'
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
    },
    async deletePageDataAction(payload) {
      // 1.获取pageName和id
      // pageName -> /users
      // id -> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2.调用删除网络请求
      await deletePageData(pageUrl)

      // 3.重新请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async createPageDataAction(payload) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 2.请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction(payload) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload
      console.log(editData)
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 2.请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})

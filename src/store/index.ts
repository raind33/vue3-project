import { getPageListData } from '@/service/main/system/system'
import { defineStore } from 'pinia'
import { IRootState } from './types'

export const useStore = defineStore<string, IRootState, any, any>('global', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      name: '',
      age: 18,
      entireDepartment: [],
      entireRole: []
    }
  },
  actions: {
    async getInitialDataAction() {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      this.entireDepartment = departmentList
      this.entireRole = roleList
    }
  }
})

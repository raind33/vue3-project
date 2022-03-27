import { _GettersTree } from 'pinia'

export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
}

interface IPayload {
  pageName: PageTypes
  queryInfo: any
}
export interface ASystemAction {
  getPageListAction(val: IPayload): void
  deletePageDataAction(val: any): void
  createPageDataAction(val: any): void
  editPageDataAction(val: any): void
}
export enum PageTypes {
  ROLE = 'role',
  GOODS = 'goods',
  USERS = 'users',
  MENU = 'menu'
}
export interface ISystemGetter extends _GettersTree<ISystemState> {
  pageListData: (val: ISystemState) => any
  pageListCount: (val: ISystemState) => any
}

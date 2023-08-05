import { defineStore } from 'pinia'
import { getUserList } from '@/service/main/system/system'
import type { IUserListData } from '@/service/main/system/type'

interface IUserState {
  userList: IUserListData[]
  totalCount: number
}
const useUserStore = defineStore('system', {
  state: (): IUserState => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async handleGetUseristAction() {
      const res = await getUserList()
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    }
  }
})
export  {
  useUserStore
}

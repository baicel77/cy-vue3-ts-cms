import { defineStore } from 'pinia'
import { deleteUserById, getUserList, addUser, editUser } from '@/service/main/system/system'
import {
  getPageData,
  deletePageDataById,
  addPageData,
  editPageData
} from '@/service/main/system/system'
import type { IUserListData } from '@/service/main/system/type'

interface IPageState {
  userList: IUserListData[]
  totalCount: number

  pageList: IUserListData[]
  pageTotalCount: number
}
const useUserStore = defineStore('system', {
  state: (): IPageState => ({
    userList: [],
    totalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    async handleGetUseristAction(data: any) {
      const res = await getUserList(data)
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },
    async handleDeleteUserById(id: number) {
      await deleteUserById(id)
      this.handleGetUseristAction({
        offset: 0,
        size: 10
      })
    },
    async handleAddUsers(data: any) {
      await addUser(data)
      this.handleGetUseristAction({
        offset: 0,
        size: 10
      })
    },
    async handleEditUsers(id: number, data: any) {
      await editUser(id, data)
      this.handleGetUseristAction({
        offset: 0,
        size: 10
      })
    },

    // page
    async handleGetPageData(pageName: string, data: any) {
      const res = await getPageData(pageName, data)
      this.pageList = res.data.list
      this.pageTotalCount = res.data.totalCount
    },
    async handleDeletePageDataById(pageName: string, id: number) {
      await deletePageDataById(pageName, id)
      this.handleGetPageData(pageName, {
        offset: 0,
        size: 10
      })
    },
    async handleAddPageData(pageName: string, data: any) {
      await addPageData(pageName, data)
      this.handleGetPageData(pageName, {
        offset: 0,
        size: 10
      })
    },
    async handleEditPageData(pageName: string, id: number, data: any) {
      await editPageData(pageName, id, data)
      this.handleGetPageData(pageName, {
        offset: 0,
        size: 10
      })
    }
  }
})
export  {
  useUserStore
}

export default useUserStore

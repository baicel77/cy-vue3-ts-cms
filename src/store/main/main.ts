import { defineStore } from 'pinia'
import { getEntireRoleList, getEntireDepartmentList } from '@/service/main/main'
interface IMainState {
  entireRoleList: any[]
  entireDepartmentList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoleList: [],
    entireDepartmentList: []
  }),
  actions: {
    async handleGetEntireMainAction() {
      const roleRes = await getEntireRoleList()
      this.entireRoleList = roleRes.data.list
      const departmentRes = await getEntireDepartmentList()
      this.entireDepartmentList = departmentRes.data.list
    }
  }
})
export default useMainStore

import { defineStore } from 'pinia'
import { getEntireRoleList, getEntireDepartmentList, getEntireMenuList } from '@/service/main/main'
interface IMainState {
  entireRoleList: any[]
  entireDepartmentList: any[]
  entireMenuList: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoleList: [],
    entireDepartmentList: [],
    entireMenuList: []
  }),
  actions: {
    async handleGetEntireMainAction() {
      const roleRes = await getEntireRoleList()
      this.entireRoleList = roleRes.data.list

      const departmentRes = await getEntireDepartmentList()
      this.entireDepartmentList = departmentRes.data.list

      const menuRes = await getEntireMenuList()
      this.entireMenuList = menuRes.data.list

    }
  }
})
export default useMainStore

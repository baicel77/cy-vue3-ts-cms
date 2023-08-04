import { defineStore } from 'pinia'
import { loginRequest, getRoleByUserId, getMenuByRoleId } from '@/service/login/login'
import type { IAccount } from '@/type/login'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { TOKEN } from '@/global'
import type { IUserInfoData, IMenuInfoData } from '@/service/login/type'
interface ILoginState {
  token: string
  userInfo: IUserInfoData
  menuInfo: IMenuInfoData
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    menuInfo: localCache.getCache('menuInfo') ?? []
  }),
  actions: {
    async handleLoginAction(account: IAccount) {
      // 1.获取登录返回的信息
      const loginRes = await loginRequest(account)
      // 1.1保存token
      this.token = loginRes.data.token
      localCache.setCache(TOKEN, loginRes.data.token)

      // 2.根据用户id获取详细信息(角色/部门等)
      const userRes = await getRoleByUserId(loginRes.data.id)
      // 2.1保存信息
      this.userInfo = userRes.data
      localCache.setCache('userInfo', userRes.data)

      // 3.根据角色id获取菜单列表(权限)
      const menuRes = await getMenuByRoleId(userRes.data.role.id)
      // 3.1保存信息
      this.menuInfo = menuRes.data
      localCache.setCache('menuInfo', menuRes.data)

      // 4.跳转到main页面
      router.push('/main')
    }
  }
})

export default useLoginStore

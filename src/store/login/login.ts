import { defineStore } from 'pinia'
import { loginRequest } from '@/service/login/login'
import type { IAccount } from '@/type/login'
import { localCache } from '@/utils/cache'

const useLoginStore = defineStore('login', {
  state: () => ({
    token: localCache.getCache('token') ?? '',
    id: 0,
    name: ''
  }),
  actions: {
    async handleLoginAction(account: IAccount) {
      const res = await loginRequest(account)
      // 1.保存到pinia
      this.token = res.data.token
      this.id = res.data.id
      this.name = res.data.name
      // 2.保存到本地
      localCache.setCache('token', res.data.token)
    }
  }
})

export default useLoginStore

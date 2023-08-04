import cyRequest from '../'
import type { IAccount } from '@/type/login'
import type { ILogin, IUserInfo, IMenuInfo } from './type'

export function loginRequest(account: IAccount) {
  return cyRequest.post<ILogin>({
    url: '/login',
    data: account
  })
}

export function getRoleByUserId(id: number) {
  return cyRequest.get<IUserInfo>({
    url: `/users/${id}`
  })
}

export function getMenuByRoleId(id: number) {
  return cyRequest.get<IMenuInfo>({
    url: `/role/${id}/menu`
  })
}

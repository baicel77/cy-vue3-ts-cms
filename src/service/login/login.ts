import cyRequest from '../'
import type { IAccount } from '@/type/login'
import type { ILogin } from './type'

export function loginRequest(account: IAccount) {
  return cyRequest.post<ILogin>({
    url: '/login',
    data: account
  })
}

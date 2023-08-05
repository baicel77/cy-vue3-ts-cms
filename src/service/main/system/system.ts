import cyRequest from '../..'
import type { IUserData } from './type'
export function getUserList() {
  return cyRequest.post<IUserData>({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}

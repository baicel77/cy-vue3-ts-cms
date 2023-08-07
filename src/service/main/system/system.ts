import cyRequest from '../..'
import type { IUserData } from './type'
export function getUserList(data: any) {
  return cyRequest.post<IUserData>({
    url: '/users/list',
    data
  })
}

export function deleteUserById(id: number) {
  return cyRequest.delete({
    url: `/users/${id}`
  })
}

export function addUser(data: any) {
  return cyRequest.post({
    url: '/users',
    data
  })
}

export function editUser(id: number, data: any) {
  return cyRequest.patch({
    url: `/users/${id}`,
    data
  })
}

// page
export function getPageData(pageName: string, data: any) {
  return cyRequest.post({
    url: `/${pageName}/list`,
    data
  })
}

export function deletePageDataById(pageName: string, id: number) {
  return cyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function addPageData(pageName: string, data: any) {
  return cyRequest.post({
    url: `/${pageName}`,
    data
  })
}

export function editPageData(pageName: string, id: number, data: any) {
  return cyRequest.patch({
    url: `/${pageName}/${id}`,
    data
  })
}

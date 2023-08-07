import cyRequest from '../'
export function getEntireRoleList() {
  return cyRequest.post({
    url: '/role/list',
  })
}

export function getEntireDepartmentList() {
  return cyRequest.post({
    url: '/department/list'
  })
}


export interface IUserListData {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
export interface IUserData {
  code: number
  data: {
    list: Array<IUserListData>
    totalCount: number
  }
}

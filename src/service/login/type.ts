interface ILoginData {
  id: number
  name: string
  token: string
}
export interface ILogin {
  code: number
  data: ILoginData
}

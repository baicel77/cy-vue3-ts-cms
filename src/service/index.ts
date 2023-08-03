import CYRequest from './request'
import { BASE_URL1, TIME_OUT1, BASE_URL2, TIME_OUT2 } from './config'

const cyRequest1 = new CYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    successRequetInterceptors: (config)  => {
      return config
    },
    failRequetInterceptors: err => {
      return err
    },
    successResponseInterceptors: res => {
      return res
    },
    failResponseInterceptors: err => {
      return err
    }
  }
})
export const cyRequest2 = new CYRequest({
  baseURL: BASE_URL2,
  timeout: TIME_OUT2
})


export default cyRequest1

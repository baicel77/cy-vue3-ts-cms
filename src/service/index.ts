import CYRequest from './request'
import { BASE_URL1, TIME_OUT1 } from './config'

const cyRequest = new CYRequest({
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



export default cyRequest

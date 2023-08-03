export const BASE_URL1 = "http://123.207.32.32:8000"
export const TIME_OUT1 = 10000


export const BASE_URL2 = "http://123.207.32.32:1888/api"
export const TIME_OUT2 = 8000

// 区分开发环境和生产环境
// 1.手动
let envrioment = ''
// const BASE_URL = 'production'

/*
  2.根据环境变量判断切换
  BASE_URL DEV MODE PROD SSR
*/

if (import.meta.env.MODE === 'development') {
  envrioment = 'development'
} else {
  envrioment = 'production'
}

// 3.根据dotenv文件 .env .env.[mode] VITE_

console.log(import.meta.env)
console.log('envrioment:', envrioment)


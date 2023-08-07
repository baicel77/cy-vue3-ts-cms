import { createPinia } from 'pinia'
import useLoginStore from '@/store/login/login'
import type { App } from 'vue'
const registerStore = (app: App<Element>) => {
  // 1.安装pinia插件
  const store = createPinia()
  app.use(store)
  // 2.界面刷新的时候在这里重新获取路由对象,此步骤需要在注册路由插件之前
  const loginStore = useLoginStore()
  loginStore.handleRefreshAction()
}
export default registerStore

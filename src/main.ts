import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/index.less'
import router from './router'
import store from './store'
import { registerIcon } from '@/global'
/*
  element plus
  1.完整引入
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  2.按需引入
  npm install -D unplugin-vue-components unplugin-auto-import ...

  ElMessage ElLoding等样式需要单独导入
  1.完整引入
  import 'element-plus/dist/index.css'
  2.按需引入
  import 'element-plus/theme-chalk/el-message.css'
  3.利用插件自动引入
  3.1.npm i vite-plugin-style-import consola -D
  3.2.在vite配置文件中进行相应的配置
*/
// import 'element-plus/theme-chalk/el-message.css'
const aaa = '111'

const aaa = '222'
console.log(bbb)


const app = createApp(App)
app.use(store)
app.use(router)
app.use(registerIcon)
app.mount('#app')

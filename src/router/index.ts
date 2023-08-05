import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { TOKEN } from '@/global'
import { firstMenu } from '@/utils/map-menu'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue'),
      children: []
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/notFound/NotFound.vue')
    }
  ]
})

// 导航守卫: 登录之后访问的页面都需带有token, 如果没有token, 返回登录页面
router.beforeEach((to) => {
  const token = localCache.getCache(TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/main') {
    return firstMenu
  }
})

export default router

import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { TOKEN } from '@/global'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue'),
      children: [
        {
          path: '/main',
          redirect: '/main/analysis/overview'
        },
        {
          path: '/main/analysis/overview',
          component: () => import('@/views/main/analysis/overview/Overview.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () => import('@/views/main/analysis/dashboard/Dashboard.vue')
        },
        {
          path: '/main/system/user',
          component: () => import('@/views/main/system/user/User.vue')
        },
        {
          path: '/main/system/department',
          component: () => import('@/views/main/system/department/Department.vue')
        }
      ]
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
})

export default router

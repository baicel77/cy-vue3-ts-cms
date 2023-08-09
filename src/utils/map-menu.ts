import type { RouteRecordRaw } from 'vue-router'
import type { IMenuInfoData } from '@/service/login/type'

// 动态加载到路由对象文件
const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
  eager: true
})
const allRoutes: RouteRecordRaw[] = []
for (const key in files) {
  const value = files[key]
  const route = value.default
  allRoutes.push(route)
}


// 根据获取到的菜单映射相应的路由对象
export let firstMenu: string = ''
export function mapMenuToRoutes(userMenu: IMenuInfoData) {
  const finalRoutes: any[] = []
  userMenu.forEach((item) => {
    item.children.forEach((citem) => {
      const route = allRoutes.find((route) => {
        return route.path === citem.url
      })
      if (route) {
        finalRoutes.push(route)
        if (!firstMenu) {
          firstMenu = route.path
        }
      }
    })
  })
  return finalRoutes
}

/**
 * 根据路匹配对应的菜单id
 * @param routePath 当前路径
 * @param userMenu 用户菜单
 */
export function mapRouteToMenuId(routePath: string, userMenu: IMenuInfoData) {
  let activeId = ''
  userMenu.forEach(item => {
    item.children.forEach(citem => {
      if (citem.url === routePath) {
        activeId = citem.id + ''
      }
    })
  })
  return activeId
}

interface ICrumb {
  path: string
  name: string
}

// 根据当前路由匹配对应的面包屑
export function mapRouteToCrumb(routePath: string, userMenu: IMenuInfoData) {
  const crumb: ICrumb[] = []
  userMenu.forEach((item) => {
    item.children.forEach((citem) => {
      if (citem.url === routePath) {
        crumb.push({
          path: item.children[0].url,
          name: item.name
        })
        crumb.push({
          path: citem.url,
          name: citem.name
        })
      }
    })
  })
  return crumb
}

// 根据当前角色菜单数据映射对应的菜单id
export function mapMenuToIds(menuList: any) {
  const ids: any[] = []
  function getIds(menuList: any) {
    menuList.forEach((item: any) => {
      if (item.children) {
        getIds(item.children)
      } else {
        ids.push(item.id)
      }
    })
  }
  getIds(menuList)
  return ids
}

// 根据菜单获取用户按钮权限数据
export function mapMenuListToPermission(menuList: any) {
  const permission: string[] = []
  console.log('menuList', menuList)
  function recurseGetPermission(menuList: any) {
    menuList.forEach((item: any) => {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    })
  }
  recurseGetPermission(menuList)
  return permission
}

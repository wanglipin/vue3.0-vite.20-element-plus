import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/view/layout/Index.vue')
const App = () => import('@/view/layout/App.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    hidden: true,
    component: () => import('@/view/login/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    hidden: true,
    component: Layout,
    redirect: '/UserManagement/todo',
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    redirect: '/UserManagement/todo',
    component: Layout,
    meta: {
      title: '导航1',
      alwaysShow: true
    },
    children: [
      {
        path: '/UserManagement/todo',
        name: 'todo',
        meta: {
          title: 'todo'
        },
        component: () => import('@/view/todo/index.vue')
      },
      {
        path: '/UserManagement/User2',
        name: 'User2',
        meta: {
          title: '编辑器'
        },
        component: () => import('@/view/uses/index2.vue')
      }
    ]
  },
  {
    path: '/feat',
    name: 'feat',
    redirect: '/feat/icon',
    component: Layout,
    meta: {
      title: '功能',
      alwaysShow: true
    },
    children: [
      {
        path: '/feat/icon', 
        name: 'icon',
        meta: {
          title: '图标'
        },
        component: () => import('@/view/icon/index.vue')
      }
    ]
  },
  {
    path: '/navigation2',
    name: 'navigation2',
    meta: {
      alwaysShow: false,
    },
    component: Layout,
    children: [
      {
        path: '/navigation2',
        name: 'nav2',
        component: () => import('@/view/uses/index3.vue'),
        meta: {
          title: 'test-01'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'is-active',  //TODO 这个是可以设置全局router菜单栏颜色
  routes,
  scrollBehavior: (to, from, savedPosition) => ({ left: 0, top: 0 }), // TODO 设置记录滚动条行为
})

export default router

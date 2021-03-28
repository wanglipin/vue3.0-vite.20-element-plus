import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/view/layout/Index.vue')
const App = () => import('@/view/layout/App.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    hidden: true,
    meta: {
      title: '登录'
    },
    component: () => import('@/view/login/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '全部'
    },
    hidden: true,
    component: Layout
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    redirect: '/UserManagement/User1',
    component: Layout,
    meta: {
      title: '导航1'
    },
    children: [
      {
        path: '/UserManagement/User1',
        name: 'User1',
        meta: {
          title: '选项1'
        },
        component: () => import('@/view/uses/index.vue'),
      },
      {
        path: '/UserManagement/User2',
        name: 'User2',
        meta: {
          title: '选项2'
        },
        component: () => import('@/view/uses/index2.vue')
      }
    ]
  },
  {
    path: '/navigation2',
    name: 'navigation2',
    component: Layout,
    children: [
      {
        path: '/navigation2',
        name: 'nav2',
        component: () => import('@/view/uses/index3.vue'),
        meta: {
          title: '导航2'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'is-active',  //TODO 这个是可以设置全局router菜单栏颜色
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router

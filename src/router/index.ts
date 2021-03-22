import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


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
    path: '/Index',
    name: 'Index',
    meta: {
      title: '全部'
    },
    hidden: true,
    component: () => import('@/view/layout/Index.vue')
  },
  {
    path: '/UserManagement',
    name: 'UserManagement',
    redirect: '/UserManagement/User1',
    meta: {
      title: '导航1'
    },
    children: [
      {
        path: '/User1',
        name: 'User1',
        meta: {
          title: '选项1'
        },
        component: () => import('@/view/uses/index.vue'),
      },
      {
        path: '/User2',
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
    component: () => import('@/view/uses/index2.vue'),
    meta: {
      title: '导航2'
    }
  },
  {
    path: '/navigation3',
    name: 'navigation3',
    component: () => import('@/view/uses/index3.vue'),
    meta: {
      title: '导航3'
    },
  },
  {
    path: '/navigation4',
    name: 'navigation4',
    redirect: '/navigation4/Nav4',
    component: () => import('@/view/uses/index4.vue'),
    meta: {
      title: '导航4'
    }
  },
  {
    path: '/navigation5',
    name: 'navigation5',
    component: () => import('@/view/uses/index5.vue'),
    meta: {
      title: '导航5'
    },
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

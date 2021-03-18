import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/view/login/Login.vue')
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('@/view/layout/Index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

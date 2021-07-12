import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/view/layout/Index.vue')
const App = () => import('@/view/layout/App.vue')

// 下边是扩展routes 中的额外扩展字段ts支持 => vue中 自带的RouteRecordRaw  可已经包括meta的ts支持，不用拓展
export type AppRouteRouteRecordRaw = RouteRecordRaw & {
	hidden?: Boolean
}
const routes: Array<AppRouteRouteRecordRaw> = [
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
		redirect: '/UserManagement/todo'
	},
	{
		path: '/UserManagement',
		name: 'UserManagement',
		redirect: '/UserManagement/todo',
		component: Layout,
		meta: {
			title: '示例',
			alwaysShow: true
		},
		children: [
			{
				path: 'todo',
				name: 'todo',
				meta: {
					title: 'todo'
				},
				component: () => import('@/view/todo/index.vue')
			},
			{
				path: 'User2',
				name: 'User2',
				meta: {
					title: '编辑器'
				},
				component: () => import('@/view/uses/index2.vue')
			}
		]
	},
	{
		path: '/table',
		name: 'table',
		redirect: '/table/dynameicTable',
		component: Layout,
		meta: {
			title: '表格',
			alwaysShow: true
		},
		children: [
			{
				path: 'dynameicTable',
				name: 'dynameicTable',
				meta: {
					title: '动态Table'
				},
				component: () => import('@/view/table/dynamicTable/index.vue')
			},
			{
				path: 'editTable',
				name: 'editTable',
				meta: {
					title: '可编辑Table'
				},
				component: () => import('@/view/table/editTable/index.vue')
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
				path: 'icon',
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
			alwaysShow: false
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
	history: createWebHistory(),
	linkActiveClass: 'is-active', //TODO 这个是可以设置全局router菜单栏颜色
	routes,
	scrollBehavior: (to, from, savedPosition) => ({ left: 0, top: 0 }) // TODO 设置记录滚动条行为
})

export default router

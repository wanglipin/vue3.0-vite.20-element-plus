<!--
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 08:14:06
 * @FilePath: \vue3.0-vite.20-element-plus\src\view\layout\components\sidebar\Index.vue
-->
<template>
	<el-scrollbar class="aside-container-bar">
		<el-aside
			:class="['aside-container']"
			:width="isCollapse ? '65px' : '260px'"
		>
			<!-- :background-color="variables.menuBg" -->
			<el-menu
				background-color="#032121"
				class="el-menu-vertical-demo p-menu-drk"
				text-color="rgba(254,254,254,.65)"
				active-text-color="#fefefe"
				@open="handleOpen"
				@close="handleClose"
				:router="true"
				:collapse="isCollapse"
				:collapse-transition="false"
				:unique-opened="true"
				:default-active="activeData"
			>
				<SidebarHeader :isCollapse="isCollapse"></SidebarHeader>
				<sidebarItem
					v-for="route in routers"
					:key="route.path"
					:item="route"
					:base-path="route.path"
				>
				</sidebarItem>
			</el-menu>
			<slot></slot>
		</el-aside>
	</el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import variables from '@/styles/variables.module.scss'
import sidebarItem from './SidebarItem.vue'
import SidebarHeader from './SidebarHeader.vue'

export default defineComponent({
	name: 'Aside',
	props: {
		isCollapse: {
			type: Boolean
		}
	},
	components: { sidebarItem, SidebarHeader },
	setup() {
		const { options } = useRouter()
		const router = useRoute()
		const routers = options.routes
		const data = reactive({
			singleChild: {
				meta: {
					title: ''
				},
				path: ''
			},
			activeData: ''
		})
		const handleOpen = () => {
			console.log('222')
		}
		const handleClose = () => {
			console.log('3333')
		}
		// 如果菜单栏只有一项则处理
		const hasOneChild = (children: any, item: any) => {
			if (children.length == 1 && !item.meta.alwaysShow) {
				data.singleChild = children[0]
				return true
			}
			return false
		}
		// !用watch监听路由的办法
		watch(
			() => router,
			() => {
				// 确保刷新页面或者第一次登录页面让菜单栏高亮与路由对应
				data.activeData = router.path
			},
			{
				deep: true,
				immediate: true
			}
		)
		/* 监听路由变化
    onBeforeRouteUpdate(to => {
      console.log(to, '!!!!!!!!!!')
    })  */
		return {
			routers,
			handleOpen,
			handleClose,
			...toRefs(data),
			hasOneChild
		}
	}
})
</script>

<style lang="scss" scoped></style>

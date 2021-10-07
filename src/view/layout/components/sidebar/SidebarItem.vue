<!--
 * @Author: 王立品
 * @Date: 2021-07-09 00:43:26
 * @LastEditTime: 2021-10-07 20:00:25
 * @FilePath: \filee:\learning\vue3.0-vite.20-element-plus\src\view\layout\components\sidebar\SidebarItem.vue
-->
<template>
	<div v-if="!item.hidden">
		<!-- 二级菜单 -->
		<template v-if="hasOneChild(item.children, item)">
			<app-link
				v-if="resolvePath(singleChild.path)"
				:to="resolvePath(singleChild.path)"
			>
				<el-menu-item :index="resolvePath(singleChild.path)">
					<i class="el-icon-menu"></i>
					<template #title>
						<span>
							{{ singleChild.meta.title }}
						</span>
					</template>
				</el-menu-item>
			</app-link>
		</template>
		<el-sub-menu v-else :index="resolvePath(item.path)" popper-append-to-body>
			<!-- 一级菜单 -->
			<template #title>
				<i class="el-icon-location"></i>
				<span>{{ item.meta.title }}</span>
			</template>
			<!-- 如果有二级菜单则递归 -->
			<SidebarItem
				v-for="child in item.children"
				:key="child.path"
				:item="child"
				:base-path="resolvePath(item.path)"
			>
			</SidebarItem>
		</el-sub-menu>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { isExternalLink } from '@/utils/resolvePath'
import appLink from './Link.vue'
import path from 'path-browserify' // 浏览器支持的path方法

export default defineComponent({
	name: 'SidebarItem',
	components: { appLink },
	props: {
		item: {
			type: Object,
			default: () => {
				return {}
			}
		},
		basePath: {
			type: String,
			default: ''
		}
	},
	setup(props) {
		const state = reactive({
			singleChild: {
				meta: {
					title: ''
				},
				path: ''
			},
			activeData: ''
		})
		// 如果菜单栏只有一项则处理
		const hasOneChild = (children = [], item: any) => {
			if (children.length == 1) {
				state.singleChild = children[0] // 只有1个菜单的时候没有分组
				return true
			}
			if (!children.length) {
				state.singleChild = item // 二级菜单显示
				return true
			}
			return false // 一级菜单显示
		}
		const resolvePath = (routePath: string) => {
			if (isExternalLink(routePath)) {
				return routePath
			}
			if (isExternalLink(props.basePath)) {
				return props.basePath
			}
			return path.resolve(props.basePath, routePath)
		}
		return {
			hasOneChild,
			resolvePath,
			...toRefs(state)
		}
	}
})
</script>

<style lang="sass" scoped></style>

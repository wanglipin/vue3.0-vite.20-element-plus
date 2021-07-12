<!--
 * @Author: 王立品
 * @Date: 2021-07-09 00:43:26
 * @LastEditTime: 2021-07-11 21:58:04
 * @FilePath: \vue3.0-vite.20-element-plus\src\view\layout\components\sidebar\SidebarItem.vue
-->
<template>
	<div v-if="!item.hidden">
		<!-- 只有一個菜菜单 -->
		<template v-if="hasOneChild(item.children, item)">
			<el-menu-item
				v-if="singleChild.meta"
				:index="singleChild.path"
				:route="{ path: singleChild.path }"
			>
				<i class="el-icon-menu"></i>
				<template #title>
					<span>
						{{ singleChild.meta.title }}
					</span>
				</template>
			</el-menu-item>
		</template>
		<!-- 二级菜单 支持递归无限级层级-->
		<el-submenu v-else :index="item.path" popper-append-to-body>
			<template #title>
				<i class="el-icon-location"></i>
				<span>{{ item.meta && item.meta.title }}</span>
			</template>
			<SidebarItem
				v-for="child in item.children"
				:key="child.path"
				:item="child.item"
				:base-path="child.path"
			>
			</SidebarItem>
		</el-submenu>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { resolvePath } from '../../../../utils/resolvePath'

export default defineComponent({
	name: 'SidebarItem',
	props: {
		item: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	setup() {
		const sate = reactive({
			singleChild: {
				meta: {
					title: ''
				},
				path: ''
			},
			activeData: ''
		})
		// 如果菜单栏只有一项则处理
		const hasOneChild = (children: any, item: any) => {
			// debugger
			console.log(children, 'childrenchildren', item)
			if (children?.length == 1 && !item.meta.alwaysShow) {
				sate.singleChild = children[0]
				return true
			} else {
				return true
			}
		}
		return {
			hasOneChild,
			resolvePath,
			...toRefs(sate)
		}
	}
})
</script>

<style lang="sass" scoped></style>

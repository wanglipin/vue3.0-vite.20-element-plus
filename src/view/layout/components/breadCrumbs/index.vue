<template>
	<el-breadcrumb separator="/" style="padding: 10px 0">
		<!-- <el-breadcrumb-item v-for="breadcrumbItem in breadcrumbList" :key="breadcrumbItem.path">{{ breadcrumbItem.meta.title }}</el-breadcrumb-item> -->
		<el-breadcrumb-item
			v-for="breadcrumbItem in breadcrumbList"
			:key="breadcrumbItem.path"
		>
			<el-dropdown
				v-if="breadcrumbItem.children.length"
				@command="handleBreadcrumb"
			>
				<span class="el-dropdown-link">
					{{ breadcrumbItem.meta.title
					}}<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item
							v-for="item in breadcrumbItem.children"
							:key="item.path"
							:command="item.path"
							>{{ item.meta.title }}</el-dropdown-item
						>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
			<span v-else style="color: #999">{{ breadcrumbItem.meta.title }}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	name: '',
	setup() {
		const router = useRouter()
		const data = reactive({})
		const breadcrumbList = computed(() => {
			// [router.currentRoute.value.matched[1]] 如果只有一个一级菜单情况下返回第一个，第0个没有meta.title
			return !router.currentRoute.value.matched[0].meta.title
				? [router.currentRoute.value.matched[1]]
				: router.currentRoute.value.matched
		})
		const handleBreadcrumb = (row: string) => {
			router.push(row)
		}
		return {
			handleBreadcrumb,
			breadcrumbList,
			...toRefs(data)
		}
	}
})
</script>
<style scoped lang="scss"></style>

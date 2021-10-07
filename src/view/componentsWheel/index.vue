<!--
 * @Author: O_Pin
 * @Date: 2021-07-01 13:57:16
 * @LastEditTime: 2021-10-07 23:06:45
-->
<template>
	<el-card class="box-card">
		<el-row>
			<el-col :span="12">
				<p>单选选择框树形组件</p>
				<el-select
					:model-value="selectValue"
					placeholder="Select"
					collapse-tags
					@blur="handleSelect"
				>
					<el-option
						:value="optionId"
						:label="optionLabel"
						class="tree-container"
					>
						<el-tree
							ref="treeRef"
							node-key="id"
							:data="treeOptions"
							highlight-current
							:props="defaultProps"
							@node-click="handleNodeClick"
						/>
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="12"
				><div class="grid-content bg-purple-light"></div
			></el-col>
		</el-row>
	</el-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue'

interface StateData {
	selectValue: string
	selectValueArray: any
	treeOptions: Array<any>
	defaultProps: any
	options: any
}
interface Option {
	label: string
	value: string
}

export default defineComponent({
	name: '',
	setup() {
		const treeRef = ref<any>(null)
		const state = reactive<StateData>({
			selectValue: '',
			selectValueArray: [],
			options: [
				{
					label: '王立品',
					value: '1111'
				}
			],
			treeOptions: [
				{
					label: 'Level one 1',
					id: 1,
					children: [
						{
							label: 'Level two 1-1',
							id: 2,
							children: [
								{
									label: 'Level three 1-1-1',
									id: 3
								}
							]
						}
					]
				},
				{
					label: 'Level one 2',
					id: 4,
					children: [
						{
							label: 'Level two 2-1',
							id: 5,
							children: [
								{
									label: 'Level three 2-1-1',
									id: 6
								}
							]
						}
					]
				},
				{
					label: 'Level one 3',
					id: 7
				}
			],
			defaultProps: {
				children: 'children',
				label: 'label'
			}
		})
		const handleNodeClick = (val: any) => {
			state.selectValueArray.splice(0)
			state.selectValue = ''
			state.selectValueArray.push(val)
			state.selectValue = val.id
		}
		const handleSelect = (val: any) => {
			if (state.selectValueArray.length) {
				// treeRef.value.setCurrentKey(state.selectValueArray[0]?.id)
			}
		}
		const optionId = computed(() => {
			return state.selectValueArray[0]?.id || ''
		})
		const optionLabel = computed(() => {
			return state.selectValueArray[0]?.label || ''
		})
		return {
			...toRefs(state),
			handleNodeClick,
			handleSelect,
			treeRef,
			optionId,
			optionLabel
		}
	}
})
</script>
<style scoped lang="scss">
.tree-container {
	height: auto !important;
	padding: 0;
	font-weight: 400;
}
</style>

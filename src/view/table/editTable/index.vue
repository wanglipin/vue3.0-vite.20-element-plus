<!--
 * @Author: O_Pin
 * @Date: 2021-07-01 13:57:16
 * @LastEditTime: 2021-07-02 10:22:48
-->
<template>
	<el-card class="box-card">
		<editTable
			:data="tableData"
			:columns="columns"
			border
			@selection-change="true"
		></editTable>
	</el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import editTable from './table';

export default defineComponent({
	name: '',
	components: { editTable },
	setup() {
		const state = reactive({
			tableData: [
				{
					id: '1',
					name: '王立品',
					amount1: '234',
					amount2: '3.2',
					amount3: 10,
				},
				{
					id: '2',
					name: '陈曦',
					amount1: '165',
					amount2: '4.43',
					amount3: 12,
				},
			],
			columns: [
				{
					prop: 'id',
					label: 'ID',
					width: '180',
				},
				{
					prop: 'name',
					label: '姓名',
				},
				{
					prop: 'amount1',
					label: '数值 1（元',
				},
				{
					prop: 'amount2',
					label: '数值 2（元',
				},
				{
					prop: 'amount3',
					label: '数值 3（元)',
				},
			],
		});
		return {
			...toRefs(state),
		};
	},
});
</script>
<style scoped lang="scss"></style>

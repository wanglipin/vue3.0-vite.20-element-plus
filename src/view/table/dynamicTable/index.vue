<template>
	<el-card class="box-card">
		<el-table
			:data="tableData"
			:span-method="objectSpanMethod"
			border
			style="width: 100%; margin-top: 20px"
		>
			<el-table-column prop="id" label="ID" width="180"> </el-table-column>
			<el-table-column prop="name" label="姓名"> </el-table-column>
			<el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
			<el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
			<el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
		</el-table>
	</el-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';

export default defineComponent({
	name: 'dynamicTable',
	setup() {
		const state = reactive<any>({
			spanArr: [],
			pos: null,
			tableData: [
				{
					id: '1',
					name: '王小虎',
					amount1: '234',
					amount2: '3.2',
					amount3: 10,
				},
				{
					id: '1',
					name: '王小虎',
					amount1: '165',
					amount2: '4.43',
					amount3: 12,
				},
				{
					id: '2',
					name: '王小虎',
					amount1: '324',
					amount2: '1.9',
					amount3: 9,
				},
				{
					id: '2',
					name: '王小虎',
					amount1: '621',
					amount2: '2.2',
					amount3: 17,
				},
				{
					id: '2',
					name: '王小虎',
					amount1: '539',
					amount2: '4.1',
					amount3: 15,
				},
			],
		});
		const getSpanArr = (data: any) => {
			state.spanArr = [];
			for (var i = 0; i < data.length; i++) {
				if (i === 0) {
					state.spanArr.push(1);
					state.pos = 0;
				} else {
					// 判断当前元素与上一个元素是否相同
					if (data[i].id === data[i - 1].id) {
						state.spanArr[state.pos] += 1;
						state.spanArr.push(0);
					} else {
						state.spanArr.push(1);
						state.pos = i;
					}
				}
			}
		};
		const objectSpanMethod = ({ row, column, rowIndex, columnIndex }: any) => {
			if (columnIndex === 0 || columnIndex === 1) {
				const _row = state.spanArr[rowIndex];
				const _col = _row > 0 ? 1 : 0;
				return {
					rowspan: _row,
					colspan: _col,
				};
			}
		};
		onMounted(() => {
			getSpanArr(state.tableData);
		});
		return {
			getSpanArr,
			objectSpanMethod,
			...toRefs(state),
		};
	},
});
</script>
<style scoped lang="scss"></style>

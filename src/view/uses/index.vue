<template>
	<el-card class="box-card">
		<div style="margin-left: 10px" v-if="tags.length > 0">
			<el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
				{{ tag.name }}
			</el-tag>
		</div>
		<el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
			<el-table-column width="500">
				<template v-slot="{ row, column, $index }">
					<el-checkbox v-model="row.checked" @change="handleCheckbox(row)">
						<span style="margin-left: 10px">{{ row.date }}</span>
					</el-checkbox>
          <!-- <span v-else style="margin-left: 10px">{{ row.date }}</span> -->
				</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址"> </el-table-column>
		</el-table>
	</el-card>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';

interface tableType {
	id: string | number;
	name: string;
	date: string;
	children: any;
	address: string;
}
export default defineComponent({
	name: '',
	setup() {
    const handleCheckbox = (obj: any) => {
      console.log(obj)
    }
    const load = (tree, treeNode, resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
		const data = reactive<Array<tableType>>({
			tableData: [
				{
					id: 1,
          checked: true,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true,
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			],
			tags: [
				{ name: '标签一'},
				{ name: '标签二'},
				{ name: '标签三'},
				{ name: '标签四'},
				{ name: '标签五'}
			]
    })
		return {
			...toRefs(data),
      handleCheckbox,
      load
		};
	}
});
</script>
<style scoped lang='scss'>
</style>

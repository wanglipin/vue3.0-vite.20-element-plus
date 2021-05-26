<template>
	<el-card class="box-card">
    <!-- <div>{{tagname}}</div> -->
		<div style="margin-left: 10px">
			<el-tag
				v-for="(tag, index) in tags"
				:key="tag.name"
				closable
				:type="tag.type"
				@close="handleClose(tag, index)"
			>
				{{ tag.name }}
			</el-tag>
		</div>
		<el-table
			:data="tableData"
			style="width: 100%"
			row-key="id"
			border
		>
			<el-table-column width="500">
				<template v-slot="{ row }">
					<el-checkbox v-model="row.checked" @change="handleCheckbox(row)" v-if="row.hasOwnProperty('checked')">
            {{ row.date }}
					</el-checkbox>
          <span v-else>{{ row.date }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" sortable width="180">
			</el-table-column>
		</el-table>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
	</el-card>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';

interface tableType {
	id: string | number;
	name: string;
	date: string;
	children?: any;
	address: string;
}
export default defineComponent({
	name: '',
  computed: {
    tagname ({tags}) {
      tags.forEach(item => {
        
      });
      console.log('1111')
      return 1
    },
    checked ({listId}) {
      console.log(listId)
      return function (id) {
        return listId.includes(id)
      }
    }
  },
	setup() {
		const data = reactive({
			tableData: [
				{
					id: 1,
					date: '2016-05-02',
					name: '小七',
          
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '小八',
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王立品',
              checked: false,
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '陈曦',
              checked: false,
            }
          ]
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '小九',
					address: '上海市普陀区金沙江路 1516 弄',
				}
			],
      tags: [],
      listId: []
		});
		const handleCheckbox = (obj: any) => {
      const index = data.listId.indexOf(obj.id)
      if (index > -1) {
        data.tags.splice(data.listId.indexOf(obj.id), 1) // 删除当前点击项
        data.listId.splice(data.listId.indexOf(obj.id), 1)
      } else {
        data.tags.push(obj)
        data.listId.push(obj.id)
      }
		};
    const handleClose = (tag: number, index: number) => {
      data.tags.splice(index, 1) // 删除当前点击项
      data.listId.splice(index, 1)
      data.tableData.forEach(item => {
        if(item.children?.length) {
          recursive(item.children, tag)
        }
      })
    }
    // 递归调用
    const recursive = (children: any, tag: any) => {
      children.forEach(item => {
        if (item.id == tag.id) {
          item.checked = false
        }
        if (item.children?.length) {
          recursive(item.children, tag)
        }
      });
    }
		return {
			...toRefs(data),
			handleCheckbox,
      handleClose
		};
	}
});
</script>
<style scoped lang='scss'>
</style>

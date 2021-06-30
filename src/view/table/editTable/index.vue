<template>
  <editTable :data="tableData" :columns="columns" border @selection-change="true"></editTable>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import editTable  from './table'

export default defineComponent ({
  name: '',
  components: { editTable },
  setup() {
    const state = reactive({
      tableData: [
        {
          id: '1',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '1',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '2',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '2',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '2',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ],
      columns:[
        {
          prop: 'id',
          label: 'ID',
          width: '180'
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
          
        }
      ]
    })
    return {
      ...toRefs(state),
    }
  }
})

</script>
<style scoped lang='scss'>
</style>

import { defineComponent, reactive } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  setup(props, { attrs }) {
    const state = reactive<any>({
      spanArr: [],
      pos: null,
      tableData: [{
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
      }]
    });
    return () => (
      <el-card class="box-card">
        <el-table
          { ...attrs }
          border>
        </el-table>
      </el-card>
    );
  },
});

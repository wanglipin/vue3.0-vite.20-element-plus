import { withModifiers,defineComponent, unref, onMounted, computed, reactive } from 'vue';

export default defineComponent({
  setup() {
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
      <el-card className="box-card">
        <el-table
          // data="{ state.tableData }"
          style="width: 100%; margin-top: 20px">
          <el-table-column
            prop="id"
            label="ID"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="数值 1（元）">
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="数值 2（元）">
          </el-table-column>
          <el-table-column
            prop="amount3"
            label="数值 3（元）">
          </el-table-column>
        </el-table>
      </el-card>
    );
  },
});

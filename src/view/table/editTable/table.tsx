import { defineComponent, reactive } from 'vue';
import columns from './columns';

export default defineComponent({
  inheritAttrs: false, // attrs 用这个值
  props: ['data', 'columns'],
  components: { columns },
  setup(props, { attrs }) {
    const state = reactive<any>({});
    return () => {
      return(
        <el-card class="box-card">
          <el-table
            data={ props.data }
            { ...attrs }>
            <columns columns={ props.columns } v-slots={{ default: () => <span>1111111</span>}} />
          </el-table>
      </el-card>
      )
    }
  }
});

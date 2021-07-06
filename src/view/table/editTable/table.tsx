import { defineComponent, reactive } from 'vue';
import columns from './columns';

export default defineComponent({
  inheritAttrs: false, // attrs 用这个值
  props: ['data', 'columns'],
  components: { columns },
  setup(props, { attrs }) {
    const state = reactive<any>({});
    const slots = {
      default: () => {
        return <el-input/>
      }
    }
    return () => {
      return(
        <el-card class="box-card">
          <el-table
            data={ props.data }
            { ...attrs }>
            <columns columns={ props.columns }>
              <div>11</div>
            </columns>
          </el-table>
      </el-card>
      )
    }
  }
});

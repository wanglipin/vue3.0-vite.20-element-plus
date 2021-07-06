
import _Row from 'element-plus/lib/el-row';
import { createSlots, defineComponent, reactive } from 'vue';

export default defineComponent({
  inheritAttrs: false, // attrs 用这个值
  props: ['data', 'columns'],
  setup(props, { slots, attrs }) {
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
            {
              props.columns.map((item: any) => {
                return (
                  <el-table-column
                  { ...item }
                  v-slots={ slots }
                  >
                  {/* {{ default: () => <el-input></el-input> }} */}
                  </el-table-column>
                )
              })
            }
          </el-table>
      </el-card>
      )
    }
  }
});

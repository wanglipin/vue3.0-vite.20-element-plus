
import _Row from 'element-plus/lib/el-row';
import { createSlots, defineComponent, reactive } from 'vue';

export default defineComponent({
  inheritAttrs: false, // attrs 用这个值
  props: ['data', 'columns'],
  setup(props, { slots, attrs }) {
    const state = reactive<any>({});
    return () => {
      return(
        <el-table
          data={ props.data }
          { ...attrs }>
          {
            props.columns.map((item: any) => {
              return (
                <el-table-column
                { ...item }
                >
                  {{
                    default: () => <span>{(item)}</span>
                  }}
                </el-table-column>
              )
            })
          }
        </el-table>
      )
    }
  }
});

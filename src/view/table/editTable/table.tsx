import { defineComponent, reactive } from 'vue';

export default defineComponent({
  inheritAttrs: false, // attrs 用这个值
  props: ['data', 'columns'],
  setup(props, { attrs }) {
    console.log(attrs, props.data) // 属性，方法都可以继承
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

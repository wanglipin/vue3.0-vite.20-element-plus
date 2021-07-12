/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-15 00:40:33
 * @FilePath: \vue3.0-vite.20-element-plus\src\view\table\editTable\columns.tsx
 */
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['columns'],
  setup(props, { slots, attrs, emit}) {
    return () => {
      return(
        props.columns.map((item: any) => {
          return (
            <el-table-column
            { ...item }
            >{ slots.default && slots.default('插槽參數')}
            </el-table-column>
          )
        })
      )
    }
  }
});

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

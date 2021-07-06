
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['columns'],
  setup(props) {
    const slots = {
      default: (a: string) => {
        return <>{a}</>
      }
    }
    return () => {
      return(
        props.columns.map((item: any) => {
          return (
            <el-table-column
            { ...item }
            v-slots={ slots }
            >
            </el-table-column>
          )
        })
      )
    }
  }
});

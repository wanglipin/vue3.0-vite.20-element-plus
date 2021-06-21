<template>
  <el-input
    :value="todoTitle"
    v-bind="$attrs"
    @input="onIputChange"
  />
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'Edited',
  props: {
    todoTitle: {
      type: String,
      defalut: ''
    }
  },
  emits: ['update: todoTitle'],
  setup(props, {emit}) {
    const onIputChange = (val: any): void => {
      console.log(val, '!!!!!!!!!!')
      emit('update: todoTitle', val)
    }
    return {
      onIputChange
    }
  }
})

</script>
<style scoped lang='scss'>
</style>

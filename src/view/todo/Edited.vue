<template>
  <el-input
    :value="todoTitle"
    v-bind="$attrs"
    @input="onIput"
  />
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance, ref,onMounted } from 'vue'
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
    // const { ctx: _this }: any = getCurrentInstance()
    const onIput = (val: string): void => {
      emit('update: todoTitle', val)
      // _this.$forceUpdate()
    }
    
    return {
      onIput
    }
  }
})

</script>
<style scoped lang='scss'>
</style>

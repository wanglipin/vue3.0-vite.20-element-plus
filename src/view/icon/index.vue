<template>
  icon
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent ({
  name: '',
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  }
})

</script>
<style scoped lang='scss'>
</style>

<template>
  <el-main style="background: pink;margin: 20px 10px 10px 10px;">
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
  setup() {

  }
})
</script>

<style lang="sass" scoped>

</style>

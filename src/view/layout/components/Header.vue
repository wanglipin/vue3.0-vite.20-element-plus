<template>
  <el-header class="header-wrapper">
    <slot></slot>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const errorHandler = () => {
      return false;
    };
    return {
      errorHandler,
    };
  },
});
</script>

<style lang="scss">

</style>

<template>
  <div class="bottom" style="display: flex; justify-content: space-evenly">
    <el-check-tag
      v-for="tag in filtersItem"
      :key="tag"
      @change="onChange(tag)"
      :checked="tag.checked"
      >{{ tag.title }}</el-check-tag
    >
  </div>
</template>

<script lang='ts'>
interface filtersItem {
  title: string;
  checked: boolean;
}

import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'FiltersItem',
  props: ['filtersItem', 'modelValue'], //此处必须用modelValue 因为是默认的------你前边没有v-model：visibility=“XXX
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const onChange = (tag: filtersItem): void => {
      tag.checked = true;
      // props.visibility = tag.title;
      // 此处必须用modelValue 因为是默认的------你前边没有v-model：visibility=“XXX
      emit('update:modelValue', tag.title)
      props.filtersItem.forEach((item: filtersItem) => {
        if (item.title != tag.title) {
          item.checked = false;
        }
      });
    };
    return {
      onChange
    }
  }
})

</script>
<style scoped lang='scss'>
</style>

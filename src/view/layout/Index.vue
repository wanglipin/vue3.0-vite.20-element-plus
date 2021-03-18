<template>
  <div class="layout-warray">
    <el-radio-group v-model="isCollapse" @change="handleManucLosed" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-container style="height: 100vh; overflow-y: scroll; position: fixed;width: 100%;">
      <LayoutAside
        :isCollapse="isCollapse"
      />
      <el-container style="flex-direction: column;">
        <LatoutHeader/>
        <LatoutMain/>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import LayoutAside from './components/Aside.vue';
import LatoutHeader from './components/Header.vue';
import LatoutMain from './components/Main.vue';

export default defineComponent({
  name: 'Layout',
  components: { LatoutHeader, LayoutAside, LatoutMain },
  setup(props) {
    const data = reactive({
      isCollapse: false,
    });
    const handleManucLosed = () => {};
    return {
      handleManucLosed,
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss">
// 菜单栏设置背景色
.el-menu-item {
  color: rgba(254, 254, 254, 0.65);
  background: #032121;
}
// 菜单栏选中背景色
.layout-asid .el-menu-item.is-active {
  background-color: #13c2c2 !important;
}
// 菜单栏鼠标滑过背景色
.el-menu-item:hover {
  background-color: none;
}
.el-dropdown-menu,
.el-menu {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
}
.layout-asid {
  max-width: 256px;
  min-width: 256px;
  width: 256px;
}
.layout-asido {
  background: #032121;
  transition: all 0.25s;
}
.layout-asids {
  width: 65px;
  max-width: 65px;
  min-width: 65px;
  // transition: all 0.5s;
}
</style>

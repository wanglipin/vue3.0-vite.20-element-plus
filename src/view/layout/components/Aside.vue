<template>
  <el-aside :class="['layout-asido', isCollapse ? 'layout-asids' : 'layout-asid']">
    <!-- <el-menu
      background-color="#032121"
      class="el-menu-vertical-demo p-menu-drk"
      text-color="rgba(254,254,254,.65)"
      active-text-color="#fefefe"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="3">
        <img
          :class="[isCollapse ? 'logo' : '']"
          style="height: 30px"
          srcset="../../static/img/logo.9652507e.png"
        />
      </el-menu-item>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1123131</el-menu-item>
          <el-menu-item index="1-2">选项233333</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu> -->
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Aside',
  props: ['isCollapse'],
  setup() {},
});
</script>

<style lang="sass" scoped>
</style>

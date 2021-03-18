<template>
  <el-header class="header-wrapper">
    <el-col :span="4" class="header-item">
      <el-dropdown>
        <span class="el-dropdown-link">
          王立品<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {},
});
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  // align-items: center;
  height: 50px;
  background: #fff;
  justify-content: flex-end;
  padding: 0 10px 0 10px;
  .header-item {
    line-height: 50px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>

<template>
  <el-header class="header-wrapper">
    <el-col :span="2" class="header-item">
      <el-dropdown class="el-dropdown-link header-item">
        <div>
          <el-avatar src="https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png" @error="errorHandler">
            <span>
              <img
                class="header-username-img"
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
              />
            </span>
          </el-avatar>
          <span>王立品</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">中英文切换</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >退出</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
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
.header-wrapper {
  display: flex;
  // align-items: center;
  height: 50px!important;
  background: #fff;
  justify-content: flex-end;
  padding: 0 10px 0 10px;
  .header-item {
    line-height: 50px;
    .header-username-img {
      width: 25px;
      vertical-align: middle;
      border-radius: 50%;
      padding: 0 5px;
    }
  }
  .el-avatar--large {
    width: 26px !important;
    height: 26px !important;
    vertical-align: middle;
    margin-right: 5px;
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

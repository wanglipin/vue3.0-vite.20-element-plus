<template>
  <el-header class="common-header">
    <el-col class="menu-open-icon">
      <i class="el-icon-s-fold" @click.native="toggleSideBar"></i>
    </el-col>
    <el-col class="header-item">
      <el-dropdown class="el-dropdown-link header-item">
        <div class="header-username">
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
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
  emits: ['toggleSideBar'],
  setup(props, { attrs, emit, slots}) {
    const errorHandler = () => {
      return false;
    };
    const toggleSideBar = () => {
      emit('toggleSideBar')
    }
    return {
      errorHandler,
      toggleSideBar
    };
  },
});
</script>

<style lang="scss">
.common-header {
  background: #fff;
  // overflow: hidden;
  flex-flow: column;
  flex-wrap: wrap;
  .menu-open-icon {
    height: 100%;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
  }
  .header-item {
    float: right;
    .header-username {
      line-height: 60px;
      span {
        vertical-align: middle;
        margin-right: 10px;
        cursor: pointer;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>

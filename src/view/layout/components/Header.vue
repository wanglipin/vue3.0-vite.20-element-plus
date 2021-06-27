<template>
  <el-header class="common-header">
    <div class="menu-open-icon">
      <i class="el-icon-s-fold" :class="haderToggleSideBar" style="padding:0 10px;" @click="toggleSideBar"></i>
    </div>
    <div class="header-item">
      <div class="header-item-icon">
        <el-dropdown class="demonstration" @command="handleCommand">
          <span class="el-dropdown-link cursor-pointer">
            <svg-icon
              name="zhongwenqiehuan-bai"
              size="16"
            />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh">简体中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="header-item-icon">
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
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
  emits: ['toggleSideBar'],
  setup(props, { attrs, emit, slots}) {
    const data = reactive({
      haderToggleSideBar: {
        iconeLeft: true 
      }
    })
    const errorHandler = () => {
      return false;
    };
    const toggleSideBar = () => {
      data.haderToggleSideBar.iconeLeft = !data.haderToggleSideBar.iconeLeft
      emit('toggleSideBar')
    }
    const handleCommand = (language: string) => {
      console.log(language, '111111111')
    }
    return {
      ...toRefs(data),
      errorHandler,
      toggleSideBar,
      handleCommand
    };
  },
});
</script>

<style lang="scss">
.common-header {
  display: flex;
  background: #fff;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  line-height: 60px;
  .menu-open-icon {
    height: 100%;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
    .iconeLeft {
      transform: rotate(180deg);
    }
  }
  .header-item {
    // line-height: 60px;
    display: flex;
    min-width: 180px;
    align-items: center;
    .header-item-icon {
      padding: 0 10px;
    }
    .header-username {
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

<template>
  <div class="layout-wrapper">
    <el-radio-group
      v-model="isCollapse"
      @change="handleManucLosed"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-container class="sider-container">
      <LayoutAside :isCollapse="isCollapse"></LayoutAside>
      <el-container>
          <LatoutHeader class="common-header">
            <el-col class="menu-open-icon">
              <i class="el-icon-s-fold"></i>
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
          </LatoutHeader>
          <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import LayoutAside from "./components/aside/Index.vue";
import LatoutHeader from "./components/Header.vue";
import LatoutMain from "./components/Main.vue";
import { getCurrentInstance } from "vue";

export default defineComponent({
  name: "Layout",
  components: { LatoutHeader, LayoutAside, LatoutMain },
  setup(props) {
    const data = reactive({
      isCollapse: true,
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
@import '../../styles/layout.scss';
  .common-header {
    background-color: red;
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
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }   
</style>

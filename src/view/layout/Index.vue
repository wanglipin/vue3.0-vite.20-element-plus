<template>
	<div class="layout-wrapper">
		<el-container class="sider-container">
			<LayoutAside :isCollapse="isCollapse" />
      <Drawer v-model:drawer="drawer" :before-close="handleClose">
        <el-scrollbar style="height: 100%" class="side-setting">
          <div class="setting-item">
            <h3 class="title">整体风格设置</h3>
            <div class="setting-item-body">
              <div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </div>
              <div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="">
              </div>
              <div>
                <img src="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg" alt="">
              </div>
            </div>
          </div>
          <div class="setting-item">
            <h3 class="title">主题色</h3>
            <div class="setting-item-body clearfix">
              <div class="theme-color" v-for="item in themeData" :key="item.bgc" :style="item.bgc"></div>
            </div>
          </div>
        </el-scrollbar>
      </Drawer>
			<el-container class="main-container">
				<Header :isCollapse="isCollapse" @toggleSideBar="toggleSideBar"></Header>
				<el-main style="padding: 0px 10px 10px 10px">
          <breadCrumbs></breadCrumbs>
					<el-scrollbar
						class="custom-scrollbar"
						style="height: calc(100% - 34px)"
					>
            <router-view v-slot="{ Component, route }">
              <transition name="fade-transform" mode="out-in">
                <component :is="Component" :key="route.fullPath"/>
              </transition>
            </router-view>
					</el-scrollbar>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import LayoutAside from './components/aside/Index.vue';
import Header from './components/Header.vue';
import LatoutMain from './components/Main.vue';
import breadCrumbs from './components/breadCrumbs/index.vue'
import Drawer from '@/components/Drawer.vue'
import { ElMessageBox } from 'element-plus';

export default defineComponent({
	name: 'Layout',
	components: { Header, LayoutAside, LatoutMain, Drawer, breadCrumbs },
	setup() {
		const data = reactive({
			isCollapse: false,
      drawer: false,
      themeData: [
        {
          bgc: 'background-color: rgb(245, 34, 45);',
        },
        {
          bgc: 'background-color: rgb(245, 34, 45);',
        },
        {
          bgc: 'background-color: rgb(250, 219, 20)',
        },
        {
          bgc: 'background-color: rgb(62, 175, 124);',
        },
        {
          bgc: 'background-color: rgb(19, 194, 194);',
        },
        {
          bgc: 'background-color: rgb(24, 144, 255)',
        },
        {
          bgc: 'background-color: rgb(114, 46, 209);',
        },
        {
          bgc: 'background-color: rgb(235, 47, 150);',
        }
      ]
		});
    let toggleSideBar = () => {
      data.isCollapse = !data.isCollapse
    }
		const settingHandle = () => {
      data.drawer = !data.drawer
    };
    const handleClose = <T>() => {
      ElMessageBox.confirm('是否要关闭?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          settingHandle()
        }).catch(() => {
          console.log('关闭')
        });
    }
		return {
      handleClose,
      settingHandle,
      toggleSideBar,
			...toRefs(data)
		};
	}
});
</script>

<style lang="scss">
.setting-item {
  margin-bottom: 24px;
  .title {
    font-size: 14px;
    color: rgba(0,0,0,.85);
  }
  .setting-item-body {
    display: flex;
    justify-content: space-around;
  }
  .theme-color {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    cursor: pointer;
    margin-right: 8px;
    text-align: center;
    color: #fff;
    font-weight: 700;
  }
}
</style>

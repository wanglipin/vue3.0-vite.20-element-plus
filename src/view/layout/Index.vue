<template>
	<div class="layout-wrapper">
		<el-container class="sider-container">
			<LayoutAside :isCollapse="isCollapse">
      </LayoutAside>
      <Drawer v-model:drawer="drawer" :before-close="handleClose" title="我是title">
        <div>我是内容</div>
      </Drawer>
			<el-container class="main-container">
				<Header :isCollapse="isCollapse" @toggleSideBar="toggleSideBar"></Header>
				<el-main style="padding: 0px 10px 10px 10px">
          <el-breadcrumb separator="/" style="padding: 10px 0;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
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
import { defineComponent, reactive, toRefs } from 'vue';
import LayoutAside from './components/aside/Index.vue';
import Header from './components/Header.vue';
import LatoutMain from './components/Main.vue';
import Drawer from '@/components/Drawer.vue'
import { getCurrentInstance } from 'vue';
import { ElMessageBox } from 'element-plus';

export default defineComponent({
	name: 'Layout',
	components: { Header, LayoutAside, LatoutMain, Drawer },
	setup() {
		const data = reactive({
			isCollapse: false,
      drawer: false
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
          console.log('22222')
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
// @import '../../styles/layout.scss';
</style>

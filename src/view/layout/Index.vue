<template>
	<div class="layout-wrapper">
		<!-- <el-radio-group
      v-model="isCollapse"
      @change="handleManucLosed"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
		<el-container class="sider-container">
			<LayoutAside :isCollapse="isCollapse"></LayoutAside>
			<el-container class="main-container">
				<Header></Header>
				<el-main style="padding: 0px 10px 10px 10px">
          <el-breadcrumb separator="/" style="padding: 10px 0;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
					<!-- <level-bar></level-bar> -->
          <!-- style="height: calc(100% - 60px)" -->
					<el-scrollbar
						class="custom-scrollbar"
						style="height: calc(100% - 34px)"
					>
						<transition enter-active-class="fadeInUp" mode="out-in">
							<router-view></router-view>
						</transition>
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
import { getCurrentInstance } from 'vue';

export default defineComponent({
	name: 'Layout',
	components: { Header, LayoutAside, LatoutMain },
	setup(props) {
		const data = reactive({
			isCollapse: false
		});
		const handleManucLosed = () => {};
		return {
			handleManucLosed,
			...toRefs(data)
		};
	}
});
</script>

<style lang="scss">
@import '../../styles/layout.scss';
</style>

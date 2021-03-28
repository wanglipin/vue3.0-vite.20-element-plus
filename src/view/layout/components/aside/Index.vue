<template>
	<el-aside
		:class="['layout-asido', isCollapse ? 'layout-asids' : 'layout-asid']"
	>
		<el-menu
			background-color="#032121"
			class="el-menu-vertical-demo p-menu-drk"
			text-color="rgba(254,254,254,.65)"
			active-text-color="#fefefe"
			@open="handleOpen"
			@close="handleClose"
			:router="true"
			:collapse="isCollapse"
		>
			<div class="logo">
				<img srcset="../../../../static/img/logo.9652507e.png" />
				<h1 class="name" v-if="!isCollapse">Vue3.0</h1>
			</div>
			<template v-for="item in routers" :key="item.path">
				<template v-if="!item.hidden">
					<!-- 一级菜单 -->
					<!-- <router-link :to="item.path" v-if="!item.children">
            <el-menu-item :index="item.path">
              <i class="el-icon-menu"></i>
              <template #title>
                <span>
                  {{ item.meta && item.meta.title }}
                </span>
              </template>
            </el-menu-item>
          </router-link> -->
					<el-menu-item
						:index="singleChild.path"
						:route="singleChild.path"
						v-if="hasOneChild(item.children, item)"
					>
						<i class="el-icon-menu"></i>
						<template #title>
							<span>
								{{ singleChild.meta && singleChild.meta.title }}
							</span>
						</template>
					</el-menu-item>
					<!-- 二级菜单 支持递归无限级层级-->
					<Main v-else :menu="item" :key="item.path"></Main>
				</template>
			</template>
		</el-menu>
	</el-aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Main from './Menu.vue';

export default defineComponent({
	name: 'Aside',
	props: ['isCollapse'],
	components: { Main },
	setup() {
		const { options } = useRouter();
		const routers = options.routes;
		console.log(routers, '??????????');
		const data = reactive({
			singleChild: {}
		});
		const handleOpen = () => {
			console.log('222');
		};
		const handleClose = () => {
			console.log('3333');
		};
		// 如果菜单栏只有一项则处理
		const hasOneChild = (children, item) => {
			if (children.length === 1) {
				data.singleChild = children[0];
				return true;
			} else {
				return false;
			}
		};
		return {
			routers,
			handleOpen,
			handleClose,
			...toRefs(data),
			hasOneChild
		};
	}
});
</script>

<style lang="scss" scoped>
.logo {
	height: 56px;
	padding: 0 16px;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	line-height: 56px;
  cursor: pointer;
	img {
		width: 32px;
		vertical-align: middle;
	}
	.name {
		color: #fefefe;
		font-size: 20px;
		margin: 0 0 0 12px;
		display: inline-block;
		vertical-align: middle;
	}
}
</style>

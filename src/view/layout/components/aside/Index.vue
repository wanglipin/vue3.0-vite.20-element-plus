<template>
	<el-aside :class="['aside-container']" :width="isCollapse ? '65px' : '260px'">
		<el-menu
			background-color="#032121"
			class="el-menu-vertical-demo p-menu-drk"
			text-color="rgba(254,254,254,.65)"
			active-text-color="#fefefe"
			@open="handleOpen"
			@close="handleClose"
			:router="true"
			:collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="true"
      :default-active="activeData"
		>
			<div class="logo">
				<img srcset="../../../../static/img/logo.9652507e.png" />
				<h1 class="name" v-if="!isCollapse">Vue3.0(TS)V1</h1>
			</div>
			<template v-for="item in routers" :key="item.path">
				<template v-if="!item.hidden">
					<!-- 一级菜单 -->
					<el-menu-item
						:index="singleChild.path"
						:route="{path: singleChild.path}"
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
    <slot></slot>
	</el-aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Main from './Menu.vue';

export default defineComponent({
	name: 'Aside',
  props: {
    isCollapse: {
      type: Boolean,
    }
  },
	components: { Main },
	setup() {
		const { options } = useRouter();
    const router = useRoute()
		const routers = options.routes;
		const data = reactive({
			singleChild: {
        meta: {
          title: ''
        },
        path: ''
      },
      activeData: ''
		});
		const handleOpen = () => {
			console.log('222');
		};
		const handleClose = () => {
			console.log('3333');
		};
		// 如果菜单栏只有一项则处理
		const hasOneChild = (children:any, item:any) => {
			if (children.length == 1 && !item.meta.alwaysShow) {
				data.singleChild = children[0];
				return true;
			}
      return false
		};
    // !用watch监听路由的办法
    watch(() => router, () => {
      // 确保刷新页面或者第一次登录页面让菜单栏高亮与路由对应
      data.activeData = router.path
    }, { 
      deep:true,
      immediate: true
    })
    /* 监听路由变化
    onBeforeRouteUpdate(to => {
      console.log(to, '!!!!!!!!!!')
    })  */
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

</style>

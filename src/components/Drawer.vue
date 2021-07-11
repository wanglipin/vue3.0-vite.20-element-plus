<template>
	<div>
		<div class="mask" v-if="drawer && modal" @click="maskClose"></div>
		<div :class="['setting-container', drawer ? 'open' : 'close']">
			<el-scrollbar class="setting-scrollbar">
				<div class="drawer-container">
					<header class="drawer-title" v-if="withHeader && title">
						<span v-if="title" role="heading" :title="title">{{ title }}</span>
						<slot name="title"></slot>
						<div class="drawer__close-btn_default">
							<button
								class="drawer__close-btn"
								v-if="showClose"
								@click="handleClose"
							>
								<i class="el-icon-close"></i>
							</button>
						</div>
					</header>
					<div class="drawer-body">
						<slot></slot>
					</div>
				</div>
			</el-scrollbar>
			<div class="setting" @click="settingHandle">
				<i class="el-icon-s-tools"></i>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Drawer',
	props: {
		title: {
			// 标题
			type: String,
		},
		drawer: {
			// 必填 显示Drawer
			type: Boolean,
			required: true,
		},
		showClose: {
			// 是否展示关闭按钮
			type: Boolean,
			default: () => {
				return true;
			},
		},
		withHeader: {
			// 设置此项为false 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效
			type: Boolean,
			default: () => {
				return true;
			},
		},
		modal: {
			// 是否展示遮罩层
			type: Boolean,
			default: () => {
				return true;
			},
		},
		beforeClose: {
			//关闭回调函数
			type: Function,
			default: function () {
				return 'Default function';
			},
		},
	},
	emits: ['update:drawer'], //当在 emits 选项中定义了原生事件 (如 click) 时，将使用组件中的事件替代原生事件侦听器。不设置则警告
	setup(props: any, { attrs, emit, slots }) {
		const settingHandle = () => {
			emit('update:drawer', !props.drawer);
		};
		const handleClose = () => {
			props.beforeClose();
		};
		const maskClose = () => {
			settingHandle();
		};
		return {
			settingHandle,
			handleClose,
			maskClose,
		};
	},
});
</script>

<style></style>

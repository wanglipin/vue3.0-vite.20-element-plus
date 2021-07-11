<template>
	<div class="logo">
		<img srcset="../../../../static/img/logo.9652507e.png" />
		<h1 class="name" v-if="!isCollapse">Vue3.0(TS)V1</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SidebarHeader',
	props: {
		isCollapse: {
			type: Boolean,
			require: true,
		},
	},
	setup() {},
});
</script>

<style lang="sass" scoped></style>

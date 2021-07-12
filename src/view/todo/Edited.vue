<!--
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 10:36:14
 * @FilePath: \vue3.0-vite.20-element-plus\src\view\todo\Edited.vue
-->
<template>
	<el-input :value="todoTitle" v-bind="$attrs" @input="onIput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Edited',
	props: {
		todoTitle: {
			type: String,
			defalut: ''
		}
	},
	emits: ['update: todoTitle'],
	setup(props, { emit }) {
		// const { ctx: _this }: any = getCurrentInstance()
		const onIput = (val: string): void => {
			emit('update: todoTitle', val)
			// _this.$forceUpdate()
		}

		return {
			onIput
		}
	}
})
</script>
<style scoped lang="scss"></style>

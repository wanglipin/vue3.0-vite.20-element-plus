/*
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-18 23:09:56
 * @FilePath: \vue3.0-vite.20-element-plus\src\shims-vue.d.ts
 */
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}
// 拓展ts 识别.vue文件

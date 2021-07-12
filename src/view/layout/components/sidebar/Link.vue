<!--
 * @Author: 王立品
 * @Date: 2021-07-15 00:25:47
 * @LastEditTime: 2021-09-05 23:48:52
 * @FilePath: \filee:\learning\vue3.0-vite.20-element-plus\src\view\layout\components\sidebar\Link.vue
-->
<template>
	<component :is="type" v-bind="linkProps(to)">
		<slot />
	</component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isExternalLink } from '@/utils/resolvePath'

export default defineComponent({
	name: 'Menu',
	props: {
		to: {
			type: String,
			required: true
		}
	},
	setup(props) {
		const linkProps = (url: string) => {
			if (isExternalLink(url)) {
				return {
					is: 'a',
					href: url,
					target: '_blank',
					rel: 'noopener'
				}
			}
			return {
				is: 'router-link',
				to: url
			}
		}
		const isExternal = computed(() => isExternalLink(props.to))
		const type = computed(() => {
			if (isExternal.value) {
				return 'a'
			}
			return 'router-link'
		})
		return {
			linkProps,
			type
		}
	}
})
</script>

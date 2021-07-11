<template>
	<svg class="svg-icon" :style="getStyle" aria-hidden="true">
		<use :xlink:href="symbolId"></use>
	</svg>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';
import type { CSSProperties } from 'vue';
export default defineComponent({
	name: 'SvgIcon',
	props: {
		prefix: {
			type: String,
			default: 'icon',
		},
		name: {
			type: String,
			requirde: true,
		},
		size: {
			type: [Number, String],
			default: 16,
		},
	},
	setup(props) {
		const data = reactive({});
		const symbolId = computed(() => `#${props.prefix}-${props.name}`);
		const getStyle = computed((): CSSProperties => {
			const { size } = props;
			let s = `${size}`;
			s = `${s.replace('px', '')}px`;
			return {
				width: s,
				height: s,
			};
		});
		return {
			symbolId,
			getStyle,
			...toRefs(data),
		};
	},
});
</script>
<style scoped lang="scss">
.svg-icon {
	// width: 1em;
	// height: 1em;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>

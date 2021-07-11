<template>
	<img alt="Vue logo" src="./static/logo.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
	<select
		v-model="language"
		@change="handleSelect"
		style="width: 200px; height: 40px"
	>
		<option value="ch">{{ $t('sessage.ch') }}</option>
		<option value="en">{{ $t('sessage.en') }}</option>
	</select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'App',
	components: {
		HelloWorld,
	},
	setup() {
		const { locale } = useI18n();
		const language = ref<string>('ch');
		const handleSelect = () => {
			localStorage.setItem('lang', language.value);
			locale.value = language.value;
		};
		return {
			handleSelect,
			language,
		};
	},
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

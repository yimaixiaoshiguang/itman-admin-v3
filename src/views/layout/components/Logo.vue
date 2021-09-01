<template>
	<div class="mvk-sider-logo-container" :class="{ collapse: collapse }">
		<transition name="siderLogoFade">
			<div v-if="collapse" key="collapse" class="sider-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sider-logo" />
				<h1 v-else class="sider-title">{{ title }}</h1>
			</div>
			<div v-else key="expand" class="sider-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sider-logo" />
				<h1 class="sider-title">{{ title }}</h1>
			</div>
		</transition>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex';
	import { computed } from 'vue'

	const store = useStore()
	const collapse = computed(() => !store.state.app.sidebar.opened)
	const title = computed(() => store.state.settings.title)
	const logo = computed(() => store.state.settings.logo)

</script>
<script>
	export default {
		name: 'SiderLogo',
		// data() {
		// 	return {
		// 	};
		// },
		// computed: {
		// 	collapse() {
		// 		return !this.$store.state.app.sidebar.opened;
		// 	},

		// 	title() {
		// 		return this.$store.state.settings.title
		// 	},
		// 	logo() {
		// 		return this.$store.state.settings.logo
		// 	}
		// },
	};
</script>

<style lang="scss" scoped>


	// /deep/ .router-link-active {
	//     background-color: transparent;
	// }
</style>

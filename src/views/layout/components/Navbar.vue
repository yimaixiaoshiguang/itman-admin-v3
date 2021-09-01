<template>
	<div class="navbar">
		<hamburger v-if="hamburgerPosition == 'navbar'"/>
		<breadcrumb class="breadcrumb-container" />
		<div>
			<logout />
			<icon-svg icon="more"></icon-svg>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex';
	import { computed }  from 'vue'
	import Breadcrumb from './Breadcrumb.vue';
	import Hamburger from './Hamburger.vue';
	import logout from '../business/Logout.vue';

	const store = useStore()
	const sidebar = computed(() => store.state.app.sidebar)

	const hamburgerPosition = computed(() => store.state.settings.hamburgerPosition)
</script>
<script>


// export default {
// 	components: {
// 		Hamburger,
// 		Breadcrumb,
// 		logout
// 	},
// 	computed: {
// 		...mapGetters(['sidebar']),

// 		hamburgerPosition() {
// 			return this.$store.state.settings.hamburgerPosition;
// 		}
// 	},
// 	methods: {
// 	}
// };
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	flex: 1;

	.breadcrumb-container {
		flex: 1;
		display: flex;
		align-items: center;
	}


	&.navbar-imgbg {
		background: #000;

		// /deep/ .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
		// 	color: #c8c8c8;
		// }

		.hamburger-container {
			color: #000;
		}
	}
}
</style>

<template>
	<div class="navbar">
		<div class="left">
			<hamburger v-if="hamburgerPosition == 'navbar'" />
			<breadcrumb class="breadcrumb-container" />
		</div>
		<div class="center"></div>
		<div class="right">
			<div>
				<logout />
				<icon-svg icon="more"></icon-svg>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"
import Breadcrumb from "./Breadcrumb.vue"
import Hamburger from "./Hamburger.vue"
import logout from "../business/Logout.vue"

const store = useStore()
const sidebar = computed(() => store.state.app.sidebar)

const hamburgerPosition = computed(() => store.state.settings.hamburgerPosition)
const itmanLayout = computed(() => store.state.settings.layout)
</script>
<script>
export default defineComponent({
	name: "Navbar"
})

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
	justify-content: space-between;

	.left,
	.center,
	.right {
		display: flex;
		align-items: center;
	}

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

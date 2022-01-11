<template>
	<el-container class="itman-layout-inside" :class="insideClass" direction="vertical">
		<slot />
	</el-container>
</template>

<script>
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"

export default defineComponent({
	name: "AppInside",
	setup(props) {
		const store = useStore()

		const siderFixed = computed(() => store.state.settings.siderFixed)

		const siderCollapse = computed(() => !store.state.app.sidebar.opened)

		const insideClass = computed(() => {
			return {
				"itman-layout-inside-sider-fixed": siderFixed.value,
				"itman-layout-inside-sider-fixed-collapse": siderFixed.value && siderCollapse.value
			}
		})

		return {
			insideClass
		}
	}
})
</script>

<style lang="scss" scoped></style>

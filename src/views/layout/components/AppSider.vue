<template>
	<div class="itman-layout-sider" :class="siderClass">
		<slot></slot>
	</div>
</template>
<script>
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"
export default defineComponent({
	name: "AppSider",
	setup(props) {
		const store = useStore()

		const siderFixed = computed(() => store.state.settings.siderFixed)
		const siderTheme = computed(() => store.state.settings.siderTheme)
		const siderCollapse = computed(() => !store.state.app.sidebar.opened)

		const siderClass = computed(() => {
			return {
				"itman-layout-sider-collapse": siderCollapse.value,
				"itman-layout-sider-dark": siderTheme.value == "dark",
				"itman-layout-sider-fixed": siderFixed.value
			}
		})

		return {
			siderClass
		}
	}
})
</script>

<style lang="scss"></style>

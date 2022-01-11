<template>
	<div class="itman-layout-header" :class="headerClass">
		<slot name="left"></slot>
		<slot name="right" class="layout-header-right"></slot>
		<slot></slot>
	</div>
</template>
<script>
import { useStore } from "vuex"
import { computed, defineComponent } from "vue"

export default defineComponent({
	name: "AppHeader",
	setup(props) {
		const store = useStore()

		const headerTheme = computed(() => store.state.settings.headerTheme)
		const headerStick = computed(() => store.state.settings.headerStick)

		const headerClass = computed(() => {
			return {
				"itman-layout-header-dark": headerTheme.value == "dark",
				"itman-layout-header-primary": headerTheme.value == "primary",
				"itman-layout-header-stick": headerStick.value
			}
		})

		return {
			headerClass
		}
	}
})
</script>

<style lang="scss">
.itman-layout-header {
	display: flex;
	justify-content: space-between;
	.layout-header-left,
	.layout-header-right {
		display: flex;
		align-items: center;
	}
}
</style>

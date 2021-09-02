<template>
    <div class="mvk-layout-header" :class="headerClass">
        <slot></slot>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, defineComponent }  from 'vue'

export default defineComponent({
    name: 'AppHeader',
	setup(props){
		const store = useStore()

		const headerTheme = computed(() => store.state.settings.headerTheme)
		const headerFixed = computed(() => store.state.settings.headerFixed)
		const headerStick = computed(() => store.state.settings.headerStick)
		const siderCollapse = computed(() => !store.state.app.sidebar.opened)

		const headerClass = computed(() => {
			return {
				'mvk-layout-header-dark':headerTheme.value == 'dark',
				'mvk-layout-header-primary':headerTheme.value == 'primary',
				'mvk-layout-header-fixed':headerFixed.value,
				'mvk-layout-header-sider-collapse':siderCollapse.value,
				'mvk-layout-header-stick':headerFixed.value && headerStick.value,
			}
		})

		return {
			headerClass
		}
	}
});
</script>

<style lang="scss" scoped>

</style>

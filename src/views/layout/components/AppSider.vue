<template>
    <div class="mvk-layout-sider" :class="siderClass">
        <slot></slot>
    </div>
</template>

<script setup>




	// console.log(store.state.app.sidebar.opened);
	// console.log(siderCollapse.value);

	// const siderClass = computed(() => {
	// 	return {
	// 		'mvk-layout-sider-collapse':siderCollapse,
	// 		'mvk-layout-sider-dark':siderTheme == 'dark',
	// 		'mvk-layout-sider-fixed':siderFixed
	// 	}
	// })

</script>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
export default {
    name: 'AppSider',
	setup(props){
		const store = useStore()

		const siderFixed = computed(() => store.state.settings.siderFixed)
		const siderTheme = computed(() => store.state.settings.siderTheme)
		const siderCollapse = computed(() => !store.state.app.sidebar.opened)

		console.log(siderCollapse.value);

		const siderClass = computed(() => {
			return {
				'mvk-layout-sider-collapse':siderCollapse.value,
				'mvk-layout-sider-dark':siderTheme.value == 'dark',
				'mvk-layout-sider-fixed':siderFixed.value
			}
		})

		return {
			siderClass
		}
	}
};
</script>

<style lang="scss">




</style>

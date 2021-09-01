<template>
    <el-container class="mvk-layout-inside" :class="insideClass">
        <slot/>
    </el-container>
</template>

<script setup>



</script>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'AppInside',
    setup(props){
		const store = useStore()

		const siderFixed = computed(() => store.state.settings.siderFixed)

		const siderCollapse = computed(() => !store.state.app.sidebar.opened)

		const insideClass = computed(()=>{
			return {
				'mvk-layout-inside-sider-fixed':siderFixed.value,
				'mvk-layout-inside-sider-fixed-collapse':siderFixed.value && siderCollapse.value
			}
		})

		return {
			insideClass
		}
	}
};
</script>

<style lang="scss" scoped>

</style>

<template>
	<div>
		<!-- <transition name="fade-transform" mode="out-in"> -->
		<!-- <router-view :key="key" /> -->
		<!-- </transition> -->
		<router-view v-slot="{ Component }" :key="key">
			<transition name="fade-transform" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed, defineComponent } from "vue"
const route = useRoute()
const key = computed(() => route.path)
</script>
<script>
export default defineComponent({
	name: "AppMain"
})
</script>

<style lang="scss" scope></style>

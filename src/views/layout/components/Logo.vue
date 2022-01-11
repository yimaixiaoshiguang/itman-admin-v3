<template>
	<div class="mvk-sider-logo-container" :class="{ collapse: collapse }">
		<transition name="siderLogoFade">
			<div v-if="collapse" key="collapse" class="sider-logo-link" to="/">
				<img v-if="logosrc" :src="logosrc" class="sider-logo" />
				<h1 v-else class="sider-title">{{ title }}</h1>
			</div>
			<div v-else key="expand" class="sider-logo-link" to="/">
				<img v-if="logosrc" :src="logosrc" class="sider-logo" />
				<h1 class="sider-title">{{ title }}</h1>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed, defineComponent, toRaw } from "vue"

const store = useStore()
const collapse = computed(() => !store.state.app.sidebar.opened)
const title = computed(() => store.state.settings.title)
// const logo = computed(() => store.state.settings.logo)
const logo = toRaw(store.state.settings.logo)
let logosrc = ""
for (var path in logo) {
	logosrc = logo[path].default
}
</script>
<script>
export default defineComponent({
	name: "SiderLogo"
})
</script>

<style lang="scss" scoped></style>

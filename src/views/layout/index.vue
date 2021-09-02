<template>
	<el-container class="mvk-layout">
		<app-sider>
			<logo />
			<Menu style="flex:1"/>
			<div>
				<hamburger v-if="hamburgerPosition == 'sidebar'"/>
			</div>
		</app-sider>

		<app-inside>
			<app-header>
				<logo v-if="headerStick"/>
				<navbar />
			</app-header>
			<div class="mvk-layout-content">
				<tag-view v-if="tagsView"></tag-view>
				<div class="mvk-layout-content-main">
					<app-main />
				</div>
			</div>
			<el-footer height="" class="mvk-footer">
				Copyright © 2021 广东美物纪数字技术有限公司
			</el-footer>
		</app-inside>
	</el-container>

</template>
<script setup>
	import {AppHeader, AppSider, AppInside, Logo, AppMain, Navbar, Hamburger, AppTags } from './components';
	import {Menu, TagView} from './business'
	import { computed, defineComponent } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()
	const headerStick = computed(() => store.state.settings.headerStick)
	const tagsView = computed(() => store.state.settings.tagsView)
	const hamburgerPosition = computed(() => store.state.settings.hamburgerPosition)

</script>
<script>
	export default defineComponent({
		name: 'Layout',
	})
</script>

<style lang="scss" scoped>
</style>

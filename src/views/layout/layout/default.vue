<template>
	<!--默认布局（左侧菜单）-->
	<div class="itman">
		<div class="itman-wrapper">
			<app-sider>
				<logo />
				<Menu style="flex: 1" />
				<div>
					<hamburger v-if="hamburgerPosition == 'sidebar'" />
				</div>
			</app-sider>

			<div class="itman-body">
				<app-header>
					<logo v-if="headerStick" />
					<navbar />
				</app-header>
				<div class="itman-layout-content">
					<tag-view v-if="tagsView"></tag-view>
					<div class="itman-layout-content-main">
						<app-main />
					</div>
				</div>
				<el-footer height="" class="itman-footer"> Copyright © 2021 xxx数字技术有限公司 </el-footer>
			</div>
		</div>
	</div>
</template>
<script setup>
import { AppHeader, AppSider, AppInside, Logo, AppMain, Navbar, Hamburger } from "../components"
import { Menu, TagView } from "../business"
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

const store = useStore()
const headerStick = computed(() => store.state.settings.headerStick)
const tagsView = computed(() => store.state.settings.tagsView)
const hamburgerPosition = computed(() => store.state.settings.hamburgerPosition)
</script>
<script>
export default defineComponent({
	name: "DefaultLayout"
})
</script>

<style lang="scss" scoped></style>

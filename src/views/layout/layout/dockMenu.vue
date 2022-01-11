<template>
	<div class="itman">
		<app-header>
			<div slot="left" class="layout-header-left">
				<logo />
			</div>
			<div slot="right" class="layout-header-right">
				<Menu mode="horizontal" />
				<div>
					<logout />
					<icon-svg icon="more"></icon-svg>
				</div>
			</div>
		</app-header>
		<div class="itman-wrapper">
			<el-container class="itman-body">
				<tag-view v-if="tagsView"></tag-view>
				<breadcrumb class="breadcrumb-container" />
				<div class="itman-layout-content">
					<div class="itman-layout-content-main">
						<app-main />
					</div>
				</div>
				<el-footer height="" class="itman-footer"> Copyright © 2021 xxx数字技术有限公司 </el-footer>
			</el-container>
		</div>
	</div>
</template>
<script setup>
import { AppHeader, Logo, AppMain } from "../components"
import { Menu, TagView, Logout } from "../business"
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

const store = useStore()
const tagsView = computed(() => store.state.settings.tagsView)
</script>
<script>
export default defineComponent({
	name: "DockMenuLayout"
})
</script>

<style lang="scss" scoped></style>

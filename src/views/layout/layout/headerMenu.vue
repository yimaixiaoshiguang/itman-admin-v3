<template>
	<!--头部菜单-->
	<div class="itman">
		<app-header>
			<div slot="left" class="layout-header-left">
				<logo />
				<ul class="header-menu">
					<li
						v-for="item in menuRoutes"
						:key="item"
						:class="activeMenu == item.path ? 'active' : ''"
						@click="showMenu(item)"
					>
						<icon-svg
							:icon="item.meta.icon"
							size="24"
							style="vertical-align: middle"
							v-if="item.meta && item.meta.icon"
						/>
						<p>{{ item.meta.title }}</p>
					</li>
				</ul>
			</div>
			<div slot="right" class="layout-header-right">
				<logout />
				<icon-svg icon="more"></icon-svg>
			</div>
		</app-header>
		<div class="itman-wrapper">
			<app-sider v-if="secondMenu.length > 1">
				<div class="second-menu-side-top" v-show="!isCollapse">
					<p class="title">{{ currentMenu.meta.title }}</p>
				</div>
				<el-scrollbar style="flex: 1">
					<el-menu :default-active="route.path" :collapse="isCollapse" router class="mvk-menu">
						<menu-item :navMenus="secondMenu"></menu-item>
					</el-menu>
				</el-scrollbar>
				<hamburger />
			</app-sider>
			<el-container class="itman-body">
				<breadcrumb class="breadcrumb-container" />
				<tag-view v-if="tagsView"></tag-view>

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
import { AppHeader, Logo, AppMain, Breadcrumb, AppSider, Hamburger } from "../components"
import { TagView, MenuItem } from "../business"
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"

import logout from "../business/Logout.vue"

const store = useStore()
const tagsView = computed(() => store.state.settings.tagsView)
const isCollapse = computed(() => !store.state.app.sidebar.opened)
const hamburgerPosition = computed(() => store.state.settings.hamburgerPosition)

//菜单数据
import { menu } from "../js/menu.js"
const { menuRoutes } = menu()

const route = useRoute()

//当前激活的一级菜单路径
const activeMenu = computed(() => {
	const { meta } = route
	if (meta.activeMenu) {
		return meta.activeMenu
	}
	return route.matched[0].path
})

const currentMenu = route.matched[0]

//当前激活的二级菜单数组
const secondMenu = computed(() => {
	return route.matched[0].children
})

const router = useRouter()
const showMenu = (item) => {
	router.push({ path: item.path })
}
</script>
<script>
export default defineComponent({
	name: "HeaderMenuLayout"
})
</script>

<style lang="scss" scoped></style>

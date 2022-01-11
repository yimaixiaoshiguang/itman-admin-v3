<template>
	<!--三栏布局-->
	<div class="itman">
		<div class="itman-three-layout">
			<div class="itman-main-menu-side">
				<div class="side-logo">
					<img :src="logosrc" />
				</div>
				<el-scrollbar>
					<ul>
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
				</el-scrollbar>
			</div>
			<app-sider v-if="secondMenu.length > 1">
				<div class="second-menu-side-top" v-show="!isCollapse">
					<p class="title">{{ currentMenu.meta.title }}</p>
				</div>
				<el-scrollbar style="flex: 1">
					<el-menu :default-active="route.path" :collapse="isCollapse" router>
						<menu-item :navMenus="secondMenu"></menu-item>
					</el-menu>
				</el-scrollbar>
				<hamburger v-if="hamburgerPosition == 'sidebar'" />
			</app-sider>
			<div class="itman-body">
				<app-header>
					<navbar />
				</app-header>
				<tag-view v-if="tagsView"></tag-view>
				<div class="itman-layout-content">
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
import { AppHeader, AppMain, Navbar, AppSider, Hamburger } from "../components"
import { TagView, MenuItem } from "../business"
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { logo } from "../js/logo"

const { logosrc } = logo()

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
	name: "ThreeColumnLayout"
})
</script>

<style lang="scss" scoped></style>

<template>
    <el-scrollbar>
        <el-menu
            class="mvk-menu"
            :default-active="activeMenu"
            :collapse="isCollapse"
            :unique-opened="true"
            :collapse-transition="false"
            :router="true"
            mode="vertical"
        >
            <menu-item v-for="route in menuRoutes" :key="route.path" :menu="route"></menu-item>
        </el-menu>
    </el-scrollbar>

</template>

<script setup>
	import MenuItem from './MenuItem.vue'
	import { useStore } from 'vuex'
	import { computed } from 'vue'
	import { useRoute } from 'vue-router';

	/**
	 * 菜单白名单
	 */
	const routerWhiteList = ['/','/personal']

	const store = useStore()
	const routes = computed(() => store.state.permission.routes)
	const isCollapse = computed(() => !store.state.app.sidebar.opened)
	const activeMenu = computed(() => {
		const route = useRoute();
		const { meta, path } = route;
		if (meta.activeMenu) {
			return meta.activeMenu;
		}
		return path;
	})

	const menuRoutes = computed(() => {
		//取可访问路由，若是从后台获取的路由，应该改成permission.routers
		// const sysRouters = this.$router.options.routes
		const sysRouters = routes.value

		//过滤白名单中的菜单
		return sysRouters.filter(item => {
			return routerWhiteList.indexOf(item.path) == -1 && !item.hidden
		})
	})

</script>
<script>
export default {
    name: 'Menu',
};
</script>

<style lang="scss" scoped>

</style>

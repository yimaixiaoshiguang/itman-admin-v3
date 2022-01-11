import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';

export function menu () {
	/**
	 * 菜单白名单
	 */
	const routerWhiteList = ['/', '/personal']
	const store = useStore()
	const routes = computed(() => store.state.permission.routes)

	const menuRoutes = computed(() => {
		//取可访问路由
		const sysRouters = routes.value

		//过滤白名单中的菜单
		return sysRouters.filter(item => {
			return routerWhiteList.indexOf(item.path) == -1 && !item.hidden
		})
	})


	return {
		menuRoutes,
	}
}

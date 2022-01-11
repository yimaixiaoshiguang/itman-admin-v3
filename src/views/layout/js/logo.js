import { useStore } from "vuex"
import { toRaw } from "vue"


export function logo () {
	const store = useStore()
	const logo = toRaw(store.state.settings.logo)
	let logosrc = ""
	for (var path in logo) {
		logosrc = logo[path].default
	}

	return {
		logosrc
	}
}

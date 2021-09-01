// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
// import getters from './getters'
// Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)
const modulesFiles = import.meta.globEager("./modules/*.js")

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
// 	// set './app.js' => 'app'
// 	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
// 	const value = modulesFiles(modulePath)
// 	modules[moduleName] = value.default
// 	return modules
// }, {})

let modules = {}
for (const path in modulesFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	modules[moduleName] = modulesFiles[path].default
}

// const store = new Vuex.Store({
// 	modules,
// 	getters
// })

export const store = createStore({
	modules,
	// getters
})

// console.log(store);

// export default store

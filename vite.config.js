import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'~': resolve('./'),
				'@': resolve('src'),
				'api': resolve('src/api'),
				'assets': resolve('src/assets'),
				'components': resolve('src/components'),
				'router': resolve('src/router'),
				'store': resolve('src/store'),
				'views': resolve('src/views')
			}

		}
	}

})

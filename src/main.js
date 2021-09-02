import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

import './permission'

import '@/assets/scss/index.scss' // global css

import '@/assets/iconfont/iconfont.js';
import IconSvg from 'components/Icon-svg/index.vue';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.component('icon-svg', IconSvg)
app.mount('#app')

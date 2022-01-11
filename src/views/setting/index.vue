<template>
	<div>
		<el-form ref="form" label-width="120px">
			<el-form-item label="框架布局">
				<el-select v-model="layout" placeholder="请选择" @change="themeChange('layout', layout)">
					<el-option label="默认" value="default"></el-option>
					<el-option label="通栏" value="header"></el-option>
					<el-option label="三栏" value="threeColumn"></el-option>
					<el-option label="功能坞" value="dock"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="导航栏置顶" v-if="layout == 'default'">
				<el-switch v-model="mheaderStick" @change="themeChange('headerStick', mheaderStick)"> </el-switch>
			</el-form-item>
			<el-form-item label="侧边栏主题">
				<el-radio-group v-model="msiderTheme" @change="themeChange('siderTheme', msiderTheme)">
					<el-radio label="dark">dark</el-radio>
					<el-radio label="light">light</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="顶部导航栏主题">
				<el-radio-group v-model="mheaderTheme" @change="themeChange('headerTheme', mheaderTheme)">
					<el-radio label="dark">dark</el-radio>
					<el-radio label="light">light</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="hamburger位置">
				<el-radio-group
					v-model="mhamburgerPosition"
					@change="themeChange('hamburgerPosition', mhamburgerPosition)"
				>
					<el-radio label="navbar">导航栏</el-radio>
					<el-radio label="sidebar">侧边栏</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="开启多页签">
				<el-switch v-model="mtagsView" @change="themeChange('tagsView', mtagsView)"> </el-switch>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup>
import { mapActions, useStore } from "vuex"
import { computed, reactive, ref, toRefs } from "vue"
const store = useStore()
const msiderFixed = computed(() => store.state.settings.msiderFixed)
const mheaderFixed = ref()
const mtagsFixed = computed(() => store.state.settings.mtagsFixed)

const state = reactive({
	layout: store.state.settings.layout,
	msiderTheme: store.state.settings.siderTheme,
	mheaderTheme: store.state.settings.headerTheme,
	mhamburgerPosition: store.state.settings.hamburgerPosition,
	mtagsView: store.state.settings.tagsView,
	mheaderStick: store.state.settings.headerStick
})

let { layout, msiderTheme, mheaderTheme, mhamburgerPosition, mtagsView, mheaderStick } = toRefs(state)

const themeChange = (type, val) => {
	console.log(layout.value)
	store.dispatch("settings/changeSetting", {
		key: type,
		value: val
	})
}
</script>

<style lang="scss" scoped></style>

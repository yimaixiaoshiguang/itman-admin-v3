<template>
	<!--默认布局（左侧垂直菜单）-->
	<default-layout v-if="itmanLayout == 'default'"></default-layout>

	<!--三栏布局（左侧一级，二级菜单并列）-->
	<three-column-layout v-else-if="itmanLayout == 'threeColumn'"></three-column-layout>

	<!--通栏布局(头部一级菜单，左侧二级菜单)-->
	<header-menu-layout v-else-if="itmanLayout == 'header'"> </header-menu-layout>

	<!--功能坞（头部水平菜单）-->
	<dock-menu-layout v-else></dock-menu-layout>
</template>
<script setup>
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"

import defaultLayout from "./layout/default.vue"
import threeColumnLayout from "./layout/threeColumn.vue"
import headerMenuLayout from "./layout/headerMenu.vue"
import dockMenuLayout from "./layout/dockMenu.vue"

const store = useStore()
const itmanLayout = computed(() => store.state.settings.layout)
</script>
<script>
export default defineComponent({
	name: "Layout"
})
</script>

<style lang="scss" scoped></style>

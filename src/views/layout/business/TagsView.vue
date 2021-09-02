<template>
	<app-tags>
		<el-tabs v-model="currentTag" type="card"  @tab-click="tagChange" @tab-remove="removeTab">
			<el-tab-pane
				v-for="item in visitedViews"
				:key="item.path"
				:label="item.title"
				:name="item.path"
				:closable = "item.path !='/dashboard/index'"
			>
			</el-tab-pane>
		</el-tabs>
		<div class="mvk-tags-view-close">
			<el-dropdown @command="tagClose" placement="bottom">
				<el-button type="primary" size="mini">
					<i class="el-icon-arrow-down el-icon--right"></i>
				</el-button>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="others">关闭其他</el-dropdown-item>
						<el-dropdown-item command="all">关闭所有</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</app-tags>

</template>

<script>
import { computed, onMounted, reactive, defineComponent, watch, toRefs, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { AppTags } from '../components';

export default defineComponent({
	name:'TagsView',
	components: {
		AppTags
	},
	setup() {
		const store = useStore()
		const router = useRouter()
		const route = useRoute()

		const state = reactive({
			affixTags: [],
			currentTag:route.path,
		})

		const visitedViews = computed(() => store.state.tagsView.visitedViews)
		const routes = computed(() => router.options.routes)

		onMounted(()=>{
			initTags()
			addTags()
		})

		watch(route,()=>{
			addTags()
			state.currentTag = route.path
		})

		const tagChange = (tab) => {
			router.push(tab.name)
		}

		//更多操作
		const tagClose = (type) => {
			const view = visitedViews.value.filter(item => item.path === state.currentTag)[0]
			if(type == 'others'){
				closeOthersTags(view)
			}else if(type == 'all'){
				closeAllTags(view)
			}
		}

		//删除当前tag
		const removeTab = (targetName) => {
			const view = visitedViews.value.filter(item => item.path === targetName)[0]
			closeSelectedTag(toRaw(view))
		}

		const filterAffixTags = (routes, basePath = '/') => {
			let tags = []
			routes.forEach(route => {
				if(route.meta && route.meta.affix) {
					// const tagPath = path.resolve(basePath, route.path)
					const tagPath = route.path
					tags.push({
						fullPath: tagPath,
						path: tagPath,
						name: route.name,
						meta: { ...route.meta
						}
					})
				}
				if(route.children) {
					const tempTags = filterAffixTags(route.children, route.path)
					if(tempTags.length >= 1) {
						tags = [...tags, ...tempTags]
					}
				}
			})
			return tags
		}

		const initTags = () => {
			const affixTags = state.affixTags = filterAffixTags(routes.value)
			for(const tag of affixTags) {
				// Must have tag name
				if(tag.name) {
					store.dispatch('tagsView/addVisitedView', tag)
				}
			}
		}

		const addTags = () => {
			const {
				name
			} = route
			if(name) {
				store.dispatch('tagsView/addView', route)
			}
			return false
		}

		const closeSelectedTag = (view) => {
			store.dispatch('tagsView/delView', view).then(({
				visitedViews
			}) => {
				if(state.currentTag == route.path) {
					toLastView(visitedViews, view)
				}
			})
		}

		const closeOthersTags = (view) => {
			store.dispatch('tagsView/delOthersViews', view)
		}

		const closeAllTags = (view) => {
			store.dispatch('tagsView/delAllViews').then(({
				visitedViews
			}) => {
				if(state.affixTags.some(tag => tag.path === view.path)) {
					return
				}
				toLastView(visitedViews)
			})
		}

		const toLastView = (visitedViews) => {
			const latestView = visitedViews.slice(-1)[0]
			if(latestView) {
				router.push(latestView)
			} else {
				router.push('/dashboard/index');//首页
			}
		}
		return {
			...toRefs(state),
			visitedViews,
			tagChange,
			tagClose,
			removeTab,
		};
	},
});
</script>




<style lang="scss">
	//修改element ui的样式
	.mvk-tags-view {
		&-main {
			.el-tabs {
				flex: 1;
			}

			.el-tabs--card>.el-tabs__header {
				border: none;
				margin: 0;
			}

			.el-tabs--card>.el-tabs__header .el-tabs__nav {
				border: none;
			}

			.el-tabs--card>.el-tabs__header .el-tabs__item {
				border: none;
			}

			.el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close {
				width: 14px;
			}

			.el-tabs__item {
				margin: 0 3px;
				padding: 0 15px;
				position: relative;
				height: 32px;
				line-height: 32px;
				color: #808695;
				background: #fff;
				border-radius: 3px;
			}

			.el-tabs__item:before {
				content: "";
				display: inline-block;
				width: 12px;
				height: 12px;
				margin-right: 10px;
				border-radius: 50%;
				background: #e8eaec;
			}

			.is-active:before {
				background: #409eff;
			}

			.el-button--mini, .el-button--mini.is-round {
				padding: 5px 7px;
			}

			.el-icon--right {
				margin-left:0px
			}
		}
	}
</style>

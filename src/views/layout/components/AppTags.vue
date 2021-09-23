<template>
	<div class="mvk-tags-view" :class="tagsClass" :style="styles">
		<div class="mvk-tags-view-main">
			<slot/>
		</div>
	</div>

</template>

<script setup>
	import { ref, computed } from 'vue'
	import { useStore } from 'vuex';
	let rectTop = ref(0)
	const styles = ref({})

	const store = useStore()
	const tagsFixed = computed(() => store.state.settings.tagsFixed)
	// const headerFixed = computed(() => store.state.settings.headerFixed)
	const affix = computed(() => !store.state.settings.headerFixed)
	const collapse = computed(() => !store.state.app.sidebar.opened)

	const tagsClass = computed(() => {
		return {
			'mvk-tags-view-fixed':tagsFixed.value,
			'mvk-tags-view-sider-collapse':tagsFixed.value && collapse.value
		}
	})

</script>

<script>
	import { getCurrentInstance, onMounted, onActivated, onUnmounted } from 'vue'

	function getScroll(target, top) {
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        const method = top ? 'scrollTop' : 'scrollLeft';
        let ret = target[prop];
        if (typeof ret !== 'number') {
            ret = window.document.documentElement[method];
        }
        return ret;
    }

	export default {
		name:'AppTags',
		setup(props) {
			const {ctx} = getCurrentInstance();

			onMounted(() => {
				rectTop = ctx.$el.getBoundingClientRect().top
				window.addEventListener('scroll', handleScroll())
			})

			onActivated(() => {
				handleScroll()
			})
			onUnmounted(() => {
				window.removeEventListener('scroll', handleScroll())
			})

			const handleScroll = () => {
				if(tagsFixed.value && affix.value){
					const scrollTop = getScroll(window, true);
					// Fixed Top
					if (scrollTop < ctx.rectTop) {
						styles.value = {
							top: (ctx.rectTop - scrollTop)+'px',
						};
					} else {
						styles.value = {
							top:0
						};
					}
				}
            }

			return {
				handleScroll
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>

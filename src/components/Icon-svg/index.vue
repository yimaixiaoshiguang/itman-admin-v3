<template>
	<el-tooltip effect="dark" :content="title" v-if="title">
		<svg class="svg-icon" aria-hidden="true" :style="styles">
			<use :xlink:href="iconName"></use>
		</svg>
	</el-tooltip>

	<svg class="svg-icon" aria-hidden="true" :style="styles" v-else>
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script setup>
	import { computed } from 'vue';
	const props = defineProps({
		icon: {
			type: String,
			required: true
		},
		size: [Number, String],
		color: {
			type: String
		},
		title: {
			type: String,
		}
	})

	const iconName = computed(() => `#icon-${props.icon}`)
	const styles = computed(() => {
		let style = {};

		if (props.size) {
			style['font-size'] = `${props.size}px`;
		}

		if(props.color){
			style['color'] = props.color
		}

		return style;
	})
</script>
<script>
	export default {
		name:'IconSvg'
	}
</script>
<style>
	.svg-icon {
		font-size: 16px;
		width: 1em;
	    height: 1em;
	    vertical-align: -0.15em;
	    fill: currentColor;
	    overflow: hidden;
	    cursor: pointer;
	    margin-right: 8px;
	}
</style>

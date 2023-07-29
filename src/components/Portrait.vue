<template>
	<a :href='`/catalog/${ portrait.id }`' class='portrait'>
		<img :src='portrait.image' class='portrait-image' :alt='portrait.name' />
	</a>
</template>

<script setup>
const props = defineProps({
	portrait: Object,
});
</script>

<style scoped lang='scss'>
	.portrait {
		border-radius: 8px;
		overflow: hidden;
		&-image {
			width: 100%;
			height: 100%;
		}
		&:hover {
			scale: 1.05;
		}
	}
</style>

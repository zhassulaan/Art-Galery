<template>
	<a :href='`/catalog/${ image.id }`' class='portrait'>
		<img :src='image.image' class='portrait-image' :alt='image.name' />
	</a>
</template>

<script setup>
const props = defineProps({
	image: Object,
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
	}
</style>

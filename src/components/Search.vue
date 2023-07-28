<template>
	<div class='search' :class="{ 'active': isActive }">
		<input
			type='text'
			placeholder='Поиск'
			id='search'
			class='search-input'
			v-model='searchInput'
			@focus='isActive = true'
			@blur='isActive = false'
		/>
		<IconSearch class='search-button' />
	</div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import IconSearch from './icons/Search.vue';

const isActive = ref(false);
const searchInput = '';

watch(searchInput, () => {
	getValue();
});
function getValue() {
	emit('input', searchInput);
}
</script>

<style scoped lang='scss'>
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 866px;
		background-color: var(--clr-white);
		border: 2px solid var(--clr-white);
		padding: 19px 32px 19px 37px;
		&-input {
			width: 100%;
			height: 28px;
			font-size: 24px;
			font-weight: 300;
			color: var(--clr-black);
			border: none;
			&::placeholder {
				color: #5B5B5B;
			}
			&:focus {
				outline: none;
			}
		}
		&-button {
			fill: var(--clr-black);
		}
		&.active {
			border: 2px solid var(--clr-blue);
		}
	}
</style>

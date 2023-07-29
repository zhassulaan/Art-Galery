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
			@input="handleInput"
		/>
		<IconSearch v-if="searchInput === ''" class='search-button open' />
		<span v-else class='search-button close' @click="searchInput = '', handleInput()"></span>
	</div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import IconSearch from './icons/Search.vue';

const emit = defineEmits(['input']);
const isActive = ref(false);
const searchInput = ref('');

function handleInput() {
  emit('input', searchInput.value);
}
</script>

<style scoped lang='scss'>
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 46.145833%;
		background-color: var(--clr-white);
		border: 2px solid var(--clr-white);
		padding: 19px 1.666667vw 19px 1.927083vw;
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
			&.open {
				fill: var(--clr-black);
			}
			&.close {
				position: relative;
				width: 22px;
				height: 22px;
				&::before,
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					width: 80%;
					height: 2px;
					background-color: var(--clr-black);
					transform: translate(-50%, -50%) rotate(45deg);
				}
				&::after {
					transform: translate(-50%, -50%) rotate(-45deg);
				}
			}
		}
		&.active {
			border: 2px solid var(--clr-blue);
		}
	}

	@media screen and (max-width: 768px) {
		.search {
			gap: 5px;
			width: 89.095745%;
			border: 1px solid var(--clr-white);
			padding: 19px 6.914894vw 21px 6.648936vw;
			&.active {
				border: 1px solid var(--clr-blue);
			}
		}
	}
</style>

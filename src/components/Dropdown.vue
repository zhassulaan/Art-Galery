<template>
	<div class='dropdown' :class="portraits.length === 0 ? 'null' : ((portraits.length === 2) ? 'double' : ((portraits.length === 1) ? 'single' : ''))">
		<router-link :to='`/catalog/${ portrait.id }`' class='dropdown-item' v-for='portrait in portraits' @click='close()'>
			<span class='dropdown-item__avatar'>
				<img :src='portrait.avatar' class='image' :alt='portrait.artist' />
			</span>
			<span class='dropdown-item__text'>
				<p>{{ portrait.artist }}</p>
			</span>
			<span class='dropdown-item__text'>
				<p>{{ portrait.name }}</p>
			</span>
			<span class='dropdown-item__portrait'>
				<img :src='portrait.image' class='image' :alt='portrait.name' />
			</span>
		</router-link>
	</div>
	<div class='dropdown-background' :class="portraits.length === 0 ? 'null' : ''" @click='close()'></div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	portraits: Array,
});
const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<style scoped lang='scss'>
	.null {
		display: none;
	}
	.dropdown {
		position: fixed;
		top: 81px;
		left: 50%;
		width: 77.1875%;
		height: 384px;
		background-color: var(--clr-grey-2);
		border-radius: 0 0 8px 8px;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, .25);
		transform: translateX(-50%);
		overflow: scroll;
		padding: 10px 2%;
		&.single {
			height: 128px;
		}
		&.double {
			height: 256px;
		}
		&-background {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: var(--clr-black);
			opacity: .5;
			z-index: -1;
		}
		&-item {
			position: relative;
			display: flex;
			align-items: center;
			gap: 1.7125vw;
			height: 112px;
			margin-bottom: 16px;
			padding-bottom: 16px;
			&:last-child {
				height: 96px;
				margin-bottom: 0;
				padding-bottom: 0;
				&::after {
					display: none;
				}
			}
			&::after {
				position: absolute;
				content: '';
				bottom: 0;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: var(--clr-black);
			}
			&__avatar,
			&__portrait {
				border-radius: 8px;
				overflow: hidden;
			}
			&__avatar {
				width: 55px;
				height: 55px;
			}
			&__text {
				width: 30%;
				color: var(--clr-black);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			&__portrait {
				width: 126px;
				height: 100%;
			}
		}
		.image {
			width: 100%;
			height: 100%;
		}
	}
</style>

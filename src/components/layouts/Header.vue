<template>
	<header class='header'>
		<icon-logo class='header-logo' @click='reloadPage()' />
		<div class='header-menu'>
			<span class='header-menu__item' v-if='!search' @click='search = true'>
				<icon-search class='header-menu__item-icon' />
				<p class='header-menu__item-text'>Поиск</p>
			</span>
			<search v-else />
			<a href='/favourites' class='header-menu__item'>
				<icon-heart class='header-menu__item-icon' />
				<p class='header-menu__item-text'>Избранное</p>
			</a>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import Search from '../Search.vue';
import IconLogo from '../icons/Logo.vue';
import IconSearch from '../icons/Search.vue';
import IconHeart from '../icons/Heart.vue';

const search = ref(false);

function reloadPage() {
  window.location.reload();
}
</script>

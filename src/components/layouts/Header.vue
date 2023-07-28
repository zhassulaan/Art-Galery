<template>
	<header class='header'>
		<icon-logo class='header-logo' />
		<ul class='header-menu'>
			<li class='header-menu__item'>
				<icon-search />
				<p>Поиск</p>
			</li>
			<li class='header-menu__item'>
				<icon-heart />
				<p>Избранное</p>
			</li>
		</ul>
	</header>
</template>

<script setup>
import IconLogo from '../icons/Logo.vue';
import IconSearch from '../icons/Search.vue';
import IconHeart from '../icons/Heart.vue';
</script>

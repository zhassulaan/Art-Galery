<template>
	<header class='header'>
		<router-link to='/'>
			<icon-logo class='header-logo btn' />
		</router-link>
		<div class='header-menu'>
			<span class='header-menu__item btn' v-if='!search' @click='search = true'>
				<icon-search class='header-menu__item-icon' />
				<p class='header-menu__item-text'>Поиск</p>
			</span>
			<search v-else @input='handleSearch' />
			<router-link to='/favourites' class='header-menu__item btn'>
				<icon-heart class='header-menu__item-icon' />
				<p class='header-menu__item-text'>Избранное</p>
			</router-link>
		</div>
		<Dropdown v-if='search' :portraits='filteredImages' @close='search = false' />
	</header>
</template>

<script setup>
import { ref, computed } from 'vue';
import Search from '../Search.vue';
import Dropdown from '../Dropdown.vue';
import IconLogo from '../icons/Logo.vue';
import IconSearch from '../icons/Search.vue';
import IconHeart from '../icons/Heart.vue';
import { portraits } from '../../data';

const search = ref(false);
const searchInput = ref('');
const filteredImages = computed(() => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    return [];
  }
  return portraits.filter(
    (item) => 
      item.name.toLowerCase().includes(query) ||
      item.name_en.toLowerCase().includes(query) ||
      item.artist.toLowerCase().includes(query) ||
      item.artist_en.toLowerCase().includes(query)
  );
});

function handleSearch(value) {
  searchInput.value = value;
}
</script>

<template>
  <main class='home container'>
    <div class='home-hero'>
      <div class='home-hero__background'></div>
      <search @input='handleSearch' />
    </div>
    <div class='home-body'>
      <Portrait
        class='home-body__item'
        :portrait='item'
        v-for='item in filteredImages'
        :key='item.id'
      />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import Search from '../components/Search.vue';
import Portrait from '../components/Portrait.vue';
import { portraits } from '../data';

const searchInput = ref('');
const filteredImages = computed(() => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    return portraits;
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

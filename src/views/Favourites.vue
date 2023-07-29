<template>
  <main class='favourites container'>
    <h1 class='favourites-title'>Избранное</h1>
    <div class='favourites-body'>
      <Portrait class='home-body__item' :portrait='item' v-for='item in portraits' :key='item.id' />
    </div>
  </main>
</template>

<script setup>
import Portrait from '../components/Portrait.vue';

let portraits = JSON.parse(localStorage.getItem('portrait'));
</script>

<template>
  <main class='favourites container'>
    <h1 class='favourites-title'>Избранное</h1>
    <div class='favourites-body'>
      <Portrait class='home-body__item' :image='item' v-for='item in images' :key='item.id' />
    </div>
  </main>
</template>

<script setup>
import Portrait from '../components/Portrait.vue';
import { images } from '../data';
</script>

<template>
  <main class='home container'>
    <div class='home-hero'>
      <div class='home-hero__background'></div>
      <search />
    </div>
    <div class='home-body'>
      <Portrait class='home-body__item' :image='item' v-for='item in images' :key='item.id' />
    </div>
  </main>
</template>

<script setup>
import Search from '../components/Search.vue';
import Portrait from '../components/Portrait.vue';
import { images } from '../data';
</script>

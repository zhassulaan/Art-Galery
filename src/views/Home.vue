<template>
  <main class='home container'>
    <div class='home-hero'>
      <div class='home-hero__background'></div>
      <search />
    </div>
    <div class='home-body'>
      <div class='home-body__item' v-for='item in images' :key='item.id'>
        <img :src='item.image' alt='portrait' />
      </div>
    </div>
  </main>
</template>

<script setup>
import Search from '../components/Search.vue';
import { images } from '../data';
</script>

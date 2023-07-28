<template>
  <main class='favourite container'>
    <h1 class="favourite-title">Избранное</h1>
    <div class='favourite-body'>
      <div class='favourite-body__item' v-for='item in images' :key='item.id'>
        <img :src='item.image' :alt='item.name' />
      </div>
    </div>
  </main>
</template>

<script setup>
import { images } from '../data';
</script>

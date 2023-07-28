<template>
  <div class='default-layout'>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
</script>
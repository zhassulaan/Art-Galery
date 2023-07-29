<template>
  <main class='detail container'>
    <div class='detail-background'>
      <img :src='portrait.image' class='detail-background__image' :alt='portrait.name'>
    </div>
    <div class='detail-header'>
      <div class='detail-header__left'>
        <img :src='portrait.avatar' class='detail-header__left-avatar' :alt='portrait.artist'>
        <h6 class='detail-header__left-title'>{{ portrait.artist_en }}</h6>
        <p class='detail-header__left-subtitle'>{{ `@${ portrait.artist_en.replace(/\s+/g, '').toLowerCase() }` }}</p>
      </div>
      <div class='detail-header__right'>
        <div class='detail-header__right-button'>
          <icon-heart class='button-icon' />
        </div>
        <div class='detail-header__right-button'>
          <icon-download class='button-icon' />
          <p class='button-text'>Download</p>
        </div>
      </div>
    </div>
    <div class='detail-body'>
      <img :src='portrait.image' class='detail-body__image' :alt='portrait.name'>
      <icon-maximize class='detail-body__button' />
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { images } from '../data';
import IconHeart from '../components/icons/Heart.vue';
import IconDownload from '../components/icons/Download.vue';
import IconMaximize from '../components/icons/Maximize.vue';

const router = useRouter();
const portrait = images.find((item) => item.id === Number(router.currentRoute.value.params.id));
</script>

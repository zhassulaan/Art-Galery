<template>
  <main class='detail container'>
    <div class='detail-background'>
      <img :src='images[0].image' class='detail-background__image' :alt='images[0].name'>
    </div>
    <div class='detail-header'>
      <div class='detail-header__left'>
        <img :src='images[0].avatar' class='detail-header__left-avatar' :alt='images[0].artist'>
        <h6 class='detail-header__left-title'>{{ images[0].artist_en }}</h6>
        <p class='detail-header__left-subtitle'>{{ `@${ images[0].artist_en.replace(/\s+/g, '').toLowerCase() }` }}</p>
      </div>
      <div class='detail-header__right'>
        <icon-favourite />
        <div class="detail-header__right-button">
          <icon-download />
          <p>Download</p>
        </div>
      </div>
    </div>
    <div class='detail-body'>
      <img :src='images[0].image' class='detail-body__image' :alt='images[0].name'>
      <icon-maximize class='detail-body__button' />
    </div>
  </main>
</template>

<script setup>
import { images } from '../data';
import IconFavourite from '../components/icons/Favourite.vue';
import IconDownload from '../components/icons/Download.vue';
import IconMaximize from '../components/icons/Maximize.vue';
</script>

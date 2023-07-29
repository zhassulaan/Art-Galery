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
        <div class='detail-header__right-button' @click='handleFavourite()'>
          <icon-heart class='button-icon' :class="{ 'active': saved }" />
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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { images } from '../data';
import IconHeart from '../components/icons/Heart.vue';
import IconDownload from '../components/icons/Download.vue';
import IconMaximize from '../components/icons/Maximize.vue';

const router = useRouter();
const portrait = images.find((item) => item.id === Number(router.currentRoute.value.params.id));
let data = JSON.parse(localStorage.getItem('portrait'));
const saved = ref(data && data.find((item) => item.id === portrait.id));

function handleFavourite() {
  if (saved.value) {
    data = data.filter((item) => item.id !== portrait.id);
  } else {
    data = data ? [...data, portrait] : [portrait];
  }
  saved.value = !saved.value;
  localStorage.setItem('portrait', JSON.stringify(data));
}
watch(saved, (newValue) => {
  localStorage.setItem('portrait', JSON.stringify(data));
});
</script>

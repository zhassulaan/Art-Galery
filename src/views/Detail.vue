<template>
  <main class='detail container'>
    <div class='detail-background'>
      <img :src='portrait.image' class='detail-background__image' :alt='portrait.name' />
    </div>
    <div class='detail-header'>
      <div class='detail-header__left'>
        <img :src='portrait.avatar' class='detail-header__left-avatar' :alt='portrait.artist' />
        <h6 class='detail-header__left-title'>{{ portrait.artist_en }}</h6>
        <p class='detail-header__left-subtitle'>{{ `@${ portrait.artist_en.replace(/\s+/g, '').toLowerCase() }` }}</p>
      </div>
      <div class='detail-header__right'>
        <div class='detail-header__right-button btn' @click='handleFavourite()'>
          <icon-heart class='button-icon' :class="{ 'active': saved }" />
        </div>
        <a :href='portrait.image' download class='detail-header__right-button btn'>
          <icon-download class='button-icon' />
          <p class='button-text'>Download</p>
        </a>
      </div>
    </div>
    <div class='detail-body'>
      <img :src='portrait.image' class='detail-body__image' :alt='portrait.name' />
      <icon-maximize class='detail-body__button btn' @click='toggleMaximize' />
    </div>
    <div class='detail-maximized' v-if='isMaximized'>
      <img :src='portrait.image' class='detail-maximized__image' :class="isWidthLarger ? 'width' : 'height'" :alt='portrait.name' @load='checkImageDimensions' />
      <div class='detail-maximized__close btn' @click='toggleMaximize'></div>
      <div class='detail-maximized__background' @click='toggleMaximize'></div>
    </div>
  </main>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { portraits } from '../data';
import IconHeart from '../components/icons/Heart.vue';
import IconDownload from '../components/icons/Download.vue';
import IconMaximize from '../components/icons/Maximize.vue';

const router = useRouter();
const portrait = portraits.find((item) => item.id === Number(router.currentRoute.value.params.id));
let data = JSON.parse(localStorage.getItem('portrait'));
const saved = ref(data && data.find((item) => item.id === portrait.id));
const isWidthLarger = ref(null);
const isMaximized = ref(false);

watch(saved, (newValue) => {
  localStorage.setItem('portrait', JSON.stringify(data));
});
onMounted(() => {
  isMaximized.value = false;
});

function handleFavourite() {
  if (saved.value) {
    data = data.filter((item) => item.id !== portrait.id);
  } else {
    data = data ? [...data, portrait] : [portrait];
  }
  saved.value = !saved.value;
  localStorage.setItem('portrait', JSON.stringify(data));
}
function toggleMaximize() {
  isMaximized.value = !isMaximized.value;
  document.body.classList.add('freeze');
}
function checkImageDimensions(event) {
  const imageElement = event.target;
  if (imageElement.naturalWidth > imageElement.naturalHeight) {
    isWidthLarger.value = true;
  } else {
    isWidthLarger.value = false;
  }
}
</script>

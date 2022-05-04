<template>
  <main class="app">
    <div class="app__container">
      <div class="buttons text-neutral-200">
        <element-button>Заказать в Москву</element-button>
        <element-button>Заказать в Санкт-Петербург</element-button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import '@/assets/style/tailwind.css';
import ElementButton from '@/components/UI/ElementButton/index.vue';
</script>

<style lang="postcss">
html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  direction: ltr;
}

.app__container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

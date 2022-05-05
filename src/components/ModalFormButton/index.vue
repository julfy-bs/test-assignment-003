<template>
  <div class="form__group group-button">
    <element-button
      :is-green="true"
      :is-full-width="true"
      type="submit"
    >
      Отправить
    </element-button>
  </div>
</template>

<script setup lang='ts'>
import ElementButton from '@/components/UI/ElementButton/index.vue'
</script>

<style scoped lang='scss'>
</style>

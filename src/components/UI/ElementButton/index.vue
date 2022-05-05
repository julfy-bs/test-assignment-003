<template>
  <button
    class="button px-4 py-2 text-white"
    :class="classObject"
    type="button"
  >
    <slot />
  </button>
</template>

<script setup lang='ts'>
import { computed } from 'vue'

interface Props {
  isGreen?: boolean,
  isBlue?: boolean,
  isFullWidth?: boolean,
}

const props = defineProps<Props>()

const classObject = computed(() => {
  return {
    'width-100': props.isFullWidth,
    'bg-c-green': props.isGreen,
    'bg-c-blue': props.isBlue
  }
})
</script>

<style scoped lang='postcss'>
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 9px 17px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  width: 100%;
  height: 38px;
}

.button.width-100 {
  width: 100%;
}

@media (min-width: 768px) {
  .button {
    width: fit-content;
  }
}
</style>

<template>
  <div
    class="modal bg-c-modal"
    @click.self="switchModal('')"
  >
    <div class="modal__content bg-c-white">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useModal } from '@/hooks/useModal'

const { switchModal } = useModal()
</script>

<style scoped lang='postcss'>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__content {
  width: 100%;
  padding: 24px;
  min-width: 300px;
  max-width: 96vw;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 460px) {
  .modal__content {
    width: fit-content;
  }
}

@media (min-width: 1080px) {
  .modal__content {
    max-width: 80vw;
  }
}
</style>

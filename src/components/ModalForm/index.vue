<template>
  <form
    class="form"
    @submit.prevent="postForm"
  >
    <div class="form__container">
      <modal-form-name />
      <modal-form-phone />
      <modal-form-email />
      <modal-form-city />
      <modal-form-button />
    </div>
  </form>
</template>

<script setup lang='ts'>
import ModalFormName from '@/components/ModalFormName/index.vue'
import ModalFormPhone from '@/components/ModalFormPhone/index.vue'
import ModalFormEmail from '@/components/ModalFormEmail/index.vue'
import ModalFormCity from '@/components/ModalFormCity/index.vue'
import ModalFormButton from '@/components/ModalFormButton/index.vue'
import { useForm } from '@/hooks/useForm'
const { postForm } = useForm()
</script>

<style lang='postcss'>

.form {
  display: flex;
}

.form, .form__container {
  width: 100%;
}

.form__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
  gap: 20px;
}

.form__group {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: var(--max-width);
}

.form__label {
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
}

.from__label--error {
  font-weight: 400;
  font-size: 12px;
}

.form__input {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 13px;
  height: 38px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.form__input--select {
  padding: 9px 13px 9px;
}

.form__input::placeholder {
  color: #6B7280;
}

@media (min-width: 460px) {
  .form__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--max-width), 1fr));
    gap: 20px;
  }

  .form__group:nth-child(4) {
    width: 100%;
    grid-area: 2 / 1 / auto / span 2;
  }
}

@media (min-width: 768px) {
  .form__container {
    display: grid;
    grid-template-columns: repeat(3, minmax(var(--max-width), 1fr));
    gap: 20px;
  }

  .form__group:nth-child(4) {
    width: 100%;
    grid-area: auto / 1 / auto / span 2;
  }
}

@media (min-width: 1080px) {
  .form__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--max-width), 1fr));
    gap: 20px;
  }

  .form__group:nth-child(4) {
    width: 100%;
    grid-area: auto;
  }

  .form__group:nth-child(5) {
    width: 100%;
    grid-area: 2 / 4 / 2 / 4;
  }
}
</style>

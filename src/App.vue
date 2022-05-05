<template>
  <main class="app">
    <div class="app__container">
      <div class="buttons">
        <div class="buttons__item">
          <element-button
            :is-blue="true"
            city="moscow"
            :button-event="switchModal"
          >
            Заказать в Москву
          </element-button>
        </div>
        <div class="buttons__item">
          <element-button
            :is-green="true"
            city="peter"
            :button-event="switchModal"
          >
            Заказать в Санкт-Петербург
          </element-button>
        </div>
      </div>
      <element-modal v-if="isModalOpened && modalContent === 'form'">
        <h2 class="modal__title text-c-gray-900">
          Заказать звонок
        </h2>
        <modal-form />
      </element-modal>
      <element-modal v-if="isModalOpened && modalContent === 'info' && errors.length > 0">
        <h2
          v-for="error in errors"
          :key="error"
          class="modal__title text-c-gray-900"
        >
          {{ error }}
        </h2>
      </element-modal>
      <element-modal v-if="isModalOpened && modalContent === 'info' && errors.length === 0">
        <h2 class="modal__title text-c-gray-900">
          Ответ
        </h2>
        <div>
          Имя:
          <span>
            {{ serverResponse.name }}
          </span>
        </div>
        <div>
          Телефон:
          <span>
            {{ serverResponse.phone }}
          </span>
        </div>
        <div>
          Почта:
          <span>
            {{ serverResponse.email }}
          </span>
        </div>
        <div>
          Город:
          <span v-if="serverResponse.city_id === 1">
            Москва
          </span>
          <span v-if="serverResponse.city_id === 2">
            Питер
          </span>
        </div>
      </element-modal>
    </div>
  </main>
</template>

<script setup lang="ts">
import '@/assets/style/tailwind.css'
import ElementButton from '@/components/UI/ElementButton/index.vue'
import ElementModal from '@/components/UI/ElementModal/index.vue'
import ModalForm from '@/components/ModalForm/index.vue'

import { useModal } from '@/hooks/useModal.ts'
import { useForm } from '@/hooks/useForm'

const { switchModal, isModalOpened, modalContent } = useModal()
const { serverResponse, errors } = useForm()

</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900');
:root {
  --max-width: 100%
}

*, :before, :after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  font-family: 'Inter', sans-serif;
  font-style: normal;
}

.app__container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1280px;
  padding: 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.buttons__item {
  margin: 10px 0 0;
}

.buttons__item:first-child {
  margin: 0;
}

.modal__title {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 23px;
}

@media (min-width: 460px) {
  :root {
    --max-width: 190px
  }
}


@media (min-width: 768px) {



  .app__container {
    padding: 20px 40px;
  }

  .buttons__item {
    margin: 0 0 0 20px;
  }

  .buttons {
    flex-direction: row;
  }
}

@media (min-width: 1080px) {
  :root {
    --max-width: 170px
  }

  .app__container {
    padding: 20px 80px;
  }
}
</style>

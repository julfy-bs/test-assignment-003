<template>
  <div class="form__group group-name">
    <label
      for="name"
      class="form__label text-c-gray-700"
    >
      Имя*
    </label>
    <!--    <label-->
    <!--      v-if="error.name"-->
    <!--      for="name"-->
    <!--      class="form__label from__label&#45;&#45;error text-red-500"-->
    <!--    >-->
    <!--      Обязательное поле-->
    <!--    </label>-->
    <input
      v-model="name"
      required="required"
      name="name"
      type="text"
      class="form__input text-c-gray-900 border-c-gray-300"
      placeholder="Иван Иванов"
      @change="changeOneField({key: 'name', value: name})"
    >
  </div>
</template>

<script setup lang='ts'>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useForm } from '@/hooks/useForm'
const store = useStore()
const name = ref(store.state.form.fields.name)

const { changeOneField } = useForm()
</script>

<style scoped lang='scss'>

</style>

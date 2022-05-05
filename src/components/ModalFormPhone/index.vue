<template>
  <div class="form__group group-phone">
    <label
      for="phone"
      class="form__label text-c-gray-700"
    >
      Телефон*
    </label>
    <!--    <label-->
    <!--      v-if="error.phone"-->
    <!--      for="phone"-->
    <!--      class="form__label from__label&#45;&#45;error text-red-500"-->
    <!--    >-->
    <!--      Обязательное поле-->
    <!--    </label>-->
    <input
      v-model="phone"
      v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
      required="required"
      name="phone"
      type="text"
      class="form__input text-c-gray-900 border-c-gray-300"
      placeholder="+7 (___) ___-__-__"
      @change="changeOneField({key: 'phone', value: phone})"
    >
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@/hooks/useForm'
const store = useStore()
const phone = ref(store.state.form.fields.phone)
const { changeOneField } = useForm()
</script>

<style scoped lang='scss'>

</style>

<template>
  <div class="form__group group-email">
    <label
      for="email"
      class="form__label text-c-gray-700"
    >
      Email*
    </label>
    <label
      v-show="!isEmailValid"
      for="email"
      class="form__label from__label--error text-red-500"
    >
      Введите корректный email
    </label>
    <input
      v-model="email"
      required="required"
      name="email"
      type="email"
      class="form__input text-c-gray-900 border-c-gray-300"
      placeholder="you@example.com"
      @change="changeOneField({key: 'email', value: email})"
      @keyup="checkEmailValidation"
    >
  </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@/hooks/useForm'

const store = useStore()
const email = ref(store.state.form.fields.email)
const { changeOneField } = useForm()
const isEmailValid = computed(() => store.state.form.isEmailValid)

const changeEmailValidation = (payload: boolean) => store.commit('form/CHANGE_EMAIL_VALIDATION', payload)
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,24}))$/
const checkEmailValidation = () => {
  return (email.value === '')
    ? ''
    : (emailRegex.test(email.value))
      ? changeEmailValidation(true)
      : changeEmailValidation(false)
}
</script>

<style scoped lang='scss'>

</style>

<template>
  <div class="form__group group-phone">
    <label
      for="phone"
      class="form__label text-c-gray-700"
    >
      Телефон*
    </label>
    <label
      v-show="!isPhoneValid"
      for="phone"
      class="form__label from__label--error text-red-500"
    >
      Введите корректный номер
    </label>
    <input
      v-model="phone"
      v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']"
      required="required"
      name="phone"
      type="text"
      minlength="18"
      maxlength="18"
      class="form__input text-c-gray-900 border-c-gray-300"
      placeholder="+7 (___) ___-__-__"
      @change="changeOneField({key: 'phone', value: phone})"
      @keyup="checkPhoneValidation"
    >
  </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@/hooks/useForm'
const store = useStore()
const phone = ref(store.state.form.fields.phone)
const { changeOneField } = useForm()
const isPhoneValid = computed(() => store.state.form.isPhoneValid)
const changePhoneValidation = (payload: boolean) => store.commit('form/CHANGE_PHONE_VALIDATION', payload)
const checkPhoneValidation = () => {
  if (phone.value.split('').length !== 18) {
    changePhoneValidation(false)
  } else {
    changePhoneValidation(true)
  }
}
</script>

<style scoped lang='scss'>

</style>

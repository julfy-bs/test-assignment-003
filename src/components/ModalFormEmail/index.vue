<template>
  <div class="form__group group-email">
    <label
      for="email"
      class="form__label text-c-gray-700"
    >
      Email*
    </label>
    <!--    <label-->
    <!--      v-if="error.email"-->
    <!--      for="email"-->
    <!--      class="form__label from__label&#45;&#45;error text-red-500"-->
    <!--    >-->
    <!--      {{ emailError }}-->
    <!--    </label>-->
    <input
      v-model="email"
      required="required"
      name="email"
      type="email"
      class="form__input text-c-gray-900 border-c-gray-300"
      placeholder="you@example.com"
      @change="changeOneField({key: 'email', value: email})"
    >
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@/hooks/useForm'
const store = useStore()
const email = ref(store.state.form.fields.email)
const { changeOneField } = useForm()

</script>

<style scoped lang='scss'>

</style>

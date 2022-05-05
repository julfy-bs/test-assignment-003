<template>
  <div class="form__group group-city">
    <label
      for="city"
      class="form__label text-c-gray-700"
    >
      Город*
    </label>
    <!--    <label-->
    <!--      v-if="error.city"-->
    <!--      for="city"-->
    <!--      class="form__label from__label&#45;&#45;error text-red-500"-->
    <!--    >-->
    <!--      Обязательное поле-->
    <!--    </label>-->
    <select
      v-model="city_id"
      required="required"
      name="city"
      class="form__input text-c-gray-900 form__input--select border-c-gray-300"
      @change="changeOneField({key: 'email', value: city_id})"
    >
      <option
        v-for="item in cities"
        :key="item.id"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useForm } from '@/hooks/useForm'
const store = useStore()
const cities = computed(() => store.state.form.cities)
const city_id = ref(store.state.form.fields.city_id)
const { changeOneField } = useForm()
</script>

<style scoped lang='scss'>

</style>

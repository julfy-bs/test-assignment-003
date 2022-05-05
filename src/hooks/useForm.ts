import { phoneReplace } from '@/helpers/phoneReplace'
import FormFields from '@/models/FormFields'
import { Mutation, useStore } from 'vuex'
import { computed, ComputedRef, Ref } from 'vue'
import { useModal } from '@/hooks/useModal'
import FormPayload, { Key, Value } from '@/models/FormPayload'


export interface UseForm {
  postForm: EventListener;
  changeOneField: Mutation<FormPayload<Key, Value>>;
  formFields: Ref;
  serverResponse: Ref;
  errors: ComputedRef
}

export const useForm = (): UseForm => {
  const store = useStore()
  const { switchModal } = useModal()
  const isEmailValid = computed(() => store.state.form.isEmailValid)
  const isPhoneValid = computed(() => store.state.form.isPhoneValid)
  const formFields = computed(() => store.state.form.fields)
  const serverResponse = computed(() => store.state.form.serverResponse)
  const errors = computed(() => store.state.form.errors)
  const changeOneField = (payload: FormPayload<Key, Value>) => store.commit('form/CHANGE_ONE_FIELD', payload)
  const getResponse = (payload: unknown) => {
    switchModal('info')
    return store.dispatch('form/getResponse', payload)
  }

  const postForm = () => {
    if (isEmailValid.value && isPhoneValid.value) {
      const data: FormFields = {
        name: formFields.value.name,
        phone: phoneReplace(formFields.value.phone),
        email: formFields.value.email,
        city_id: formFields.value.city_id
      }
      getResponse(data)
        .then(() => switchModal('info'))
    }
  }

  return {
    postForm,
    changeOneField,
    formFields,
    serverResponse,
    errors
  }
}

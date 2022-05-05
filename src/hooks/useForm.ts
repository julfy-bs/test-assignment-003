import { phoneReplace } from '@/helpers/phoneReplace'
import FormFields from '@/models/FormFields'
import { Mutation, useStore } from 'vuex'
import { computed, ComputedRef, Ref, ref } from 'vue'
import { useModal } from '@/hooks/useModal'
import FormPayload, { Key, Value } from '@/models/FormPayload'


export interface UseForm {
  postForm: EventListener;
  changeOneField: Mutation<FormPayload<Key, Value>>;
  changeAllFields: Mutation<FormFields>;
  formFields: Ref;
  serverResponse: Ref;
  errors: ComputedRef
}

export const useForm = (): UseForm => {
  const store = useStore()
  const emptyFields: FormFields = {
    name: '',
    phone: '',
    email: '',
    city_id: 0
  }
  const { switchModal } = useModal()
  const formFields = ref(store.state.form.fields)
  const serverResponse = computed(() => store.state.form.serverResponse)
  const errors = computed(() => store.state.form.errors)
  const changeOneField = (payload: FormPayload<Key, Value>) => store.commit('form/CHANGE_ONE_FIELD', payload)
  const changeAllFields = (payload: FormFields) => store.commit('form/CHANGE_ALL_FIELDS', payload)
  const getResponse = (payload: unknown) => {
    switchModal('info')
    return store.dispatch('form/getResponse', payload)
  }

  const postForm = () => {
    const data = {
      name: formFields.value.name,
      phone: phoneReplace(formFields.value.phone),
      email: formFields.value.email,
      city_id: formFields.value.city_id
    }
    getResponse(data)
      .then(() => switchModal('info'))
    void changeAllFields(emptyFields)
  }

  return {
    postForm,
    changeOneField,
    changeAllFields,
    formFields,
    serverResponse,
    errors
  }
}

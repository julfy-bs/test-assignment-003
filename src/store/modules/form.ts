import City from '@/models/City'
import FormFields from '@/models/FormFields'
import FormPayload from '@/models/FormPayload'
import { ActionContext } from 'vuex'
import { ModalState } from '@/store/modules/modal'
import { RootState } from '@/store'
import axios from 'axios'

const API = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/'

export interface FormState {
  cities: City[];
  fields: FormFields;
  serverResponse: string;
  errors: string[];
  isEmailValid: boolean;
  isPhoneValid: boolean;
}

const state = (): FormState => ({
  cities: [
    {
      id: 1,
      name: 'Москва'
    },
    {
      id: 2,
      name: 'Санкт-Петербург'
    },
    {
      id: 3,
      name: 'Казань'
    }
  ],
  fields: {
    name: '',
    phone: '+7',
    email: '',
    city_id: 1
  },
  serverResponse: '',
  errors: [],
  isEmailValid: false,
  isPhoneValid: false
})

const mutations = {
  CHANGE_ONE_FIELD<Key extends keyof FormFields,
    Value extends FormFields[Key]>(state: FormState, payload: FormPayload<Key, Value>): void {
    state.fields[payload.key] = payload.value
  },
  CHANGE_ALL_FIELDS(state: FormState, payload: FormFields): void {
    state.fields = payload
  },
  GET_SERVER_RESPONSE(state: FormState, payload: string): void {
    state.serverResponse = payload
  },
  ADD_ERROR(state: FormState, payload: string): void {
    state.errors.splice(0, 1, payload)
  },
  CLEAR_ERROR(state: FormState): void {
    state.errors.splice(0, state.errors.length)
  },
  CHANGE_EMAIL_VALIDATION(state: FormState, payload: boolean): void {
    state.isEmailValid = payload
  },
  CHANGE_PHONE_VALIDATION(state: FormState, payload: boolean): void {
    state.isPhoneValid = payload
  },
}

const actions = {
  async getResponse({ commit }: ActionContext<ModalState, RootState>, data: FormFields): Promise<unknown> {
    try {
      await axios
        .post<FormFields>(API, data)
        .then((resolve) => {
          if (resolve) {
            const payload = JSON.parse(resolve.config.data.trim())
            commit('GET_SERVER_RESPONSE', payload)
            const emptyFields: FormFields = {
              name: '',
              phone: '',
              email: '',
              city_id: 0
            }
            commit('CHANGE_ALL_FIELDS', emptyFields)
            commit('CLEAR_ERROR')
          }
        })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        commit('GET_SERVER_RESPONSE', error)
        commit('ADD_ERROR', error.message)
        return error.message
      } else {
        console.log('unexpected error: ', error)
        return 'An unexpected error occurred'
      }
    } finally {
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

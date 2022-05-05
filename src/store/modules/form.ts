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
  errors: string[]
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
    name: 'as',
    phone: '+7 (123) 412-34-12',
    email: '2@a.com',
    city_id: 1
  },
  serverResponse: '',
  errors: []
})

const mutations = {
  CHANGE_ONE_FIELD<Key extends keyof FormFields,
    Value extends FormFields[Key]>(state: FormState, payload: FormPayload<Key, Value>): void {
    state.fields[payload.key] = payload.value
    console.log(payload, state.fields)
  },
  CHANGE_ALL_FIELDS(state: FormState, payload: FormFields): void {
    state.fields = payload
  },
  THROW_ERROR(state: FormState, payload: string): void {
    state.serverResponse = payload
  },
  ADD_ERROR(state: FormState, payload: string): void {
    state.errors.push(payload)
  }
}

const actions = {
  async getResponse({ commit }: ActionContext<ModalState, RootState>, data: FormFields): Promise<unknown> {
    try {
      await axios
        .post<FormFields>(API, data)
        .then((resolve) => {
          if (resolve) {
            const payload = JSON.parse(resolve.config.data.trim())
            commit('THROW_ERROR', payload)
          }
        })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        commit('THROW_ERROR', error)
        commit('ADD_ERROR', error.message)
        return error.message
      } else {
        console.log('unexpected error: ', error)
        return 'An unexpected error occurred'
      }
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

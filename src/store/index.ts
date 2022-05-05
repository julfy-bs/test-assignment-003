import { createStore } from 'vuex'
import modal, { ModalState } from '@/store/modules/modal.ts'
import form, { FormState } from '@/store/modules/form.ts'

export interface RootState {
  modal: ModalState
  form: FormState
}

export default createStore({
  modules: {
    modal,
    form
  }
})

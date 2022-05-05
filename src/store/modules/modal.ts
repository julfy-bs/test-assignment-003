type ModalType = 'form' | 'info' |''

export interface ModalState {
  isModalOpened: boolean;
  modalContent:  ModalType;
}

const state = (): ModalState => ({
  isModalOpened: false,
  modalContent: ''
})

const mutations = {
  CHANGE_MODAL_DISPLAY_CONDITION(state: ModalState, payload?: boolean): void {
    state.isModalOpened = payload || !state.isModalOpened
  },
  CHANGE_MODAL_CONTENT(state: ModalState, payload: ModalType): void {
    state.modalContent = payload
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

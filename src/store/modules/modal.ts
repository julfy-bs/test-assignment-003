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

const actions = {
  // async toggleModal({ commit }: ActionContext<ModalState, RootState>, value?: boolean): Promise<void> {
  //   try {
  //     await commit('CHANGE_MODAL_DISPLAY_CONDITION', value)
  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // }
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

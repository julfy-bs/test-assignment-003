import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'

type ModalType = 'form' | 'info' |''

export interface UseModal {
  switchModal: (type: ModalType) => void;
  isModalOpened: ComputedRef;
  modalContent: ComputedRef;
}

export const useModal = (): UseModal => {
  const store = useStore()
  const isModalOpened = computed((): boolean => store.state.modal.isModalOpened)
  const modalContent = computed((): ModalType => store.state.modal.modalContent)
  const toggleModal = (payload?: boolean) => store.commit('modal/CHANGE_MODAL_DISPLAY_CONDITION', payload)
  const changeModalContent = (payload: ModalType) => store.commit('modal/CHANGE_MODAL_CONTENT', payload)

  const switchModal = (type: ModalType) => {
    if (isModalOpened.value) {
      toggleModal(false)
      changeModalContent('')
    } else {
      toggleModal(true)
      changeModalContent(type)
    }
  }

  return {
    switchModal,
    isModalOpened,
    modalContent
  }
}

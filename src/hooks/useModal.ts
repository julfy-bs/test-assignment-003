import { useStore } from 'vuex'
import { computed, ComputedRef } from 'vue'
import FormPayload, { Key, Value } from '@/models/FormPayload'

type ModalType = 'form' | 'info' | ''

export interface UseModal {
  switchModal: (type: ModalType, city?:number) => void;
  isModalOpened: ComputedRef;
  modalContent: ComputedRef;
}

export const useModal = (): UseModal => {
  const store = useStore()
  const isModalOpened = computed((): boolean => store.state.modal.isModalOpened)
  const modalContent = computed((): ModalType => store.state.modal.modalContent)
  const changeOneField = (payload: FormPayload<Key, Value>) => store.commit('form/CHANGE_ONE_FIELD', payload)
  const toggleModal = (payload?: boolean) => store.commit('modal/CHANGE_MODAL_DISPLAY_CONDITION', payload)
  const changeModalContent = (payload: ModalType) => store.commit('modal/CHANGE_MODAL_CONTENT', payload)

  const switchModal = (type: ModalType, city?: number) => {
    if (isModalOpened.value) {
      toggleModal(false)
      changeModalContent('')
    } else {
      toggleModal(true)
      if (city && city > 0) {
        changeOneField({ key: 'city_id', value: city })
      }
      changeModalContent(type)
    }
  }

  return {
    switchModal,
    isModalOpened,
    modalContent
  }
}

import { useContext } from 'react'
import { ModalContext } from '../context/Modal'

const useModal = () => {
  return useContext(ModalContext)
}

export default useModal

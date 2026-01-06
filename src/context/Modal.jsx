import { createContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalProvider ({ children }) {
  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState('')
  const [fadeOut, setFadeOut] = useState(false)

  const fadeOutAndClose = () => {
    setFadeOut(true)

    setTimeout(() => {
      setFadeOut(false)
      setModal(false)
    }, 300)
  }

  return (
    <ModalContext.Provider value={{ modal, setModal, url, setUrl, fadeOutAndClose, fadeOut }}>{children}</ModalContext.Provider>
  )
}

import React from 'react'
import useModal from '../hooks/useModal'

const Modal = () => {
  const { url, fadeOutAndClose, fadeOut } = useModal()

  return (
    <div className={`modal-background ${fadeOut && 'fadeout'} `} onClick={fadeOutAndClose}>
      <div className='modal'>
        <iframe src={url} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
      </div>
    </div>
  )
}

export default Modal

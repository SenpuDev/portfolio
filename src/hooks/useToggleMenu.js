import { useState, useEffect } from 'react'

// Toggle true/false onClick, if (width screen > 768px) always false.
const useToggle = () => {
  const [state, setState] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    if (windowWidth > 768 & state) {
      setState(false)
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  const toggle = () => { setState(prevState => (!prevState)) }

  return [state, toggle]
}

export default useToggle

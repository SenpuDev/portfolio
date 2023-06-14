import { useContext } from 'react'
import { ScrollRefsContext } from '../../context/scrollRefs'

const useScrollRefs = () => {
  return useContext(ScrollRefsContext)
}

export default useScrollRefs

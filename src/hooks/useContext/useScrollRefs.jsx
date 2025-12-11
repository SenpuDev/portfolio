import { useContext } from 'react'
import { ScrollRefsContext } from '../../context/ScrollRefs'

const useScrollRefs = () => {
  return useContext(ScrollRefsContext)
}

export default useScrollRefs

import { useContext } from 'react'
import { LanguageContext } from '../../context/Language'

const useLanguage = () => {
  return useContext(LanguageContext)
}

export default useLanguage

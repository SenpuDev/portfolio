import { useContext } from 'react'
import { LanguageContext } from '../../context/language'

const useLanguage = () => {
  return useContext(LanguageContext)
}

export default useLanguage

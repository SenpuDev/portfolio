import { useState, useEffect } from 'react'
const useToggleLanguage = () => {
  const [language, setLanguage] = useState(JSON.parse(window.localStorage.getItem('language')) ?? 'es')

  const toggleLanguage = () => {
    setLanguage(prevState => (prevState === 'es' ? 'en' : 'es'))
  }

  useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return [language, toggleLanguage]
}

export default useToggleLanguage

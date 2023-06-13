import { createContext } from 'react'
import useToggleLanguage from '../hooks/useToggleLanguage'
import staticContent from '../json/webcontent.json'
import dinamicContent from '../json/projects.json'
export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, toggleLanguage] = useToggleLanguage()
  const webContent = staticContent
  const projectsContent = dinamicContent

  // Static content from json

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, webContent, projectsContent }}>
      {children}
    </LanguageContext.Provider>
  )
}

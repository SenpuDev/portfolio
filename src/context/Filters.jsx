import { createContext, useState } from 'react'

// Create the context - That is our extract value
export const FiltersContext = createContext()

// Provide the App the context
export const FILTER_OPTIONS = {
  WORK_EXPERIENCE: 'workExperience',
  SIDE_PROJECTS: 'sideProjects',
  ACHIEVEMENTS: 'achievements',
  ALL: 'all'
}

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(FILTER_OPTIONS.WORK_EXPERIENCE)
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  )
}

import { createContext, useState } from 'react'

// Create the context - That is our extract value
export const FiltersContext = createContext()

// Provide the App the context
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(1)
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  )
}

import { createContext, useRef } from 'react'

// Create the context - That is our extract value
export const ScrollRefsContext = createContext()

// Provide App the context
export function ScrollRefsProvider ({ children }) {
  const wellcome = useRef(null)
  const projects = useRef(null)
  const skills = useRef(null)

  return (
    <ScrollRefsContext.Provider value={{ wellcome, projects, skills }}>{children}</ScrollRefsContext.Provider>
  )
}

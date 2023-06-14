import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { FiltersProvider } from './context/filters.jsx'
import { ScrollRefsProvider } from './context/scrollRefs.jsx'
import { LanguageProvider } from './context/language.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LanguageProvider>
      <ScrollRefsProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </ScrollRefsProvider>
    </LanguageProvider>
  </>
)

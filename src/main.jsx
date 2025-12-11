import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { FiltersProvider } from './context/Filters.jsx'
import { ScrollRefsProvider } from './context/ScrollRefs.jsx'
import { LanguageProvider } from './context/Language.jsx'
import { ModalProvider } from './context/Modal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LanguageProvider>
      <ScrollRefsProvider>
        <ModalProvider>
          <FiltersProvider>
            <App />
          </FiltersProvider>
        </ModalProvider>
      </ScrollRefsProvider>
    </LanguageProvider>
  </>
)

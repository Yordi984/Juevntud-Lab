import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRegistro from './AppRegistro.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './registro.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <AppRegistro />
    </React.StrictMode>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import './perfil.css' 
import AppEstudiante from './AppEstudiante'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

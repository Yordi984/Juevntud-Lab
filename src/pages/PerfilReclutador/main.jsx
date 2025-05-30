import React from 'react'
import ReactDOM from 'react-dom/client'
import AppEmpresa from './AppEmpresa'
import './perfil.css'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <AppEmpresa />
    </React.StrictMode>
  )
}

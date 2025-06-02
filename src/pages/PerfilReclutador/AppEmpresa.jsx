import { useEffect, useState } from 'react'
import PerfilEmpresa from './PerfilEmpresa'

function AppEmpresa() {
  const [datosEmpresa, setDatosEmpresa] = useState({
    nombre_empresa: '',
    reclutador:'',
    rubro: '',
    ubicacion: '',
    descripcion: '',
    trabajos: [],
    reseñas: []
  })

  useEffect(() => {
    fetch('/api/empresa')
      .then(res => res.json())
      .then(data => setDatosEmpresa(data))
      .catch(() => {}) 
  }, [])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white px-4 nav-personalizado">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="/">
              <img src="/logo.png" alt="logo" style={{ height: '40px', marginRight: '10px' }} />
            </a>
            <span className="navbar-brand mb-0 h1">Juventud Lab</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href="/" className="nav-link text-dark">Home</a>
            <a href="/logout" className="nav-link text-dark">Cerrar sesión</a>
          </div>
        </div>
      </nav>

      <PerfilEmpresa datosEmpresa={datosEmpresa} />
    </div>
  )
}

export default AppEmpresa

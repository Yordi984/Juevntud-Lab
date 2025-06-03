import { useState } from 'react'
import './PublicarVacante.css'

function PublicarVacante() {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [area, setArea] = useState('')
  const [tipo, setTipo] = useState('')
  const [habilidades_requeridas, setHabilidades] = useState('')
  const [modalidad, setModalidad] = useState('')
  const [sueldo, setSueldo] = useState('0')

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/Trabajos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo,
        descripcion,
        area,
        tipo,
        habilidades_requeridas,
        modalidad,
        sueldo
      })
    })
    .then(res => res.ok && alert('Vacante publicada'))
    .catch(() => alert('Error al enviar la vacante'))
  }

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="logo-icon">JL</div>
          <div className="logo-text">JuventudLab</div>
        </div>
      </div>

      <div className="form-container">
        <h2>Publicar Nueva Vacante</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" required value={titulo} onChange={e => setTitulo(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" rows="4" required value={descripcion} onChange={e => setDescripcion(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="area">Área</label>
            <input type="text" id="area" required value={area} onChange={e => setArea(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo</label>
            <select id="tipo" required value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="">Selecciona</option>
              <option value="Tiempo completo">Tiempo completo</option>
              <option value="Medio tiempo">Medio tiempo</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="habilidades">Habilidades Requeridas</label>
            <textarea id="habilidades" rows="3" value={habilidades_requeridas} onChange={e => setHabilidades(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="modalidad">Modalidad</label>
            <select id="modalidad" required value={modalidad} onChange={e => setModalidad(e.target.value)}>
              <option value="">Selecciona</option>
              <option value="Presencial">Presencial</option>
              <option value="Remoto">Remoto</option>
            </select>
          </div>

          <div className="form-group sueldo-display">
            <label htmlFor="sueldo">Sueldo</label>
            <input type="text" id="sueldo" required value={sueldo} onChange={e => setSueldo(e.target.value.replace(/[^0-9]/g, ''))} />
          </div>

          <button type="submit">Publicar Vacante</button>
        </form>
      </div>
    </>
  )
}

export default PublicarVacante

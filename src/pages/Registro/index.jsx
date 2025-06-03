import { useState } from 'react'
import './registro.css'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [apellidos_maternos, setApellidosMaternos] = useState('')
  
  const [apellidos_paternos, setApellidosPaternos] = useState('')
  const [edad, setEdad] = useState(18)
  const [carrera, setCarrera] = useState('')
  const [email, setCorreo] = useState('')
  const [password, setContrasena] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [seguridad, setSeguridad] = useState(0)
  const [coinciden, setCoinciden] = useState(true)

  const evaluarSeguridad = (e) => {
    const val = e.target.value
    setContrasena(val)

    let nivel = 0
    if (val.length >= 8) nivel++
    if (/[A-Z]/.test(val)) nivel++
    if (/[a-z]/.test(val)) nivel++
    if (/[0-9]/.test(val)) nivel++

    setSeguridad([0, 33, 66, 100][nivel])
  }

  const validarCoincidencia = (e) => {
    const val = e.target.value
    setConfirmPassword(val)
    setCoinciden(val === password)
  }

  const enviarFormulario = async () => {
    const datos = { nombre, apellidos_paternos, apellidos_maternos, edad, carrera, email, password }
    await fetch('http://localhost:3000/PerfilEstudiante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    })
  }

  const claseBarra = seguridad < 40 ? 'bg-danger' : seguridad < 100 ? 'bg-warning' : 'bg-success'

  return (
    <div className="fondo-registro">
      <div className="formulario-registro">
        <h2 className="titulo-registro">Registro de Estudiante</h2>
        <form>
          <label className="label-campo">
            Nombre
            <input type="text" className="input-formulario" value={nombre} onChange={e => setNombre(e.target.value)} />
          </label>
          <label className="label-campo">
            Apellidos Paternos
            <input type="text" className="input-formulario" value={apellidos_paternos} onChange={e => setApellidosPaternos(e.target.value)} />
          </label>
          <label className="label-campo">
            Apellidos Maternos
            <input type="text" className="input-formulario" value={apellidos_maternos} onChange={e => setApellidosMaternos(e.target.value)} />
          </label>
          <label className="label-campo">
            Edad
            <input type="number" className="input-formulario" min="18" max="26" value={edad} onChange={e => setEdad(Number(e.target.value))} />
          </label>
          <label className="label-campo">
            Carrera
            <input type="text" className="input-formulario" value={carrera} onChange={e => setCarrera(e.target.value)} />
          </label>
          <label className="label-campo">
            Correo electrónico
            <input type="email" className="input-formulario" value={email} onChange={e => setCorreo(e.target.value)} />
          </label>
          <label className="label-campo">
            Contraseña
            <input
              type="password"
              className="input-formulario"
              placeholder="Mínimo 8 caracteres, mayúsculas, minúsculas, números"
              onInput={evaluarSeguridad}
            />
            <div className="progress">
              <div className={`progress-bar ${claseBarra}`} role="progressbar" style={{ width: `${seguridad}%` }}></div>
            </div>
          </label>
          <label className="label-campo">
            Confirmar contraseña
            <input
              type="password"
              className="input-formulario"
              placeholder="Repite la contraseña"
              onInput={validarCoincidencia}
            />
            {!coinciden && (
              <div className="mensaje-error">Las contraseñas no coinciden</div>
            )}
          </label>
          <div className="contenedor-boton">
            <button type="button" onClick={enviarFormulario} className="btn btn-primary btn-sm">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registro

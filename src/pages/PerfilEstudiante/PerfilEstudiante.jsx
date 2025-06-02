import './perfil.css'

function PerfilEstudiante({ datosUsuario }) {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    universidad,
    curso,
    semestre,
    horarios,
    habilidades,
    competencias_tecnicas,
    experiencia,
    biografia,
    github
  } = datosUsuario

  const nombreCompleto = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`

  return (
    <div className="perfil-wrapper">
      <div className="perfil-banner">
        <div className="perfil-identidad">
          <div className="perfil-foto"></div>
          <h1 className="perfil-nombre">{nombreCompleto}</h1>
        </div>
        <div className="perfil-iconos">
          <i className="bi bi-gear"></i>
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>

      <div className="perfil-contenedor">
        <div className="perfil-datos">
          <div className="columna-academica">
            <h2>Información Académica</h2>
            <p><strong>Universidad:</strong> {universidad}</p>
            <p><strong>Curso:</strong> {curso}</p>
            <p><strong>Semestre:</strong> {semestre}</p>
            <p><strong>Horarios:</strong> {horarios}</p>
          </div>

          <div className="columna-laboral">
            <h2>Información Laboral</h2>

            <div className="bloque-laboral">
              <h4>Habilidades</h4>
              <p>{habilidades}</p>
            </div>

            <div className="bloque-laboral">
              <h4>Competencias Técnicas</h4>
              <p>{competencias_tecnicas}</p>
            </div>

            <div className="bloque-laboral">
              <h4>Experiencia</h4>
              <p>{experiencia}</p>
            </div>

            <div className="bloque-laboral">
              <h4>Biografía</h4>
              <p>{biografia}</p>
            </div>

            <div className="bloque-laboral">
              <h4>GitHub</h4>
              <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilEstudiante

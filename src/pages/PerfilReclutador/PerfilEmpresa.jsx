import { useState, useRef } from 'react'
import './perfil.css'

function PerfilEmpresa({ datosEmpresa }) {
  const {
    reclutador,
    nombre_empresa,
    rubro,
    ubicacion,
    descripcion,
    trabajos,
    reseñas
  } = datosEmpresa

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [texto, setTexto] = useState('')
  const [estrellas, setEstrellas] = useState(0)
  const [hover, setHover] = useState(0)
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length
  const carruselRef = useRef()

  const scrollCarrusel = (direccion) => {
    const pista = carruselRef.current
    const anchoTarjeta = pista.offsetWidth / 3
    pista.scrollLeft += direccion === 'right' ? anchoTarjeta : -anchoTarjeta
  }

  const enviarReseña = () => {
    fetch('/api/resenas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comentario: texto, calificacion: estrellas })
    })
      .then(() => {
        setTexto('')
        setEstrellas(0)
        setMostrarFormulario(false)
      })
  }

  return (

    
    <div className="perfil-wrapper">
      <div className="perfil-banner">
        <div className="perfil-identidad">
          <div className="perfil-foto"></div>
        
            <h1><strong></strong>{reclutador}</h1>
          <h1 className="perfil-nombre">{nombre_empresa}</h1>
        </div>
        <div className="perfil-iconos">
          <span className="barra-separador">|</span>
          
        </div>
      </div>

      <div className="perfil-contenedor">
        <div className="perfil-datos">
          <div className="columna-academica">
            <h2>Información de la Empresa</h2>
            <p><strong>Rubro:</strong> {rubro}</p>
            <p><strong>Ubicación:</strong> {ubicacion}</p>
            <p><strong>Descripción:</strong> {descripcion}</p>
          </div>

          <div className="columna-laboral">
            <h2>Trabajos Publicados</h2>
            <div className="carrusel-contenedor">
              <button className="carrusel-boton" onClick={() => scrollCarrusel('left')}>&lt;</button>
              <div className="carrusel-ventana" ref={carruselRef}>
                <div className="carrusel-pista">
                  {trabajos.map((t, index) => (
                    <div className="tarjeta-trabajo" key={index}>
                      <h4>{t.titulo}</h4>
                      <p>{t.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carrusel-boton" onClick={() => scrollCarrusel('right')}>&gt;</button>
            </div>

            <div className="bloque-laboral">
              <div className="reseñas-header">
                <h4>Reseñas y Calificaciones</h4>
                <button onClick={() => setMostrarFormulario(!mostrarFormulario)} className="btn-reseña">+ Añadir reseña</button>
              </div>

              {mostrarFormulario && (
                <div className="formulario-reseña">
                  <textarea
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                    maxLength={200}
                    placeholder="Escribe tu reseña..."
                  />
                  <div className="contador-palabras">{palabras}/200 palabras</div>

                  <div className="estrellas">
                    {[1, 2, 3, 4, 5].map(n => (
                      <span
                        key={n}
                        className={n <= (hover || estrellas) ? 'estrella llena' : 'estrella'}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setEstrellas(n)}
                      >★</span>
                    ))}
                  </div>

                  <button className="btn-enviar" onClick={enviarReseña}>Enviar</button>
                </div>
              )}

              {reseñas.map((r, index) => (
                <div className="item-resena" key={index}>
                  <p><strong>{r.usuario}</strong> — {r.comentario}</p>
                  <span className="calificacion">⭐ {r.calificacion}/5</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilEmpresa

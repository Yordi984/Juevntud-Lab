import './Empleos.css'

function Empleos() {
  return (
    <>
      <header className="header">
        <div className="logo">JuventudLab</div>
        <div className="search-bar">
          <input type="text" placeholder="Título del empleo, palabras clave o empresa" />
          <input type="text" placeholder="cancún, qroo." />
          <button>Buscar empleos</button>
        </div>
        <div>💬 🔔 👤</div>
      </header>

      <main className="job-section">
        <section className="job-list">
          <JobCard
            title="Jr Office Manager"
            company="Sarchentu"
            location="77500, Supermanzana 64, QRoo."
            salary="$16,000 a $20,000 por mes"
            details="Bilingüe (inglés avanzado/español avanzado) INDISPENSABLE. En nuestra empresa hemos creado un sólido equipo donde buscamos un crecimiento que nos ayude a..."
          />
          <JobCard
            title="Recepcionista Bilingüe"
            company="Grupo Hotelero"
            location="Cancún Centro"
            salary="$12,000 por mes"
            details="Experiencia en atención al cliente y manejo de reservaciones. Turno completo. Inglés indispensable."
          />
          <JobCard
            title="Ejecutivo de Ventas"
            company="Corporativo ABC"
            location="Cancún, Q.R."
            salary="$15,000 + comisiones"
            details="Habilidad para cerrar ventas y generar leads. Trabajo híbrido, herramientas tecnológicas proporcionadas."
          />
          <JobCard
            title="Cocinero"
            company="Hotel Xcaret"
            location="Zona Hotelera"
            salary="$14,000 mensual"
            details="Experiencia en cocina internacional y trabajo bajo presión. Turno rotativo, prestaciones superiores."
          />
        </section>

        <aside className="job-right">
          <h3>General Nurse</h3>
          <p><strong>Beond</strong><br />Cancún, QRoo.<br />Desde $18,000 por mes</p>
          <a href="#" className="apply-btn">Postularse ahora</a>
          <div className="profile-info">
            <h3>Información del perfil</h3>
            <div className="skills">
              <span>Servicio al cliente</span>
              <span>SOAP</span>
              <span>Microsoft Excel</span>
            </div>
          </div>
        </aside>
      </main>
    </>
  )
}

function JobCard({ title, company, location, salary, details }) {
  return (
    <div className="job-card">
      <div className="job-title">{title}</div>
      <div className="job-company">{company}</div>
      <div className="job-location">{location}</div>
      <div className="job-salary">{salary}</div>
      <div className="job-details">
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Empleos

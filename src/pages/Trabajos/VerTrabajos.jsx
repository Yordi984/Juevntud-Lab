import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    area: "",
    tipo: "",
    modalidad: "",
    search: "",
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/trabajos"); // Cambia si tu endpoint es otro
        if (!response.ok) {
          throw new Error("Error al obtener los trabajos");
        }
        const data = await response.json();

        // Aquí verificamos si empresa es array (como en tu backend) y ajustamos:
        const trabajosFormateados = data.map((job) => ({
          ...job,
          empresa:
            Array.isArray(job.empresa) && job.empresa.length > 0
              ? job.empresa[0]
              : { nombre: "Empresa no especificada" },
        }));

        setJobs(trabajosFormateados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.area === "" || job.area === filters.area) &&
      (filters.tipo === "" || job.tipo === filters.tipo) &&
      (filters.modalidad === "" || job.modalidad === filters.modalidad) &&
      (filters.search === "" ||
        job.titulo.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.descripcion.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.habilidades_requeridas
          .toLowerCase()
          .includes(filters.search.toLowerCase()))
    );
  });

  if (loading) return <div className="loading">Cargando trabajos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="jobs-page">
      <header className="jobs-header">
        <h1>Trabajos Disponibles</h1>
        <p>Encuentra oportunidades que se ajusten a tu perfil</p>
      </header>

      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Buscar por título, descripción o habilidades..."
            value={filters.search}
            onChange={handleFilterChange}
          />
          <button type="button">
            <i className="search-icon">🔍</i>
          </button>
        </div>

        <div className="filter-controls">
          <select
            name="area"
            value={filters.area}
            onChange={handleFilterChange}
          >
            <option value="">Todas las áreas</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Administración">Administración</option>
            <option value="Diseño">Diseño</option>
            <option value="Salud">Salud</option>
            <option value="Educación">Educación</option>
          </select>

          <select
            name="tipo"
            value={filters.tipo}
            onChange={handleFilterChange}
          >
            <option value="">Todos los tipos</option>
            <option value="Tiempo completo">Tiempo completo</option>
            <option value="Medio tiempo">Medio tiempo</option>
            <option value="Por horas">Por horas</option>
            <option value="Freelance">Freelance</option>
          </select>

          <select
            name="modalidad"
            value={filters.modalidad}
            onChange={handleFilterChange}
          >
            <option value="">Todas las modalidades</option>
            <option value="Presencial">Presencial</option>
            <option value="Remoto">Remoto</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>
      </div>

      <div className="jobs-list">
        {filteredJobs.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron trabajos con los filtros seleccionados.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h2>{job.titulo}</h2>
                <span className="company-name">{job.empresa.nombre}</span>
              </div>

              <div className="job-details">
                <div className="detail">
                  <span className="label">Área:</span>
                  <span className="value">{job.area}</span>
                </div>
                <div className="detail">
                  <span className="label">Tipo:</span>
                  <span className="value">{job.tipo}</span>
                </div>
                <div className="detail">
                  <span className="label">Modalidad:</span>
                  <span className="value">{job.modalidad}</span>
                </div>
                <div className="detail">
                  <span className="label">Sueldo:</span>
                  <span className="value">${job.sueldo.toLocaleString()}</span>
                </div>
              </div>

              <div className="job-description">
                <h3>Descripción</h3>
                <p>{job.descripcion}</p>
              </div>

              <div className="job-skills">
                <h3>Habilidades requeridas</h3>
                <div className="skills-list">
                  {job.habilidades_requeridas.split(",").map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="job-footer">
                <div className="dates">
                  <span>
                    Publicado:{" "}
                    {new Date(job.fecha_publicacion).toLocaleDateString()}
                  </span>
                  <span>
                    Vence: {new Date(job.fecha_limite).toLocaleDateString()}
                  </span>
                </div>
                <button className="apply-button">Postularme</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobsPage;

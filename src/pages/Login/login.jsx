import React, { useState } from "react";
import "./login.css";

const CrearEstudiante = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    universidad: "",
    carrera: "",
    semestre: "",
    intereses: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      intereses: formData.intereses.split(",").map((i) => i.trim()),
    };

    try {
      const response = await fetch("http://localhost:3000/estudiante", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Estudiante creado exitosamente");
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          universidad: "",
          carrera: "",
          semestre: "",
          intereses: "",
          password: "",
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || "No se pudo crear el estudiante"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error de red o del servidor");
    }
  };

  return (
    <div className="hero">
      <div className="form-card">
        <h2 className="form-title">Crear Estudiante</h2>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Apellidos
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Universidad
            <input
              type="text"
              name="universidad"
              value={formData.universidad}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Carrera
            <input
              type="text"
              name="carrera"
              value={formData.carrera}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Semestre
            <select
              name="semestre"
              value={formData.semestre}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona semestre
              </option>
              {[...Array(9).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </select>
          </label>

          <label>
            Intereses (separados por coma)
            <textarea
              name="intereses"
              value={formData.intereses}
              onChange={handleChange}
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-primary">
            Crear Estudiante
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearEstudiante;

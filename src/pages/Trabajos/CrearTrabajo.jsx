import React, { useState } from "react";
import axios from "axios";
import "./CrearTrabajo.css"; // Asegúrate de tener este archivo con estilos similares al login

const CrearTrabajo = () => {
  const [formData, setFormData] = useState({
    empresaId: "",
    titulo: "",
    descripcion: "",
    area: "",
    habilidades_requeridas: "",
    tipo: "",
    fecha_publicacion: "",
    fecha_limite: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const response = await axios.post(
        "http://localhost:3000/trabajos",
        formData
      );
      setMensaje("Trabajo creado exitosamente.");
      console.log("Trabajo creado:", response.data);
      setFormData({
        titulo: "",
        descripcion: "",
        area: "",
        habilidades_requeridas: "",
        tipo: "",
        fecha_publicacion: "",
        fecha_limite: "",
      });
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.message || "Error al crear trabajo.");
      } else {
        setMensaje("Error de conexión con el servidor.");
      }
    }
  };

  return (
    <div className="hero">
      <div className="form-card">
        <h2 className="form-title">Crear Oferta de Trabajo</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Área:
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Habilidades requeridas:
            <textarea
              name="habilidades_requeridas"
              value={formData.habilidades_requeridas}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Tipo de trabajo:
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Medio tiempo">Medio tiempo</option>
              <option value="Tiempo completo">Tiempo completo</option>
              <option value="Prácticas">Prácticas</option>
            </select>
          </label>
          <label>
            Fecha de publicación:
            <input
              type="date"
              name="fecha_publicacion"
              value={formData.fecha_publicacion}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fecha límite:
            <input
              type="date"
              name="fecha_limite"
              value={formData.fecha_limite}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn-primary">
            Crear Trabajo
          </button>
        </form>
        {mensaje && (
          <p style={{ marginTop: "16px", textAlign: "center", color: "#333" }}>
            {mensaje}
          </p>
        )}
      </div>
    </div>
  );
};

export default CrearTrabajo;

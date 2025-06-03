import React, { useState } from "react";
import "./CrearTrabajo.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/trabajos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Trabajo creado correctamente");
        setFormData({
          titulo: "",
          descripcion: "",
          area: "",
          habilidades_requeridas: "",
          tipo: "",
          fecha_publicacion: "",
          fecha_limite: "",
        });
      } else {
        alert(data.message || "Error al crear trabajo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de red");
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar Trabajo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título del trabajo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Área"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="habilidades_requeridas"
          placeholder="Habilidades requeridas"
          value={formData.habilidades_requeridas}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo de trabajo (ej. remoto/presencial)"
          value={formData.tipo}
          onChange={handleChange}
          required
        />
        <label>Fecha de publicación:</label>
        <input
          type="date"
          name="fecha_publicacion"
          value={formData.fecha_publicacion}
          onChange={handleChange}
          required
        />
        <label>Fecha límite:</label>
        <input
          type="date"
          name="fecha_limite"
          value={formData.fecha_limite}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear trabajo</button>
      </form>
    </div>
  );
};

export default CrearTrabajo;

import React, { useState } from "react";

export default function RegistroEmpresa() {
  const [form, setForm] = useState({
    nombre: "",
    rfc: "",
    sector: "",
    nombre_representante: "",
    cargo_representante: "",
    correo: "",
    telefono_empresa: "",
    password: "",
    acepta_terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí llamas a la API para crear la empresa con los datos del form
    console.log("Datos empresa:", form);
  };

  return (
    <>
      <style>{`
        .hero {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #0056b3, #4e8bf5);
          min-height: 100vh;
        }
        .form-card {
          background-color: #ffffff;
          padding: 32px 24px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          max-width: 420px;
          width: 100%;
        }
        .form-title {
          font-size: 28px;
          color: #0056b3;
          text-align: center;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .form label {
          display: block;
          margin-bottom: 8px;
          color: #333333;
          font-weight: 500;
          font-size: 14px;
        }
        .form input,
        .form select {
          width: 100%;
          padding: 10px 12px;
          margin-top: 4px;
          margin-bottom: 16px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }
        .form input:focus,
        .form select:focus {
          border-color: #0056b3;
        }
        .btn-primary {
          display: block;
          width: 100%;
          background-color: #1ea7fd;
          color: #ffffff;
          padding: 12px 0;
          margin-top: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
        .checkbox-container {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .checkbox-container input {
          margin-right: 8px;
        }
      `}</style>

      <div className="hero">
        <form className="form-card form" onSubmit={handleSubmit}>
          <h2 className="form-title">Registrar Empresa</h2>

          <label htmlFor="nombre">Nombre de la empresa</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <label htmlFor="rfc">RFC</label>
          <input
            id="rfc"
            name="rfc"
            type="text"
            maxLength={13}
            value={form.rfc}
            onChange={handleChange}
            required
          />

          <label htmlFor="sector">Sector</label>
          <input
            id="sector"
            name="sector"
            type="text"
            value={form.sector}
            onChange={handleChange}
            required
          />

          <label htmlFor="nombre_representante">Nombre del representante</label>
          <input
            id="nombre_representante"
            name="nombre_representante"
            type="text"
            value={form.nombre_representante}
            onChange={handleChange}
            required
          />

          <label htmlFor="cargo_representante">Cargo del representante</label>
          <input
            id="cargo_representante"
            name="cargo_representante"
            type="text"
            value={form.cargo_representante}
            onChange={handleChange}
            required
          />

          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={form.correo}
            onChange={handleChange}
            required
          />

          <label htmlFor="telefono_empresa">Teléfono</label>
          <input
            id="telefono_empresa"
            name="telefono_empresa"
            type="tel"
            maxLength={10}
            value={form.telefono_empresa}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="checkbox-container">
            <input
              id="acepta_terminos"
              name="acepta_terminos"
              type="checkbox"
              checked={form.acepta_terminos}
              onChange={handleChange}
              required
            />
            <label htmlFor="acepta_terminos">
              Acepto los términos y condiciones
            </label>
          </div>

          <button className="btn-primary" type="submit">
            Crear cuenta
          </button>
        </form>
      </div>
    </>
  );
}

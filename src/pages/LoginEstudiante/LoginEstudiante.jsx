import React, { useState } from "react";
import axios from "axios";
import "./LoginEstudiante.css"; // asegúrate de tener este archivo con los estilos que diste

const LoginEstudiante = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      setMensaje(response.data.mensaje);
      console.log("Estudiante:", response.data.estudiante);
      localStorage.setItem("token", response.data.token); // si usas JWT
      window.location.href = "/Demo"; // redirigir al dashboard o página principal
    } catch (error) {
      if (error.response) {
        setMensaje(error.response.data.mensaje);
      } else {
        setMensaje("Error de conexión con el servidor");
      }
    }
  };

  return (
    <div className="hero">
      <div className="form-card">
        <h2 className="form-title">Iniciar Sesión</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn-primary">
            Iniciar Sesión
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

export default LoginEstudiante;

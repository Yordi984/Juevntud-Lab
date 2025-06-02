import React from "react";

export default function TipoCuenta() {
  return (
    <>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #0056b3, #4e8bf5);
          color: white;
          font-family: Arial, sans-serif;
        }
        h1 {
          margin-bottom: 40px;
          font-size: 2.5rem;
          font-weight: 700;
        }
        .btn {
          background-color: #1ea7fd;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 12px;
          padding: 16px 40px;
          transition: background-color 0.3s;
          width: 200px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="container">
        <h1>¿Qué tipo de cuenta quieres crear?</h1>
        <a href="/CrearEstudiante" className="btn">
          Estudiante
        </a>
        <a href="CrearEmpresa" className="btn">
          Empresa
        </a>
      </div>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginEstudiante from "./pages/LoginEstudiante/LoginEstudiante";
import CrearTrabajos from "./pages/Trabajos/CrearTrabajo";
import Ver from "./pages/Trabajos/Ver";
import LoginEmpresa from "./pages/CrearEmpresa/CrearEmpresa";
import Elegir from "./pages/Elegir/Elegir";

import App from "./app";
import Login from "./pages/Login/login";
import Demo from "./pages/Demo/Dashboard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Elegir" element={<Elegir />} />

      <Route path="/CrearEstudiante" element={<Login />} />
      <Route path="/LoginEstudiante" element={<LoginEstudiante />} />

      <Route path="/Demo" element={<Demo />} />
<<<<<<< HEAD

      <Route path="/CrearTrabajos" element={<CrearTrabajos />} />
      <Route path="CrearEmpresa" element={<LoginEmpresa />} />

      <Route path="/Trabajos/Ver" element={<Ver />} />
=======
      <Route path="/PerfilReclutador" element={<PerfilReclutador />} />
      <Route path="/PerfilEstudiante" element={<PerfilEstudiante />} />
      <Route path="/Registro" element={<Registro />} />
>>>>>>> 849cd1fc6ec5a84fe03fe4aaad88c5b69b6c698c
    </Routes>
  </BrowserRouter>
);

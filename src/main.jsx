import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./app";
import Login from "./pages/Login/login";
import Demo from "./pages/Demo/Dashboard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Demo" element={<Demo />} />
      <Route path="/PerfilReclutador" element={<PerfilReclutador />} />
      <Route path="/PerfilEstudiante" element={<PerfilEstudiante />} />
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  </BrowserRouter>
);

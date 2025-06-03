import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login/login";
import Demo from "./pages/Demo/Dashboard";
import PerfilEstudiante from "./pages/PerfilEstudiante";
import PerfilReclutador from "./pages/PerfilReclutador";
import Registro from "./pages/Registro";

import Home from "./pages/Home/Home";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render( 
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Demo" element={<Demo />} />
      <Route path="/" element={<Home />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/PerfilEstudiante" element={<PerfilEstudiante />} />
      <Route path="/PerfilReclutador" element={<PerfilReclutador />} />
    </Routes>
  </BrowserRouter>
);

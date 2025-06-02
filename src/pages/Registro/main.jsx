<<<<<<< HEAD
import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRegistro from './AppRegistro.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './registro.css'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <AppRegistro />
    </React.StrictMode>
  )
}
=======

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./app";
import Login from "../src/pages/Dashboard/Dashboard";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
>>>>>>> a89f384d719912cc3cd14d93b961f40005b82f1e

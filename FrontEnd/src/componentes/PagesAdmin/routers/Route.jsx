import React from 'react';
import { Routes, Route } from "react-router-dom";
import { PersonalAdmin } from "../PersonalAdmin";
import Citas from '../CitasAdmin';
import { ServiciosAdmin } from "../ServiciosAdmin";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Panel de Administración</div>} />
      <Route path="personal" element={<PersonalAdmin />} />
      <Route path="citas" element={<Citas />} />
      <Route path="servicios" element={<ServiciosAdmin />} />
    </Routes>
  );
}
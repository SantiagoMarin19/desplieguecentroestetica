import { Routes, Route } from "react-router-dom";

import { PersonalAdmin } from "../PersonalAdmin";
import Citas from '../CitasAdmin';
import { ServiciosAdmin } from "../ServiciosAdmin";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="PersonalAdmin" element={<PersonalAdmin />} />
      <Route path="AdminCitas" element={<Citas />} />
      <Route path="ServiciosAdmin" element={<ServiciosAdmin />} />
    </Routes>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

import  CitasProfesional from '../Citaspersonal';
import { ServiciosProfesional } from "../ServicioPersonal";

export function MyRoutesPersonal() {
  return (
   
      <Routes>
        <Route path="/personal/citas" element={< CitasProfesional/>}/>
        <Route path="/personal/servicios" element={<ServiciosProfesional/>}/>
      </Routes>
    
  );
}
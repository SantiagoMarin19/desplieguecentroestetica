import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Citas from '../CitasAdmin';
import { ServiciosAdmin } from "../ServiciosAdmin";

export function MyRoutesPersonal() {
  return (
   
      <Routes>
        <Route path="/AdminCitas" element={< Citas/>}/>
        <Route path="/ServiciosAdmin" element={<ServiciosAdmin/>}/>
      </Routes>
    
  );
}
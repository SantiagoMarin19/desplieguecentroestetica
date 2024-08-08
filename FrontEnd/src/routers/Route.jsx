import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioAdmin } from "../pages/InicioS";
import { PersonalAdmin } from "../pages/PersonalAdmin";
import { CitasAdmin} from "../pages/CitasAdmin";
import { DiagramasAdmin } from "../pages/DiagramasAdmin";
import { ServiciosAdmin } from "../pages/ServiciosAdmin";

export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/HomeAdmin" element={<InicioAdmin />} />
        <Route path="/DiagramasAdmin" element={<DiagramasAdmin />} />
        <Route path="/CitasAdmin" element={<CitasAdmin />} />
        <Route path="/PersonalAdmin" element={<PersonalAdmin />} />
        <Route path="/ServiciosAdmin" element={<ServiciosAdmin/>}/>
      </Routes>
    
  );
}
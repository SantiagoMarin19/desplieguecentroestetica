import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/InicioS";
import { Reportes } from "../pages/Personal";
import {Citas} from "../pages/Citas";

export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/diagramas" element={<Diagramas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    
  );
}
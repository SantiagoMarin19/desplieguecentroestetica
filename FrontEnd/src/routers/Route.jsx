import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/InicioS";
import { Personal } from "../pages/Personal";
import { Citas} from "../pages/Citas";
import { Diagramas } from "../pages/Diagramas";
import { ServiciosC } from "../pages/ServiciosC";

export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diagramas" element={<Diagramas />} />
        <Route path="/Citas" element={<Citas />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Servicios" element={<ServiciosC/>}/>
      </Routes>
    
  );
}
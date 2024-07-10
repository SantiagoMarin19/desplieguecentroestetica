import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InicioSesion } from './componentes/InicioSesion/InicioSesion';
import {Piedepagina} from './componentes/Footer/footer';
import { ServicioPestañas} from "./pages/ServicioP";
import {ServicioCjas} from "./pages/ServicioC"
import { ServicioMcion } from "./pages/ServicioM";
import { Condiciones } from "./pages/Terminos";
import { ComboHeyLifting } from "./pages/ComboCejas1";
import { Combodepylif } from "./pages/comboDyL";
import {Combolamyexon} from "./pages/ComboLayExp"





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/inicio" element={<InicioSesion />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/ServicioCejas' element={<ServicioCjas/>}/>
      <Route path='/ServicioPestañas' element={<ServicioPestañas/>}/>
      <Route path='/ServicioMicropigmentacion' element={<ServicioMcion/>}/>
      <Route path='/ComboHennayLifting' element={<ComboHeyLifting/>}/>
      <Route path='/ComboDiseñoyLifting' element={<Combodepylif/>}/>
      <Route path='/ComboLaminacionyExtension' element={<Combolamyexon/>}/>
      
      
 

    </Routes>
  </Router>
  );

}

export default App;
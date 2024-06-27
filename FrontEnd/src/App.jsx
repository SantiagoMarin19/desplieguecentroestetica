import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InicioSesion } from './componentes/InicioSesion/InicioSesion';
import {Piedepagina} from './componentes/Footer/footer';
import {  Pestañas} from "./componentes/Servicio_detalle/serviciopestañas";
import {Cejas} from "./componentes/Servicio_detalle/Serviciocejas"
import { Micropigmentacion } from "./componentes/Servicio_detalle/serviciomicropigmentacion";
import { Condiciones } from "./pages/Terminos";
import { ComboSyLifting } from "./componentes/Servicio_detalle/Combosombreadio+lifting";





function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/inicio" element={<InicioSesion />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/ServicioCjas' element={<Cejas/>}/>
      <Route path='/ServicioPestañas' element={<Pestañas/>}/>
      <Route path='/ServicioMcion' element={<Micropigmentacion/>}/>
      <Route path='/ComboCejas1' element={<ComboSyLifting/>}/>
      
      
 

    </Routes>
  </Router>
  );

}

export default App;
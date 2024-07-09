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
import {Acceder} from './pages/Acceder';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck"
import { Recuperar } from "./pages/Recuperar"
import { Recuperar2 } from "./pages/Recuperar2"
import { Recuperar3 } from "./pages/Recuperar3"
import { Recuperar4 } from "./pages/Recuperar4"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/inicio" element={<InicioSesion />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/Politicas' element={<Condiciones />} />
      <Route path='/Ingresar' element={<Acceder/>}/>
      <Route path='/registro' element={<Registro/>}/>
      <Route path='/register' element={<RegistroCheck/>}/>
      <Route path='/Recover' element={<Recuperar/>}/>
      <Route path='/Recover2' element={<Recuperar2/>}/>
      <Route path='/Recover3' element={<Recuperar3/>}/>
      <Route path='/Recover4' element={<Recuperar4/>}/>

    </Routes>
  </Router>
  );

}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { InicioSesion } from './componentes/InicioSesion/InicioSesion';
import {Acceder} from './pages/Acceder';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck"
import { Recuperar } from "./pages/Recuperar"
import { Recuperar2 } from "./pages/Recuperar2"
import { Recuperar3 } from "./pages/Recuperar3"
import { AppDataBase } from "./supabase/appdatabase"
import {Piedepagina} from './componentes/Footer/footer';
import {  Pestañas} from "./componentes/Servicio_detalle/serviciopestañas";
import {Cejas} from "./componentes/Servicio_detalle/Serviciocejas"
import { Micropigmentacion } from "./componentes/Servicio_detalle/serviciomicro";
import { Condiciones } from "./pages/Terminos";
import { ComboSyLifting } from "./componentes/Servicio_detalle/Combosombreadio+lifting";
import { Recuperar4 } from "./pages/Recuperar4"
import LoginUser from './pages/Login';
import SignUp from './pages/SignUp';

function App() {   
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} />
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
      <Route path='/ServicioCjas' element={<Cejas/>}/>
      <Route path='/ServicioPestañas' element={<Pestañas/>}/>
      <Route path='/ServicioMcion' element={<Micropigmentacion/>}/>
      <Route path='/ComboCejas1' element={<ComboSyLifting/>}/>
      <Route path='/Recover4' element={<Recuperar4/>}/>
      <Route path='/DB' element={<AppDataBase/>}/> */}


      <Route path='/loginsupa' element={<LoginUser/>}/>

      <Route path='/Registrar' element={<SignUp/>}/>


      

    </Routes>
  </Router>
  );

}

export default App;
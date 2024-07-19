
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { InicioSesion } from './componentes/InicioSesion/InicioSesion';
import { Acceder } from './pages/Acceder';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck"
import { Recuperar } from "./pages/Recuperar"
import { Recuperar2 } from "./pages/Recuperar2"
import { Recuperar3 } from "./pages/Recuperar3"
import { Piedepagina } from './componentes/Footer/footer';
import { Pestañas } from "./componentes/Servicio_detalle/serviciopestañas";
import { Cejas } from "./componentes/Servicio_detalle/Serviciocejas"
import { Micropigmentacion } from "./componentes/Servicio_detalle/serviciomicro";
import { Condiciones } from "./pages/Terminos";
import { ComboSyLifting } from "./componentes/Servicio_detalle/Combosombreadio+lifting";
import { Recuperar4 } from "./pages/Recuperar4"
import { Agendar } from "./pages/Agendar"

import SignUp from './pages/SignUp';
import LoginUser from './pages/Login';


function App() {
  const [token, setToken] = useState(false)

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }

  }, [])


  
  import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';

  function Main() {
    const { setLoading } = useLoading();
    const location = useLocation();

    useEffect(() => {
      setLoading(true);
    }, [location, setLoading]);

    return (
      <>
        <Pageloader />
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path={'/loginsupa'} element={<LoginUser setToken={setToken} />} />
          <Route path='/Registrar' element={<SignUp />} />


          <Route path="/servicios" element={<Servicios />} />
          <Route path="/inicio" element={<InicioSesion />} />
          <Route path="/politicas" element={<Condiciones />} />
          <Route path="/serviciocejas" element={<ServicioCjas />} />
          <Route path="/serviciopestañas" element={<ServicioPestañas />} />
          <Route path="/serviciomicropigmentacion" element={<ServicioMcion />} />
          <Route path="/combohennaylifting" element={<ComboHeyLifting />} />
          <Route path="/combosombreadoylifting" element={<ComboSombrayLifiting />} />
          <Route path="/combolaminacionyextension" element={<Combolamiyextension />} />
          <Route path="/combolaminacionylifting" element={<Combolaminylif />} />
          <Route path="/inicio" element={<InicioSesion />} />
          <Route path='/Ingresar' element={<Acceder />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/register' element={<RegistroCheck />} />
          <Route path='/Recover' element={<Recuperar />} />
          <Route path='/Recover2' element={<Recuperar2 />} />
          <Route path='/Recover3' element={<Recuperar3 />} />
          <Route path='/Recover4' element={<Recuperar4 />} />
          <Route path='/Agendarcita' element={<Agendar />} />
        </Routes>
      </>
    );
  }

  function App() {
    return (
      <LoadingProvider>
        <Router>
          <Main />
        </Router>
      </LoadingProvider>
    );
  }

  export default App;

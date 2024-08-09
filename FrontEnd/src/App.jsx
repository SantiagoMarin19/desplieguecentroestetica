import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Acceder } from './pages/Acceder';
import {Servicios} from './pages/Servicios';

import { Condiciones } from "./pages/Terminos";
import { ComboHeyLifting } from "./pages/ComboC-Henna+Lifing";
import { ComboSombrayLifiting } from "./pages/comboC-Sombreado+Lifitng";
import { Combolamiyextension } from "./pages/ComboP-Lamc+Extension";
import { Combolaminylif } from "./pages/ComboP-Lamc+Lifting";
import { Pageloader } from './componentes/Animación/Carga';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck"
import { Recuperar } from "./pages/Recuperar"
import { Recuperar2 } from "./pages/Recuperar2"
import { Recuperar3 } from "./pages/Recuperar3"
import { Recuperar4 } from "./pages/Recuperar4"
import { Agendar } from "./pages/Agendar"
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import SignUp from './pages/SignUp';
import LoginUser from './pages/Login';
import Facturaelectronica from './pages/FacturaElectronica'
import { VistaDetalle } from './componentes/VistaDetalladaServ/VistaDetalleSer';
import { VistaServicios } from './pages/VistaServicios';
import Agendamiento from './componentes/Agendamiento/Agendamiento';
import CitaPend from './pages/CitasPendientes';

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
          <Route path="/VistaDetalle" element={<VistaServicios />} />
          <Route path="/CitaPend" element={<CitaPend />} />


          

          <Route path="/politicas" element={<Condiciones />} />
          <Route path="/combohennaylifting" element={<ComboHeyLifting />} />
          <Route path="/combosombreadoylifting" element={<ComboSombrayLifiting />} />
          <Route path="/combolaminacionyextension" element={<Combolamiyextension />} />
          <Route path="/combolaminacionylifting" element={<Combolaminylif />} />
          <Route path='/Ingresar' element={<Acceder />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/register' element={<RegistroCheck />} />
          <Route path='/Recover' element={<Recuperar />} />
          <Route path='/Recover2' element={<Recuperar2 />} />
          <Route path='/Recover3' element={<Recuperar3 />} />
          <Route path='/Recover4' element={<Recuperar4 />} />
          <Route path='/Agendarcita' element={<Agendar />} />
          <Route path='/Facturacion' element={<Facturaelectronica/>}/>

          
        </Routes>
      </>
    );
  }

    return (
      <LoadingProvider>
        <Router>
          <Main />
        </Router>
      </LoadingProvider>
    );
}

  export default App;

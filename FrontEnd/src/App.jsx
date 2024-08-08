import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import { Pageloader } from './componentes/Animación/Carga';

// Importar las páginas
import Home from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Acceder } from './pages/Acceder';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck";
import { Recuperar } from "./pages/Recuperar";
import { Recuperar2 } from "./pages/Recuperar2";
import { Recuperar3 } from "./pages/Recuperar3";
import { Recuperar4 } from "./pages/Recuperar4";
import { Agendar } from "./pages/Agendar";
import { ComboHeyLifting } from "./pages/ComboC-Henna+Lifing";
import { ComboSombrayLifiting } from "./pages/comboC-Sombreado+Lifitng";
import { Combolamiyextension } from "./pages/ComboP-Lamc+Extension";
import { Combolaminylif } from "./pages/ComboP-Lamc+Lifting";
import { Condiciones } from "./pages/Terminos";
import Facturaelectronica from './pages/FacturaElectronica';
import { VistaServicios } from './pages/VistaServicios';
import SignUp from './pages/SignUp';
import LoginUser from './pages/Login';
import { VistaDetalle } from './componentes/VistaDetalladaServ/VistaDetalleSer';

function Main() {
  const { setLoading } = useLoading();
  const location = useLocation();
  const [token, setToken] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [location, setLoading]);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <>
      <Pageloader />
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/loginsupa" element={<LoginUser setToken={setToken} />} />
        <Route path="/Registrar" element={<SignUp />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/VistaDetalle" element={<VistaServicios />} />
        <Route path="/politicas" element={<Condiciones />} />
        <Route path="/combohennaylifting" element={<ComboHeyLifting />} />
        <Route path="/combosombreadoylifting" element={<ComboSombrayLifiting />} />
        <Route path="/combolaminacionyextension" element={<Combolamiyextension />} />
        <Route path="/combolaminacionylifting" element={<Combolaminylif />} />
        <Route path="/Ingresar" element={<Acceder />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/register" element={<RegistroCheck />} />
        <Route path="/Recover" element={<Recuperar />} />
        <Route path="/Recover2" element={<Recuperar2 />} />
        <Route path="/Recover3" element={<Recuperar3 />} />
        <Route path="/Recover4" element={<Recuperar4 />} />
        <Route path="/Agendarcita" element={<Agendar />} />
        <Route path="/Facturacion" element={<Facturaelectronica />} />
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

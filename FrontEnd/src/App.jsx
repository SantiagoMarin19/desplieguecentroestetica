import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Acceder } from './pages/Acceder';
import { Servicios } from './pages/Servicios';
import { Acerca_de } from './pages/Acerca_de';
import { Condiciones } from "./pages/Terminos";
import { ComboHeyLifting } from "./pages/ComboC-Henna+Lifing";
import { ComboSombrayLifiting } from "./pages/comboC-Sombreado+Lifitng";
import { Combolamiyextension } from "./pages/ComboP-Lamc+Extension";
import { Combolaminylif } from "./pages/ComboP-Lamc+Lifting";
import { Pageloader } from './componentes/Animación/Carga';
import { Registro } from "./pages/Registro";
import { RegistroCheck } from "./pages/RegistroCheck";
import { Recuperar } from "./pages/Recuperar";
import { Recuperar3 } from "./pages/Recuperar3";
import { Recuperar4 } from "./pages/Recuperar4";
import { Agendar } from "./pages/Agendar";
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import SignUp from './pages/SignUp';
import LoginUser from './pages/Login';
import Facturaelectronica from './pages/FacturaElectronica';
import { VistaDetalle } from './componentes/VistaDetalladaServ/VistaDetalleSer';
import { VistaServicios } from './pages/VistaServicios';
import Agendamiento from './componentes/Agendamiento/Agendamiento';
import CitaPend from './pages/CitasPendientes';
import CitasPendientes from './componentes/CitasPendientes/CitasPendientes';
import { ModalProvider } from './componentes/modal/ContextModal';
import AppModal from './componentes/modal/Modalinicio';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  function Main() {
    const { setLoading } = useLoading();
    const location = useLocation();

    useEffect(() => {
      setLoading(true);
    }, [location, setLoading]);

    return (
      <>
        <Pageloader />
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home token={token} />} />
            <Route path='/Facturacion' element={<Facturaelectronica token={token} />} />
            <Route path="/loginsupa" element={<LoginUser setToken={setToken} />} />
            <Route path='/Registrar' element={<SignUp />} />
            <Route path="/servicios" element={<Servicios token={token} />} />
            <Route path="/VistaDetalle" element={<VistaServicios token={token} />} />
            <Route path="/CitaPend" element={<CitaPend />} />
            <Route path="/acerca" element={<Acerca_de token={token} />} />
            <Route path="/politicas" element={<Condiciones token={token} />} />
            <Route path="/Agendarcita" element={<Agendar token={token} />} />
            <Route path='/Facturacion' element={<Facturaelectronica token={token} />} />
          </Routes>
          <AppModal> </AppModal>
        </ModalProvider>
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

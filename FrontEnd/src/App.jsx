import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { InicioSesion } from './componentes/InicioSesion/InicioSesion';
import { Piedepagina } from './componentes/Footer/footer';
import { ServicioPestañas } from "./pages/ServicioP";
import { ServicioCjas } from "./pages/ServicioC";
import { ServicioMcion } from "./pages/ServicioM";
import { Condiciones } from "./pages/Terminos";
import { ComboHeyLifting } from "./pages/ComboC-Henna+Lifing";
import { ComboSombrayLifiting } from "./pages/comboC-Sombreado+Lifitng";
import { Combolamiyextension } from "./pages/ComboP-Lamc+Extension";
import { Combolaminylif } from "./pages/ComboP-Lamc+Lifting";
import { Pageloader } from './componentes/Animación/Carga';
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
                <Route path="/" element={<Home />} />
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

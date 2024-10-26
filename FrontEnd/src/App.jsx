import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Servicios } from './pages/Servicios';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { Pageloader } from './componentes/Animación/Carga';
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import styled, { ThemeProvider } from "styled-components";
import { Sidebar } from "./componentes/Sidebar/Sidebar";
import { MyRoutes } from "./componentes/PagesAdmin/routers/Route";
import { Light, Dark } from "./Styles/Themes";
import { ModalProvider } from './componentes/modal/ContextModal';
import { toast, ToastContainer } from 'react-toastify';
import TestPrint from "./pages/Prueba";
import 'react-toastify/dist/ReactToastify.css';

// Importaciones de componentes
import SignUp from './pages/SignUp';
import LoginUser from './pages/Login';
import { CitaAdmin } from "./componentes/Dahsboard/Citas";
import Facturaelectronica from './pages/FacturaElectronica';
import Acerca_de from './pages/Acerca_de';
import { Condiciones } from "./pages/Terminos";
import { Agendar } from "./pages/Agendar";
import CitaPend from './pages/CitasPendientes';
import Abono from './pages/Abonos';
import Modalinicio from './componentes/modal/Modalinicio';
import ModalRegistro from './componentes/modal/ModalRegistro';
import { Piedepagina } from './componentes/Footer/footer';

import { PersonalAdmin } from '../src/componentes/PagesAdmin/PersonalAdmin';
import Citas from '../src/componentes/PagesAdmin/CitasAdmin';
import { ServiciosAdmin } from "../src/componentes/PagesAdmin/ServiciosAdmin";
import AdministradorComponente from './pages/Administrador';

// Contexto de tema
export const ThemeContext = React.createContext(null);

// Componente para proteger rutas de admin
const AdminRoute = ({ children }) => {
    const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));

    if (!isAdmin) {
        toast.error('Acceso denegado: No tienes permisos de administrador');
        return <Navigate to="/" replace />;
    }

    return children;
};

function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Container className={sidebarOpen ? "sidebarState active" : ""}>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            {children}
        </Container>
    );
}

function Main() {
    const { setLoading } = useLoading();
    const location = useLocation();
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? Light : Dark;

    useEffect(() => {
        setLoading(true);
    }, [location, setLoading]);

    return (
        <>
            <Pageloader />
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <Routes>
                        {/* Rutas públicas */}
                        <Route path="/" element={<Home />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/acerca" element={<Acerca_de />} />
                        <Route path="/testeo" element={<TestPrint />} />
                        <Route path="/politicas" element={<Condiciones />} />
                        <Route path="/Facturacion" element={<Facturaelectronica />} />
                        <Route path="/loginsupa" element={<LoginUser />} />
                        <Route path="/registro" element={<SignUp />} />
                        <Route path="/Admini" element={<AdministradorComponente />} />
                        <Route path='/Dahsboard' element={<Sidebar />} />
                        <Route path='/CITA' element={<CitaAdmin />} />
                        <Route path="/PersonalAdmin" element={<PersonalAdmin />} />
                        <Route path="/AdminCitas" element={< Citas />} />
                        <Route path="/ServiciosAdmin" element={<ServiciosAdmin />} />


                        {/* Rutas que requieren autenticación */}
                        <Route path="/CitaPend" element={
                            sessionStorage.getItem('token') ? <CitaPend /> : <Navigate to="/CitaPend" />
                        } />
                        <Route path="/Agendarcita" element={
                            sessionStorage.getItem('token') ? <Agendar /> : <Navigate to="/Agendarcita" />
                        } />
                        <Route path="/abono-info" element={
                            sessionStorage.getItem('token') ? <Abono /> : <Navigate to="/abono-info" />
                        } />

                        {/* Rutas de administrador */}
                        <Route path="/admin/*" element={
                            <AdminRoute>
                                <AdminLayout>
                                    <MyRoutes />
                                </AdminLayout>
                            </AdminRoute>
                        } />
                    </Routes>
                </ThemeProvider>
            </ThemeContext.Provider>
            <Modalinicio />
            <ModalRegistro />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}


function App() {
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        const storedUser = sessionStorage.getItem('user');
        const isAdmin = JSON.parse(sessionStorage.getItem('isAdmin')) || false;
        const welcomeShown = sessionStorage.getItem('welcomeShown');

        if (storedToken && storedUser) {
            setToken(JSON.parse(storedToken));
            setUserName(JSON.parse(storedUser));

            if (!welcomeShown) {
                toast.success(`Bienvenido de nuevo, ${JSON.parse(storedUser)}${isAdmin ? ' (Administrador)' : ''}`);
                sessionStorage.setItem('welcomeShown', 'true');
            }
        }
    }, []);

    return (
        <LoadingProvider>
            <Router>
                <ModalProvider>
                    <Main />
                </ModalProvider>
            </Router>
        </LoadingProvider>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.3s;
    &.active {grid-template-columns: 300px auto;}
    color: ${({ theme }) => theme.text};
`;

export default App;

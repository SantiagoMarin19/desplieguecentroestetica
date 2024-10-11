import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components";
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import { ModalProvider } from './componentes/modal/ContextModal';
import { Light, Dark } from "./Styles/Themes";
import { toast, ToastContainer } from 'react-toastify';
import TestPrint  from "./pages/Prueba";
import 'react-toastify/dist/ReactToastify.css';

export const ThemeContext = React.createContext(null);

// Importaciones de componentes (mantener las existentes)
import Home from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Acerca_de } from './pages/Acerca_de';
import { Condiciones } from "./pages/Terminos";
import { Pageloader } from './componentes/Animación/Carga';
import { Agendar } from "./pages/Agendar";
import Modalinicio from './componentes/modal/Modalinicio';
import ModalRegistro from './componentes/modal/ModalRegistro';
import Facturaelectronica from './pages/FacturaElectronica';
import { VistaServicios } from './pages/VistaServicios';
import CitaPend from './pages/CitasPendientes';
import { Sidebar } from "./componentes/Sidebar/Sidebar";
import { MyRoutes } from "./componentes/PagesAdmin/routers/Route";
import LoginUser from './pages/Login';
import SignUp from './pages/SignUp';
import AbonoInfo from './componentes/AbonoInfo/AbonoInfo';
import Abono from './pages/Abonos';
import RecoverPassword from './componentes/Recuperarcontraseña/Recuperarcontraseña';
import { Piedepagina } from './componentes/Footer/footer';

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
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const isAdminUser = JSON.parse(sessionStorage.getItem('isAdmin')) || false;
        setIsAdmin(isAdminUser);
    }, [location, setLoading]);

    return (
        <>
            <Pageloader />
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <Routes>
                        {/* Rutas públicas */}
                        <Route path="/" element={<Home />} />
                        <Route path='/Facturacion' element={<Facturaelectronica />} />
                        <Route path='/Registrar' element={<button onClick={() => openModal('SignUp')}>Regístrate</button>} />
                        <Route path="/loginsupa" element={<button onClick={() => openModal('LoginUser')}>Inicia Sesión</button>} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/VistaDetalle" element={<VistaServicios />} />
                        <Route path="/RecuperarContraseña" element={<RecoverPassword />} />
                        <Route path="/acerca" element={<Acerca_de />} />
                        <Route path="/testeo" element={<TestPrint/>}/>
                        <Route path="/politicas" element={<Condiciones />} />

                        {/* Rutas que requieren autenticación */}
                        <Route path="/CitaPend" element={
                            sessionStorage.getItem('token') ? <CitaPend /> : <Navigate to="/" />
                        } />
                        <Route path="/Agendarcita" element={
                            sessionStorage.getItem('token') ? <Agendar /> : <Navigate to="/" />
                        } />
                        <Route path="/abono-info" element={
                            sessionStorage.getItem('token') ? <Abono /> : <Navigate to="/" />
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
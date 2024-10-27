// App.jsx
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from 'styled-components';
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import { ModalProvider } from './componentes/modal/ContextModal';
import { Light, Dark } from './Styles/Themes';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Creación del contexto
export const ThemeContext = createContext();

// Importación de componentes y páginas
import Home from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Acerca_de } from './pages/Acerca_de';
import { Condiciones } from './pages/Terminos';
import { Pageloader } from './componentes/Animación/Carga';
import { Agendar } from './pages/Agendar';
import Modalinicio from './componentes/modal/Modalinicio';
import ModalRegistro from './componentes/modal/ModalRegistro';
import Facturaelectronica from './pages/FacturaElectronica';
import { VistaServicios } from './pages/VistaServicios';
import CitaPend from './pages/CitasPendientes';
import { Sidebar } from './componentes/Sidebar/Sidebar';
import { PersonalAdmin } from './componentes/PagesAdmin/PersonalAdmin';
import CitasAdmin from './componentes/PagesAdmin/CitasAdmin';
import { ServiciosAdmin } from './componentes/PagesAdmin/ServiciosAdmin';
import LoginUser from './pages/Login';
import SignUp from './pages/SignUp';
import AbonoInfo from './componentes/AbonoInfo/AbonoInfo';
import Abono from './pages/Abonos';
import { Piedepagina } from './componentes/Footer/footer';

function Main() {
    const { setLoading } = useLoading();
    const location = useLocation();
    const [theme, setTheme] = useState('light');
    const themeStyle = theme === 'light' ? Light : Dark;

    // Identificar si la ruta es de administración
    const isAdminRoute = ['/PersonalAdmin', '/CitasAdmin', '/ServiciosAdmin'].includes(location.pathname);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [location, setLoading]);

    return (
        <>
            <Pageloader />
            <ThemeProvider theme={themeStyle}>
                <StyledContainer isAdmin={isAdminRoute}>
                    {isAdminRoute && <Sidebar />} {/* Sidebar solo en rutas admin */}
                    <Content>
                        <Routes>
                            {/* Rutas generales */}
                            <Route path="/" element={<Home />} />
                            <Route path="/Facturacion" element={<Facturaelectronica />} />
                            <Route path="/servicios" element={<Servicios />} />
                            <Route path="/VistaDetalle" element={<VistaServicios />} />
                            <Route path="/Registrar" element={<button onClick={() => openModal('SignUp')}>Regístrate</button>} />
                            <Route path="/loginsupa" element={<button onClick={() => openModal('LoginUser')}>Inicia Sesión</button>} />

                            {/* Rutas administrativas */}
                            <Route path="/PersonalAdmin" element={<PersonalAdmin />} />
                            <Route path="/CitasAdmin" element={<CitasAdmin />} />
                            <Route path="/ServiciosAdmin" element={<ServiciosAdmin />} />

                            {/* Rutas adicionales */}
                            <Route path="/acerca" element={<Acerca_de />} />
                            <Route path="/politicas" element={<Condiciones />} />

                            {/* Rutas protegidas con autenticación */}
                            <Route path="/CitaPend" element={
                                sessionStorage.getItem('token') ? <CitaPend /> : <Navigate to="/" />
                            } />
                            <Route path="/Agendarcita" element={
                                sessionStorage.getItem('token') ? <Agendar /> : <Navigate to="/" />
                            } />
                            <Route path="/abono-info" element={
                                sessionStorage.getItem('token') ? <Abono /> : <Navigate to="/" />
                            } />
                        </Routes>
                    </Content>
                </StyledContainer>
            </ThemeProvider>
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
    const [theme, setTheme] = useState('light');
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
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <LoadingProvider>
                <Router>
                    <ModalProvider>
                        <Main />
                    </ModalProvider>
                </Router>
            </LoadingProvider>
        </ThemeContext.Provider>
    );
}

// Estilos con Styled Components
const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ isAdmin }) => (isAdmin ? '250px 1fr' : '1fr')};
    min-height: 100vh;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.3s;
    color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
    padding: 20px;
`;

export default App;

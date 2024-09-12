import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components";
import { LoadingProvider, useLoading } from './componentes/Animación/Loadingcontext';
import { ModalProvider, useModal } from './componentes/modal/ContextModal';
import { Light, Dark } from "./Styles/Themes";
export const ThemeContext = React.createContext(null);

// Importa todos los componentes necesarios aquí
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
import VistaProfesional from './pages/Personal'

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
    const { openModal } = useModal();
    const location = useLocation();
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? Light : Dark;
    const [isAdmin, setIsAdmin] = useState(false); // Determina si el usuario es admin

    useEffect(() => {
        setLoading(true);
        // Aquí puedes agregar lógica para determinar si el usuario es admin
        // Por ejemplo, basado en el token o en algún estado global
    }, [location, setLoading]);

    return (
        <>
            <Pageloader />
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <Routes>
                        {/* Rutas de cliente */}
                        <Route path="/" element={<Home />} />
                        <Route path='/Facturacion' element={<Facturaelectronica />} />
                        <Route path='/Registrar' element={<button onClick={() => openModal('SignUp')}>Regístrate</button>} />
                        <Route path="/loginsupa" element={<button onClick={() => openModal('LoginUser')}>Inicia Sesión</button>} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/VistaDetalle" element={<VistaServicios />} />
                        <Route path="/CitaPend" element={<CitaPend />} />
                        <Route path="/acerca" element={<Acerca_de />} />
                        <Route path="/politicas" element={<Condiciones />} />
                        <Route path="/Agendarcita" element={<Agendar />} />
                        <Route path="/AgendaPersonal" element={<VistaProfesional/>}/>
                        {/* Rutas de administrador */}
                        <Route path="/admin/*" element={
                            isAdmin ? (
                                <AdminLayout>
                                    <MyRoutes />
                                </AdminLayout>
                            ) : (
                                <Navigate to="/loginsupa" replace />
                            )
                        } />
                    </Routes>
                </ThemeProvider>
            </ThemeContext.Provider>
            <Modalinicio />
            <ModalRegistro />
        </>
    );
}

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            setToken(JSON.parse(storedToken));
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
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Navbar.css";
import { useModal } from '../modal/ContextModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = ({ token, handleLogout }) => {
    const { openModal } = useModal();
    const [showLogout, setShowLogout] = useState(false);
    const [userName, setUserName] = useState('');
    const location = useLocation();

    useEffect(() => {
        const fullName = JSON.parse(sessionStorage.getItem('user')) || localStorage.getItem('userName');
        if (fullName) {
            setUserName(fullName);
        }
    }, [token, location]);  

    const toggleLogout = () => {
        setShowLogout(!showLogout);
    };

    const handleLogoutClick = () => {
        const logoutToast = toast(
            <div className="toast-confirmation">
                <span>¿Estás seguro de que deseas cerrar sesión?</span>
                <button onClick={confirmLogout} className="btn btn-danger" style={{ marginLeft: '10px' }}>Sí</button>
                <button onClick={cancelLogout} className="btn btn-secondary" style={{ marginLeft: '5px' }}>No</button>
            </div>,
            { autoClose: false } // Mantiene el toast visible hasta que el usuario tome una acción
        );
    };

    const confirmLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem("sb-gdgzbxlcnemmcxpgnowg-auth-token");
        sessionStorage.removeItem('user');
        setUserName('');
        setShowLogout(false);
        window.location.reload();
        handleLogout();
        toast.success('Has cerrado sesión correctamente'); // Mensaje de éxito
    };

    const cancelLogout = () => {
        setShowLogout(false); // Cierra el menú si el usuario cancela
        toast.info('Cierre de sesión cancelado'); // Mensaje informativo
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-content">
                        <div className="navbar-nav-container">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        HOME
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/servicios" className="nav-link">
                                        SERVICIOS
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/CitaPend" className="nav-link">
                                        CITAS
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Acerca" className="nav-link">
                                        NOSOTROS
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='iniciosesion'>
                            {!userName ? (
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link" onClick={(e) => {
                                        e.preventDefault(); 
                                        openModal('login'); 
                                    }}>
                                        Mi Cuenta
                                    </NavLink>
                                </li>
                            ) : (
                                <div className='iniciosesion-content'>
                                    <div className='iniciosesion-name' onClick={toggleLogout}>
                                        <box-icon type='solid' name='user-circle'></box-icon>
                                        <span className="nav-link">
                                            {userName}
                                        </span>
                                    </div>
                                    {showLogout && (
                                        <div className='iniciosesion-logout'>
                                            <button onClick={handleLogoutClick} className="nav-link btn btn-link">
                                                Cerrar Sesión
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

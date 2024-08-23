import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { useModal } from '../modal/ContextModal';

export const Navbar = ({ token, handleLogout }) => {
    const { openModal } = useModal();
    const [showLogout, setShowLogout] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (token) {
            const userNameFromToken = token.user.user_metadata.full_name;
            setUserName(userNameFromToken);
            localStorage.setItem('userName', userNameFromToken);
        } else {
            const savedUserName = localStorage.getItem('userName');
            if (savedUserName) {
                setUserName(savedUserName);
            }
        }
    }, [token]);

    const toggleLogout = () => {
        setShowLogout(!showLogout);
    };

    const handleLogoutClick = () => {
        // Eliminar token y nombre del usuario de localStorage
        localStorage.removeItem('userName');
        localStorage.removeItem("sb-bxluhldahxrqbukrqcdy-auth-token");
        window.location.reload();

        // Limpiar el estado local
        setUserName('');
        setShowLogout(false);

        // Llamar a la función de cierre de sesión pasada como prop
        handleLogout();

        // Refrescar la página o redirigir al usuario
        window.location.reload();
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
                            {!token && !userName ? (
                                <li className="nav-item">
                                    <NavLink to="/loginsupa" className="nav-link" onClick={(e) => {
                                        e.preventDefault(); 
                                        openModal(); 
                                    }}>
                                        Iniciar Sesion
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

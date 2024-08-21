import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

export const Navbar = ({ token, handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-centrado" id="navbarNav">
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
                            <NavLink to="/Acerca" className="nav-link">
                                NOSOTROS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/CitaPend" className="nav-link">
                                CITAS
                            </NavLink>
                        </li>
                        {!token ? (
                            <li className="nav-item">
                                <NavLink to="/loginsupa" className="nav-link">
                                    Iniciar Sesion
                                </NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        {token.user.user_metadata.full_name}
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="nav-link btn btn-link">
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

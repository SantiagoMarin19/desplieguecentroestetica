import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom'; // Asegúrate de importar NavLink desde react-router-dom

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-centrado" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios" className="nav-link" activeClassName="active">
                                SERVICIOS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/acerca-de" className="nav-link" activeClassName="active">
                                ACERCA DE
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactanos" className="nav-link" activeClassName="active">
                                CITAS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/registro" className="nav-link" activeClassName="active">
                                Iniciar Sesion
                            </NavLink>
                        </li>

                        
                      



                    </ul>
                  
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

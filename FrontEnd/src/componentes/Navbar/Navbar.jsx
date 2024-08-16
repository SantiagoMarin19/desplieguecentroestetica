import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';



export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary , navbar fixed-top navbar light bg-light" >
            
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-centrado" id="navbarNav">
                    <ul className="navbar-nav">
                  
                        <li className="nav-item">
                         
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" >
                                HOME
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/servicios" className="nav-link">
                                SERVICIOS

                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Acerca" className="nav-link" >
                                ACERCA DE
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactanos" className="nav-link">
                                CITAS
                            </NavLink>
                      



                        </li>
                        <li className="nav-item">
                            <NavLink to="/loginsupa" className="nav-link" >
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

import React from 'react';
import '../Footer/Footer.css';
import { NavLink } from 'react-router-dom';

export const Piedepagina = () => {
    return (
        <footer className='footer'>
            <div className="todofooter">
                <div className='footer-top'>
                    <div className='social-media'>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                            <i className='bx bxl-instagram icon'></i>
                        </a>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                            <i className='bx bxl-facebook-circle icon'></i>
                        </a>
                    </div>
                </div>

                <div className='footer-content'>
                    <div className='footer-section'>
                        <h3>Explorar</h3>
                        <NavLink to="/"> <p>Inicio </p></NavLink>
                        <NavLink to={"/acerca"}><p>Acerca De</p></NavLink>
                        <NavLink to={"/servicios"}><p>Servicios</p></NavLink>
                    </div>

                    <div className='footer-section'>
                        <h3>Utilidades</h3>
                        <NavLink to={"/politicas"}><p>Terminos y Condiciones</p></NavLink>
                    </div>

                    <div className='footer-section'>
                        <h3>Contacto</h3>
                        <p><b>Dirección:</b> Calle 33b #7-53.</p>
                        <p><b>Gmail:</b> nataliasalazarartist@gmail.com</p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p>Copyright 2024, NataliaSalasar | Todos los derechos reservados</p>
                </div>
            </div>
        </footer>

    );
};

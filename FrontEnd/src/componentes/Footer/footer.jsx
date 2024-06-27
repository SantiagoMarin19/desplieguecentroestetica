import React from 'react';
import '../Footer/Footer.css';
import { NavLink } from 'react-router-dom';


export const Piedepagina = () => {
    return (

        <div className='footer'>
            <div className='contenedorup'>
            <div className='encabezadofooter'></div>
                <h3> <i class='bx bxl-instagram iconos_grandes'></i>              
                <i class='bx bxl-facebook-circle iconos_grandes'></i></h3>
            </div>
            
            <div className='contenedor'>
                <div className='izquierda'>
                    <h3>Explorar</h3>
                    <button>Inicio </button>
                    <button>Acerca De</button>
                    <button>Servicios</button>
                    </div>
                    
                    <div className='centro'>
                        <h3>Utilidades</h3>
                        <p>Terminos y Condiciones</p>
                        </div>
                        
                        <div className='derecha'>
                            <h3>Contacto</h3>
                            <p><b>Dirección:</b>Calle 33b #7-53.</p>
                            <p><b>Gmail:</b>nataliasalazarartist@gmail.com</p>
                            </div>
                            </div>
                            
                            <div className='abajo'>
                                <p> Copyright 2024, NataliaSalasar | Todos los derechos reservados</p>
                                </div>
                                </div>
                                
                            );    
                        };
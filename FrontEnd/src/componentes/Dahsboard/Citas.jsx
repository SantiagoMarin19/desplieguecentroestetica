import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom'; 

export const AgendarCitaAdmin = () => {
    return (
        <div className='contenedor_AG_ADMIN'>
            <div className='Contenido_AG_ADMIN'>
                <div className='Lista_profesionales_AG_ADMIN'>
                    <div className='Titulo_profesionales__AG_ADMIN'>
                    <h4>Profesionales</h4>
                    </div>
                    <div className='Lista_Profesionales_AG_ADMIN'>
                    <ul>
                        <li>Natalia Salazar </li>
                        <li>Derian Marcarthur </li>
                        <li>Freddy Sierra Silva </li>
                    </ul>
                    </div>
                    
                </div>
            </div>
        </div>

    );
}

export default AgendarCitaAdmin;

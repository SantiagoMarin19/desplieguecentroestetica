import React from 'react';
import '../Footer/Footer.css';

import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (

 <div className='contenedor'>
    <div className='izquierda'>
        <button>Acerca de</button>
        <button>Servicios</button>
        <button>Citas</button>
    </div>
    
    <div className='centro'>
        <h4>imagenlogo</h4>
    </div>

    <div className='derecha'> 
    <h4>icono facebook</h4>
    <h4>icono instagram</h4>
    </div>

 </div>

    );
};

export default Footer;

import React from 'react';
import './Foter.css';
import 'FrontEnd/src/assets/images/Rectangle 201.png'

export const Footer = () => {
    return (

        <div className='all'>
            <div className='secciones'>
                <div className='contenido-secciones'>
                <h4>Acerca de</h4>
                <h4>Servicios</h4>
                <h4>Citas</h4>
            </div>
             </div>
             <div className='logo'>
                <div className='contenido-logo'>
                <img src={lol} />
                </div>
             </div>
             
              <div className='redes'>
                <div className='contenido-redes'>
                     <NavLink to="/"><i class='bx bxl-facebook'></i> </NavLink>
                      <NavLink to="/"><i class='bx bxl-instagram-alt' ></i> </NavLink>
                      </div>
                       </div>
                       </div>

    );
};

export default Footer;
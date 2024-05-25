import React from 'react';
import '../Footer/Footer.css';
import { NavLink } from 'react-router-dom';


export const Piedepagina = () => {
    return (

        <div className='footer'>
          
            <div className='contenedor'>
            <div className='izquierda'>
                <button>Acerca de </button>
                <button>Servicios</button>
                <button>Citas</button>
            </div>

            <div className='centro'>
            imagen
            </div>

            <div className='derecha'>
             
            <i class='bx bxl-instagram iconos_grandes'></i>              
            <i class='bx bxl-facebook-circle iconos_grandes '  ></i>
            </div>
            </div>

        <div className='abajo'>
            <p> © 2024 Copyright</p>
            </div>
            
        </div>



        );    
};


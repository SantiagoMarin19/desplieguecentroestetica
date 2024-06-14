
import React from 'react';
import "./CompServicios1.css"

import cej from "../../assets/images/cej.png"
import imagencompleta from "../../assets/images/completo.png";
import cejas1 from "../../assets/images/ojos.png"
import imagencejas from "../../assets/images/cejas.png";

export const CompServicios1 = () => {
    return (
        
        <div className='cejas'>
            <div className='apartadoCejas'>
                <p>Cejas</p>
            </div>

            <div className='mitadeso'>
                <div className='apartado1'>
                    <p>Diseño Depilación en Henna</p>
                    </div>
                </div>
                
                <div className='apartado2'>
                    <p>Diseño-Depilación y Sombreado</p>
                </div>

                <div className='apartado3'>
                    <p>Laminado de cejas</p>
                </div>
            </div>
    );
}

export default CompServicios1;

import React from 'react';
import "./CompServicios1.css"

import imagencompleta from "../../assets/images/completo.png";
import cejas1 from "../../assets/images/ojos.png"
import imagencejas from "../../assets/images/cejas.png";
import sombr from "../../assets/images/cejsom.jpg";

export const CompServicios1 = () => {
    return (
        
        <div className='cejas'>
            <div className='apartadoCejas'>
            <img className='imgpes' src={cejas1}></img>
                <p className='p1'>Cejas</p>
            </div>

            <div className='mitadeso'>
                <div className='apartado1'>
                <img className='imgpes' src={sombr}>Diseño-Depilación y Sombreado</img>
                    <p className='p2'></p>
                    </div>
                
                
                <div className='apartado2'>
                <img className='imgpes' src={imagencompleta}></img>
                    <p className='p3'>Diseño Depilación en Henna</p>
                </div>

                <div className='apartado3'>
                <img className='imgpes' src={imagencejas}></img>
                    <p className='p4'>Laminado de cejas</p>
                </div>
                </div>
            </div>
    );
}

export default CompServicios1;
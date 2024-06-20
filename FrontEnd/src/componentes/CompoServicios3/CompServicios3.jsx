
import React from 'react';
import "./CompServicios2.css"

import imagencompleta from "../../assets/images/completo.png";
import cejas1 from "../../assets/images/ojos.png"

import sombreado from "../../assets/images/cejsom.png";

export const CompServicios3 = () => {
    return (
        
        <div className='cejas'>
            <div className='apartadoMicro'>
            <img className='imgmicro' src={cejas1}></img>
                <p className='p1'>Pestañas</p>
            </div>

            <div className='mitadeso'>
                <div className='apartado1'>
                <img className='imgmicro' src={sombreado}></img>
                    <p className='p2'>lifting de pestañas </p>
                    </div>
                
                <div className='apartado2'>
                <img className='imgmicro' src={imagencompleta}></img>
                    <p className='p3'>Extensiones de pestañas </p>
                </div>

                </div>
                
            </div>
    );
}

export default CompServicios3;
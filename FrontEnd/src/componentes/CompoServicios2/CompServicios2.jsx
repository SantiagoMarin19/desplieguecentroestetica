
import React from 'react';
import "./CompServicios2.css"

import imagencompleta from "../../assets/images/completo.png";
import cejas1 from "../../assets/images/ojos.png"
import imagencejas from "../../assets/images/cejas.png";
import sombreado from "../../assets/images/cejsom.png";

export const CompServicios2 = () => {
    return (
        
        <div className='cejas'>
            <div className='apartadoMicro'>
            <img className='imgmicro' src={cejas1}></img>
                <p className='p1'>Micropigmentación</p>
            </div>

            <div className='mitadeso'>
                <div className='apartado1'>
                <img className='imgmicro' src={sombreado}></img>
                    <p className='p2'>Micropigmentacion de Cejas </p>
                    </div>
                
                
                <div className='apartado2'>
                <img className='imgmicro' src={imagencompleta}></img>
                    <p className='p3'>Micropigmentación Hair-Stroke</p>
                </div>

                <div className='apartado3'>
                <img className='imgmicro' src={imagencejas}></img>
                    <p className='p4'>micropigmentación de Labios</p>
                </div>
                </div>
                
            </div>
    );
}

export default CompServicios2;
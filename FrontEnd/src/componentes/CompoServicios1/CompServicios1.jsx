
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
            <img className="cej1" src={cejas1} />
            <p>Cejas</p>
        </div>
        <div className='mitadeso'>
        <div className='apartado1'>
            <img className="cej2" src={cej} />
            <p>Diseño-Depilación y Sombreado</p>
        </div>
        <div className='apartado2'>
            <img className="completa" src={imagencompleta} />
            <p>Diseño Depilación en Henna</p> 
        </div>
        <div className='apartado3'>
            <img className="cej3" src={imagencejas} />
            <p>Laminado de cejas</p>
        </div>
        </div>
</div>
    );
}

export default CompServicios1;
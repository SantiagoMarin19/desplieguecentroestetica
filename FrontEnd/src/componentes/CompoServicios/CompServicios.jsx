import React from 'react';
import "./CompServicios.css"
import micro from "../../assets/images/Micro.png"
import cej from "../../assets/images/cej.png"
import pes from "../../assets/images/pes.png"
import combo from "../../assets/images/com.png"
import tit from "../../assets/images/nuse.png"

export const CompServicios = () => {
    return (
        <div className='todo'>
            <div className='partarriba'>
                <div className='titservic'>
                    <h1>Nuestros servicios</h1>
                </div>
                <div className='imgcar'>
                    <img className="img-tit" src={tit} />
                </div>
            </div>
            <div className='medio'>
                <h3> Servicio Cejas</h3>
                <div className='sercej'>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                </div>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                </div>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                </div>
                </div>

                <h3> Servicio Pestaña</h3>
                <div className='serpes'>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                </div>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                </div>
                </div>

                </div>
                </div>
    );
}

export default CompServicios;

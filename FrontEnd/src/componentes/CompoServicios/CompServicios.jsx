import React from 'react';
import "./CompServicios.css"
import cej from "../../assets/images/cej.png"
import tit from "../../assets/images/nuse.png"
import { NavLink } from "react-router-dom";


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
                <NavLink to="/politicas">
                <button>Reservar</button>
                </NavLink>
                </div>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='concej1'>
                <img className="img-cej" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                </div>

                <h3> Servicio Pestaña</h3>
                <div className='serpes'>
                <div className='conpes1'>
                <img className="img-pes" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='conpes1'>
                <img className="img-pes" src={cej} />
                <h5>Diseño-Depilación y sombreado</h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                </div>

                <h3> Servicio de Micropigmentación</h3>
                <div className='sermic'>
                <div className='conmic1'>
                <img className="img-mic" src={cej} />
                <h5>Micropigmentacion Hair Stroke </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='conmic1'>
                <img className="img-mic" src={cej} />
                <h5>Diseño Depilación en Henna </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='conmic1'>
                <img className="img-mic" src={cej} />
                <h5>Micropigmentacion de Cejas </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                </div>

                <h3> Combos</h3>
                <div className='sercom'>
                <div className='concom1'>
                <img className="img-com" src={cej} />
                <h5>Diseño depilacion en henna + lifting de pestañas </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='concom1'>
                <img className="img-com" src={cej} />
                <h5>laminacion de cejas+ extensiones de pestañas </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='concom1'>
                <img className="img-com" src={cej} />
                <h5>Diseño depilacion y sombreado + lifting de pestañas </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                <div className='concom1'>
                <img className="img-com" src={cej} />
                <h5>laminacion de cejas+ Lifting de pestañas </h5>
                <h5><b>$49.00</b></h5>
                <button>Reservar</button>
                </div>
                </div>

                </div>
                </div>
    );
}

export default CompServicios;

import React from 'react';
import "./CompServicios.css"
import micro from "../../assets/images/Micro.png"
import cej from "../../assets/images/cej.png"
import pes from "../../assets/images/pes.png"
import combo from "../../assets/images/combo.png"

export const CompServicios = () => {
    return (
        <div className='todo'>

            <div className='titservic'><b>Nuestros servicios</b></div>

            <div className='cont1'>
                <img className="img-pestañas" src={pes} />
                <div className='apartado1'>
                <div className='titpes'>PESTAÑAS</div>
                <div className='contenido1'>En el apartado de pestañas podemos ofrecerte gran variedad de servicios, entre estos Lifting de pestañas, extensiones de pestañas.</div>
                <div className='btn1'><button>Reservar</button></div>
                </div>
            </div>

            <div className='cont2'>
                <img className="img-cejas" src={cej} />
                <div className='apartado2'>
                <div className='titcej'>CEJAS</div>
                <div className='contenido2'>En el apartado de pestañas podemos ofrecerte gran variedad de servicios, entre estos Lifting de pestañas, extensiones de pestañas.</div>
                <div className='btn2'><button>Reservar</button></div>
                </div>
            </div>

            <div className='cont3'>
                <img className="img-micro" src={micro} />
                <div className='apartado3'>
                <div className='titmic'>MICROPIGMENTACIÓN</div>
                <div className='contenido3'>En el apartado de pestañas podemos ofrecerte gran variedad de servicios, entre estos Lifting de pestañas, extensiones de pestañas.</div>
                <div className='btn3'><button>Reservar</button></div>
                </div>
            </div>

            <div className='cont4'>
                <img className="img-combo" src={combo} />
                <div className='apartado4'>
                <div className='titcom'>COMBOS</div>
                <div className='contenido4'>En el apartado de pestañas podemos ofrecerte gran variedad de servicios, entre estos Lifting de pestañas, extensiones de pestañas.</div>
                <div className='btn4'><button>Reservar</button></div>
                </div>
            </div>

        </div>
    );
}

export default CompServicios;

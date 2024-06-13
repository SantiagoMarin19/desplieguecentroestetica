import react from 'react';
import './servicios.css';
import liftingdepestañas from "../../assets/images/liftingdepestañas.png";

export const LiftingDP = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Lifting De Pestañas</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>Esta técnica utiliza productos especializados que levantan y enrulean tus pestañas, logrando que luzcan más largas, rizadas y definidas. El resultado es una mirada más abierta, expresiva y cautivadora. Nuestros expertos te guiarán en el cuidado y mantenimiento para que puedas disfrutar de unas pestañas perfectas durante más tiempo. Sumérgete en esta transformación sutil pero impactante.</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$90.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={liftingdepestañas}/>
                   </div>
        </div>
        
    );    
};
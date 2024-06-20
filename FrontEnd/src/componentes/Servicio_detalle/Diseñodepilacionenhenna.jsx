import react from 'react';
import './servicios.css';
import diseñopilacionenhenna from "../../assets/images/diseñopilacionenhenna.png";

export const DiseñoYDH = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Diseño y  Depilación en Henna</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>Nuestro servicio de Diseño de Depilación en Henna de cejas logra resaltar tus rasgos de manera equilibrada y armoniosa. 
                        El uso de la henna aporta profundidad y definición a tus cejas, dándoles un aspecto sofisticado y natural. Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas que enmarquen tu mirada con elegancia.</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$40.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={diseñopilacionenhenna}/>
                   </div>
        </div>
        
    );    
};
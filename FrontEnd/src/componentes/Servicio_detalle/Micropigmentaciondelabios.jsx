import react from 'react';
import './servicios.css';
import micropigmentaciondelabios from "../../assets/images/micropigmentaciondelabios.png";

export const MicropigmentacionDL = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Micropigmentación de Labios</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>La Micropigmentación de Labios es un tratamiento de alta precisión que define y resalta tus labios de manera natural y duradera. Nuestros expertos utilizan pigmentos cuidadosamente seleccionados para crear un efecto de labios maquillados, pero con un acabado sutil y elegante. Este procedimiento permite corregir imperfecciones, lograr un contorno perfecto y mantener un tono uniforme.
                         Olvídate de retoques frecuentes y disfruta de unos labios siempre definidos y radiantes. </p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$380.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={micropigmentaciondelabios}/>
                   </div>
        </div>
        
    );    
};
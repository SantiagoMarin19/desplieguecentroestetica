import react from 'react';
import './Laminadodecejas.css';
import laminadodecejas from "../../assets/images/laminadodecejas.png";

export const DiseñoDYS = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Diseño Depilación y Sombreado</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. 
                        El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural. Confía en nuestros expertos para obtener cejas perfectas que enmarquen tu mirada con elegancia.
</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$300.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={laminadodecejas}/>
                   </div>
        </div>
        
    );    
};
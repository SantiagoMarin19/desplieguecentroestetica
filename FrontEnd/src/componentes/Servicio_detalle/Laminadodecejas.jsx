import react from 'react';
import './servicios.css';
import laminadodecejas from "../../assets/images/laminadodecejas.png";

export const LaminadoC = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Laminado De Cejas</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>Esta técnica utiliza productos especiales que suavizan y fijan el vello, logrando un resultado liso y uniformemente distribuido. 
                        El laminado realza tus rasgos, abriendo y enmarcando tu mirada de forma armónica. Confía en nuestros profesionales para conseguir unas cejas perfectamente peinadas y con un aspecto impecable.</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$80.000</p>
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
import react from 'react';
import './servicios.css';
import micropigmentaciondecejas from "../../assets/images/micropigmentaciondecejas.png";

export const MicropigmentacionDC = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Micropigmentación de Cejas</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>Esta técnica utiliza productos especiales que suavizan y fijan el vello, logrando un resultado liso y uniformemente distribuido. El laminado realza tus rasgos, abriendo y enmarcando tu mirada de forma armónica. Confía en nuestros profesionales para conseguir unas cejas perfectamente peinadas y con un aspecto impecable.</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$350.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={micropigmentaciondecejas}/>
                   </div>
        </div>
        
    );    
};
import react from 'react';
import './servicios.css';
import hennacejas from "../../assets/images/hennacejas.png";
import laminadodecejas from "../../assets/images/laminadodecejas.png";
import  sombreadoceja from "../../assets/images/sombreadoceja.png"

export const Cejas = () => {
    return (

        <div className='contenedor_total'>
            <div className='banneer'>
                <h1>Cejas</h1>
            </div>

            <div className='content_total'>
                
                <div className='contenido'>
                    <div className='contenido_info'>
                    <div className='titulo'>
                        <h1>Diseño y  Depilación en Henna</h1>
                        </div>
                        
                        <div className='detalle'>
                            <p> El uso de la henna aporta profundidad y definición a tus cejas, dándoles un aspecto sofisticado y natural.</p>
                            </div>

                            <div className='imagen'>
                                <img className='imagen' src={hennacejas}/>
                                </div>
                                </div>
                            
                            <div className='contenido_botones'>
                                <div className='informacion'>
                                    <h4>Tiempo</h4>
                                    <p>60 Minutos</p>
                                    <h4>Precio</h4>
                                    <p>$120.000</p>
                                    </div>
                                    
                                    <div className='botonera'>
                                        <button id='boton'>Reservar Ahora</button>
                                        </div>
                                        </div>
                                        </div>
                                       
                                            
                <div className='contenido'>
                <div className='titulo'>
                <h1>Diseño Depilación y Sombreado</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. 
                        El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural. </p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                <h4>Tiempo</h4>
                    <p>60 Minutos</p>
                    <h4>Precio</h4>
                    <p>$120.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    
                <div className='imagen'>
                  <img className='imagen' src={sombreadoceja}/>
                   </div>
                   </div>

                   <div className='contenido'>
                <div className='titulo'>
                <h1>Laminado De Cejas</h1>
                </div>
                <div className='detalle'>
                    <p>Esta técnica utiliza productos especiales que suavizan y fijan el vello, logrando un resultado liso y uniformemente distribuido. 
                        El laminado realza tus rasgos, abriendo y enmarcando tu mirada de forma armónica. </p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                <h4>Tiempo</h4>
                    <p>60 Minutos</p>
                    <h4>Precio</h4>
                    <p>$120.000</p>
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
        </div>

     
        

        
    );    
};
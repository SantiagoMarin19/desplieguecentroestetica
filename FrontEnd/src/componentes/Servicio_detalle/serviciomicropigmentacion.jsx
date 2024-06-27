import react from 'react';
import './servicios.css';
import microlabios from "../../assets/images/microlabios.png";
import microcejas from "../../assets/images/microcejas.png";
import hairstroke from "../../assets/images/Hairstroke.png";

export const Micropigmentacion = () => {
    return (

<div className='contenedor_total'>
            <div className='banneer'>
                <h1>Micropigmentacion </h1>
            </div>

            <div className='content_total'> 
                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Micropigmentación Hair-Stroke</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural. </p>
                            <div className='botones'>
                                <button id='boton'>Reservar Ahora</button>
                            </div>
                            <div className='content_boton'>     
                                <div className='botontyp'>  
                                    <div className='tiempo'>
                                        <h4>Tiempo</h4>
                                        <p>60 Minutos</p>
                                    </div>
                                    <div className='precio'>
                                        <h4>Precio</h4>
                                        <p>$120.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imagen-contenedor'>
                            <img className='imagen' src={hairstroke}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>

                <div className='contenido'>
                    <div className='titulo'>
                        <h1>micropigmentación de Labios</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>La Micropigmentación de Labios es un tratamiento de alta precisión que define y resalta tus labios de manera natural y duradera.</p>
                            <div className='botones'>
                                <button id='boton'>Reservar Ahora</button>
                            </div>
                            <div className='content_boton'>     
                                <div className='botontyp'>  
                                    <div className='tiempo'>
                                        <h4>Tiempo</h4>
                                        <p>60 Minutos</p>
                                    </div>
                                    <div className='precio'>
                                        <h4>Precio</h4>
                                        <p>$120.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imagen-contenedor'>
                            <img className='imagen' src={microlabios}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>

                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Micropigmentacion  de Cejas </h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>La Micropigmentación de Cejas es una técnica avanzada que permite diseñar y definir tus cejas de manera duradera y natural.</p>
                            <div className='botones'>
                                <button id='boton'>Reservar Ahora</button>
                            </div>
                            <div className='content_boton'>     
                                <div className='botontyp'>  
                                    <div className='tiempo'>
                                        <h4>Tiempo</h4>
                                        <p>60 Minutos</p>
                                    </div>
                                    <div className='precio'>
                                        <h4>Precio</h4>
                                        <p>$120.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='imagen-contenedor'>
                            <img className='imagen' src={microcejas}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
};
export default Micropigmentacion;
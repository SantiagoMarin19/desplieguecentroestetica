import React from 'react';
import './servicios.css';
import hennacejas from "../../assets/images/hennacejas.png";
import laminadodecejas from "../../assets/images/laminadodecejas.png";
import sombreadoceja from "../../assets/images/sombreadoceja.png";

export const Cejas = () => {
    return (
        <div className='contenedor_total'>
            <div className='banneer'>
                <h1> Servicio Cejas</h1>
            </div>

            <div className='content_total'> 
                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Diseño y Depilación en Henna</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>El uso de la henna aporta profundidad y definición a tus cejas, dándoles un aspecto sofisticado y natural.</p>
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
                            <img className='imagen' src={hennacejas}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>

                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Diseño Depilación y Sombreado</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural.</p>
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
                            <img className='imagen' src={sombreadoceja}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>

                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Laminado De Cejas</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>Esta técnica utiliza productos especiales que suavizan y fijan el vello, logrando un resultado liso y uniformemente distribuido. El laminado realza tus rasgos, abriendo y enmarcando tu mirada de forma armónica.</p>
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
                            <img className='imagen' src={laminadodecejas}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
};

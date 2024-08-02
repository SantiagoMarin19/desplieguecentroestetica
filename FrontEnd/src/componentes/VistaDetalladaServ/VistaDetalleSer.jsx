import React from 'react';
import '../Servicio_detalle/Serviciocejas';
import hennacejas from "../../assets/images/hennacejas.png";
import laminadodecejas from "../../assets/images/laminadodecejas.png";
import sombreadoceja from "../../assets/images/sombreadoceja.png";

export const VistaDetalle = () => {
    return (
        <div className='contenedor_total'>
            <div className='banneer'>
                <h1> Servicio Detalle</h1>
            </div>

            <div className='content_total'> 
                {/* Tarjeta 1: Diseño y Depilación en Henna */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Diseño y Depilación en Henna</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>El uso de la henna aporta profundidad y definición a tus cejas, dándoles un aspecto sofisticado y natural.</p>
                        </div>
                        <div className='botontyp'>
                            <div className='tiempo'>
                                <h4>60 Minutos</h4>
                                <p>Tiempo</p>
                            </div>
                            <div className='precio'>
                                <h4>$120.000</h4>
                                <p>Precio</p>
                            </div>
                        </div>
                        <div className='botones'>
                        <button className='ReservarS'>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={hennacejas} alt='Diseño y Depilación en Henna' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>

                {/* Tarjeta 2: Diseño Depilación y Sombreado */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Diseño Depilación y Sombreado</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural.</p>
                        </div>
                        <div className='botontyp'>
                            <div className='tiempo'>
                                <h4>60 Minutos</h4>
                                <p>Tiempo</p>
                            </div>
                            <div className='precio'>
                                <h4>$120.000</h4>
                                <p>Precio</p>
                            </div>
                        </div>
                        <div className='botones'>
                        <button className='ReservarS'>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={sombreadoceja} alt='Diseño Depilación y Sombreado' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>

                {/* Tarjeta 3: Laminado De Cejas */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Laminado De Cejas</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>Esta técnica utiliza productos especiales que suavizan y fijan el vello, logrando un resultado liso y uniformemente distribuido. El laminado realza tus rasgos, abriendo y enmarcando tu mirada de forma armónica.</p>
                        </div>
                        <div className='botontyp'>
                            <div className='tiempo'>
                                <h4>60 Minutos</h4>
                                <p>Tiempo</p>
                            </div>
                            <div className='precio'>
                                <h4>$120.000</h4>
                                <p>Precio</p>
                            </div>
                        </div>
                        <div className='botones'>
                        <button className='ReservarS'>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={laminadodecejas} alt='Laminado De Cejas' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>
            </div>
        </div>
    );    
};

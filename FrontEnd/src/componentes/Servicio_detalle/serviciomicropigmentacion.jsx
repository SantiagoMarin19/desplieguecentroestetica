import React from 'react';
import './servicios.css';
import microlabios from "../../assets/images/microlabios.png";
import hairstroke from "../../assets/images/Hairstroke.png";
import microcejas from "../../assets/images/microcejas.png";

export const Micropigmentacion = () => {
    return (
        <div className='contenedor_total'>
            <div className='banneer'>
                <h1>Micropigmentacion </h1>
            </div>

            <div className='content_total'>
                {/* Tarjeta 1: Micropigmentación Hair-Stroke */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Micropigmentación Hair-Stroke</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos. El sombreado de cejas añade profundidad y definición, creando un look sofisticado y natural.</p>
                        </div>
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
                        <div className='botones'>
                            <button>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={hairstroke} alt='Micropigmentación Hair-Stroke' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>

                {/* Tarjeta 2: Micropigmentación de Labios */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Micropigmentación de Labios</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>La Micropigmentación de Labios es un tratamiento de alta precisión que define y resalta tus labios de manera natural y duradera.</p>
                        </div>
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
                        <div className='botones'>
                            <button>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={microlabios} alt='Micropigmentación de Labios' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>

                {/* Tarjeta 3: Micropigmentación de Cejas */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Micropigmentación de Cejas</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>La Micropigmentación de Cejas es una técnica avanzada que permite diseñar y definir tus cejas de manera duradera y natural.</p>
                        </div>
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
                        <div className='botones'>
                            <button>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={microcejas} alt='Micropigmentación de Cejas' />
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Micropigmentacion;
import React from 'react';
import './servicios.css';
import lidtingdepestañas from "../../assets/images/lidtingdepestañas.png";
import extensionpestaña from "../../assets/images/extensionpestaña.png";

export const Pestañas = () => {
    return (
        <div className='contenedor_total'>
            <div className='banneer'>
                <h1>Servicio Pestañas </h1>
            </div>

            <div className='content_total'>
                {/* Tarjeta 1: Extensiones de Pestañas */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Extensiones De Pestañas</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>Mediante técnicas profesionales y productos de alta calidad, nuestros expertos aplicarán delicadamente cada extensión, logrando un resultado natural y realzado</p>
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
                            <button className='ReservarS'>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={extensionpestaña} alt='Extensiones de Pestañas'/>
                        <p className='leyenda'>A través de técnicas precisas, se logra una forma equilibrada y armoniosa que resalta tus rasgos.</p>
                    </div>
                </div>

                {/* Tarjeta 2: Lifting de Pestañas */}
                <div className='tarjeta'>
                    <div className='contenido_ds'>
                        <div className='titulo_ds'>
                            <h1>Lifting de pestañas</h1>
                        </div>
                        <div className='detalle_ds'>
                            <p>Esta técnica utiliza productos especializados que levantan y enrulean tus pestañas, logrando que luzcan más largas, rizadas y definidas.</p>
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
                        <button className='ReservarS'>Reservar Ahora</button>
                        </div>
                    </div>
                    <div className='imagen-contenedor'>
                        <img className='imagen' src={lidtingdepestañas} alt='Lifting de Pestañas'/>
                        <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

import react from 'react';
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
                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Extensiones De Pestañas</h1>
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
                            <img className='imagen' src={extensionpestaña}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>

                <div className='contenido'>
                    <div className='titulo'>
                        <h1>Lifting de pestañas</h1>
                    </div>
                    <div className='contenid_detalle'>
                        <div className='detalle'>
                            <p>Esta técnica utiliza productos especializados que levantan y enrulean tus pestañas, logrando que luzcan más largas, rizadas y definidas.</p>
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
                            <img className='imagen' src={lidtingdepestañas}/>
                            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
};

        

        

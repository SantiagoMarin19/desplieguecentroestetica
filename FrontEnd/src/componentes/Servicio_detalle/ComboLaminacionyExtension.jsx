import react from 'react';
import extensionpestaña from "../../assets/images/extensionpestaña.png";
import lidtingdepestañas from "../../assets/images/lidtingdepestañas.png";
import "./combos.css"

export const ComboSyLifting = () => {
    return (
        <div className='contenedorcombo'>
            <div className='encabezado'>
                <h1>laminacion de cejas + Extension de Pestañas   </h1>
            </div>
            <div className='subtituloCmbos'>
                <h2>Nuestro Metodo:</h2>
            </div>

            <div className='contenedor_contenido'>
                <div className='contenido_combo1'>
                    <div className='conten_h3'>
                    <h3>Laminación de cejas:</h3>
                    <ul>
                        <li>Alisamiento y modelado de las cejas para conseguir un efecto uniforme y natural.</li>
                        <li>Aplicación de un tratamiento con queratina que alisa, fija y nutre las cejas.</li>
                        <li>Resultado duradero (hasta 6-8 semanas).</li>
                    </ul>
                    </div>

                    <div className='picture'>
                        <img className='picture1' src={lidtingdepestañas}/>
                        </div>
                    </div>

                    <div className='contenido_combo2'>
                        <div className='conten_h3'>
                        <h3>Extension de pestañas:
                        </h3>
                        <ul>
                            <li>Extensión y alargamiento de las pestañas naturales.</li>
                            <li>Aplicación de extensiones de diferentes largos y grosores, adaptadas al tipo de ojo y mirada deseada.</li>
                            <li>Efecto voluminoso y definido de la mirada.</li>
                        </ul></div>

                        <div className='picture'>
                        <img className='picture2' src={extensionpestaña}/>
                        </div>
                    </div>
                    </div> 

                    <div className='content_boton'>     
                    <div className='botones'>
                                <button id='boton'>Reservar Ahora</button>
                            </div>
                                <div className='combobotontyp'>  
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
    
        
    );    
};
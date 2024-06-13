import react from 'react';
import './servicios.css';
import extensionesdepestaña from "../../assets/images/extensionesdepestaña.png";

export const ExtensionesDP = () => {
    return (
        <div className='contenedor_total'>

            <div className='contenido'>
                <div className='titulo'>
                <h1>Extensiones De Pestañas</h1>
                </div>
                <div className='detalle'>
                    <h3>Nuestro Metodo</h3>
                    <p>Mediante técnicas profesionales y productos de alta calidad, nuestros expertos aplicarán delicadamente cada extensión, logrando un resultado natural y realzado. 
                        Las extensiones se adhieren de forma segura a tus pestañas, proporcionando un efecto alargado, curvado y espectacular. Despierta tu mirada y luce unas pestañas impresionantes, sin necesidad de maquillaje.</p>
                </div>

                <div className='contenido_botones'>
                <div className='informacion'>
                    <p>60 Minutos</p>
                    <p>$120.000</p>
                    </div>

                    <div className='botonera'>
                    <button id='boton'>Reservar Ahora</button>
                    </div>
                   
                    </div>
                    </div>
                <div className='imagen'>
                  <img className='imagen' src={extensionesdepestaña}/>
                   </div>
        </div>
        
    );    
};
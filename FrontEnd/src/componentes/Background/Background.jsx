import React from 'react';
import './Background.css';
import imagenrostro from "../../assets/images/fondo.png";
import imagencompleta from "../../assets/images/completo.png";
import imagencejas from "../../assets/images/cejas.png";
import imagenlifting from "../../assets/images/lifting.png";
import imagenmaquillaje from "../../assets/images/maquillaje.png";
import imagenlifcejas from "../../assets/images/pestañas.png"

export const Background = () => {
    return (

        <div className='conteinergeneral'>
            <div className='iconos'>
                <div className="background">
                    <div className='containergoblal'>
                        <div className='Frase-background'>
                            <h2>
                                Se la mejor parte de ti
                            </h2>
                        </div>
                        <div className='Frase-background'>
                            <h1>
                                CONSIGUE TU <br></br> ESTILO

                            </h1>
                        </div>
                        <div className='Frase-background' >
                            <p> ¡Haz de tu peinado una parte importante para la expresión de tu identidad! <br></br>
                                ¡Nuestros peluqueros autorizados se asegurarán de que obtengas el estilo exacto que deseas!</p>

                        </div>
                        <button type="button" class="btn btn-primary boton">AGENDAR  AHORA</button>
                    </div>


                    <div className='foto'>
                        <img className="img-rostro" src={imagenrostro} />
                    </div>

                    <i class='bx bxl-instagram-alt icono_grande'> </i>
                    <i class='bx bxl-facebook-circle icono_grande' > </i>
                </div>







                <div className='acercade'>
                    En <b>Natalia Salazar</b>, creemos que realzar tu mirada y tu sonrisa es el secreto para sentirte más bella y segura de ti misma.
                    Nuestros tratamientos destán diseñados para resaltar tu mirada, definir tus rasgos y dejar que tu sonrisa resplandezca.
                    Déjate consentir en nuestro oasis de belleza y encuentra tu resplandor interior.
                </div>

            </div>
            <div className='fraseservicios'>
                <strong>Renueva tu bienestar, descubre tu belleza</strong></div>
            <div className='imgservices'>
                <img className="img-completa" src={imagencompleta} />

                <div className='todoimg'>
                    <div className='imgarriba'>
                    <img className="img-cejas" src={imagencejas} />
                    <img className="img-maquillaje" src={imagenmaquillaje} />
                    </div>

                    <div className='imgabajo'>
                    <img className="img-lifting" src={imagenlifting} />
                    <img className="img-lifcejas" src={imagenlifcejas} />
                    </div>

                </div>
            </div>
            <div className='redirigirserv'>
                <button type="button" class="btn-servicios">
                    SERVICIOS
                </button>
            </div>
            <div className="background">
                <div className='containergoblal'>
                    <div className='Frase-background'>

                        Renueva tu mirada, <br />descubre tu resplandor


                    </div>
                    <div className='parrafo' >
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta suscipit omnis,
                            inventore recusandae accusantium <br></br>architecto in maiores odit incidunt dicta sunt
                            odio dolorum, ipsa quas voluptas sed id rem neque.</p>

                    </div>
                </div>

            </div>







        </div>








    )

}

export default Background;

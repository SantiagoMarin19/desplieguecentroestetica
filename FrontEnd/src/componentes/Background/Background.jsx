import React from 'react';
import './Background.css';
import imagenrostro from "../../assets/images/fondo.png";

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









            </div>
            <div className='prueba' > </div>

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

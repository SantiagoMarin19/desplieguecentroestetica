import React from 'react';
import '../Politicas/Politicas.css';
import { NavLink } from 'react-router-dom';

export const Politicases = () => {
    return (
        <div className='politicas'>
            <div className='banner'>
                <div className='titulo'>
                    <h2>Términos y Condiciones de Servicios</h2>
                </div>

                <div className='informacion'>
                    <p>Bienvenido/a a Natalia Salazar. A continuación, se detallan los términos y condiciones bajo los cuales ofrecemos 
                    nuestros servicios. Al reservar una cita con nosotros, aceptas estos términos y condiciones en su totalidad.</p>
                </div>
                </div>

                <div className='contenido'>
                    <div className='titulo_conten'>
                        <h3>Nuestros Metodos:</h3>
                        </div>

                        <div className='contenido_info'>
                            <div className='info'>
                                <ul>
                                <li> <b>Puntualidad y Asistencia</b></li>
                                <p> <b>Puntualidad:</b> Es fundamental que acudas puntualmente a tu cita. La puntualidad garantiza un excelente servicio. Si llegas más de 10 minutos tarde a la hora acordada, tu cita será cancelada automáticamente.</p>
                                <p> <b>Cancelaciones y Cambios:</b> Debes notificar cualquier cambio o cancelación de tu cita con al menos 24 horas de anticipación. Esto nos permite reorganizar nuestro tiempo y ofrecer el espacio a otro cliente.</p>
                                
                                <li> <b>Depósitos y Pagos</b></li>
                                <p> <b>Depósito: </b>Para confirmar tu cita, debes realizar un depósito del 50% del valor total del servicio solicitado.</p>
                                <p> <b>No Reembolsable:</b> En caso de no asistir, llegar tarde o cancelar fuera del plazo de 24 horas, el depósito no será reembolsable.</p>
                                
                                <li> <b>Política de Reembolsos</b></li>
                                <p>  <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                                <p> <b>Excepciones:</b> En casos excepcionales y a discreción de la empresa, se puede considerar un reembolso parcial o reprogramación de la cita.</p>
                                
                                <li> <b>Ubicación y Contacto</b></li>
                                <p> <b>Dirección: </b>Nos encontramos en Calle 33B # 7-53, Barrio Urbanización El Bosque, Palmira Valle.</p>
                                <p>  <b>Contacto:</b> Para cualquier consulta o modificación de tu cita, contáctanos a través de nuestras redes sociales @nataliasalazarartist o directamente en nuestro local.</p>
                                
                                <li> <b>Derechos de la Empresa</b></li>
                                <p> <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                                
                                <li> <b>Aceptación de Términos</b></li>
                                <p>Al reservar una cita con nosotros, confirmas que has leído, entendido y aceptado estos términos y condiciones en su totalidad.</p>
                                </ul>
                                </div>



                 </div>

                </div>


        </div>

        );
    };
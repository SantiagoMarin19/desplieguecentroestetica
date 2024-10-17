import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import '../Politicas/Politicas.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Politicases = () => {
    const [loading, setLoading] = useState(true);
    const componentRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handlePrint = useReactToPrint({
        content: () => {
            console.log(componentRef.current); // Verifica que esto no sea null
            return componentRef.current;
        },
        documentTitle: 'Terminos_y_Condiciones_Natalia_Salazar_Artist',
    });
    

    const PoliticasContent = React.forwardRef((props, ref) => (
        <div ref={ref} className='politicas-printable'>
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
                    <h3>Nuestros Métodos:</h3>
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
                            <p> <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                            <p> <b>Excepciones:</b> En casos excepcionales y de las politicas aqui mencionadas, se puede considerar un reembolso parcial o reprogramación de la cita.</p>
                            
                            <li> <b>Ubicación y Contacto</b></li>
                            <p> <b>Dirección: </b>Nos encontramos en Calle 33B # 7-53, Barrio Urbanización El Bosque, Palmira Valle.</p>
                            <p> <b>Contacto:</b> Para cualquier consulta o modificación de tu cita, contáctanos a través de nuestras redes sociales @nataliasalazarartist.</p>
                            
                            <li> <b>Derechos de la Empresa</b></li>
                            <p> <b>No Reembolsable:</b> El depósito del 50% del servicio no es reembolsable si no asistes, llegas tarde o no cancelas con la debida anticipación (24 horas antes de la cita).</p>
                            
                            <li> <b>Aceptación de Términos</b></li>
                            <p>Al reservar una cita con nosotros, confirmas que has leído, entendido y aceptado estos términos y condiciones en su totalidad.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='politicas'>
            {loading ? (
                <div className='politicas-skeleton'>
                    <div className='banner'>
                        <div className='titulo'>
                            <Skeleton width={300} height={30} />
                        </div>
                        <div className='informacion'>
                            <Skeleton count={3} />
                        </div>
                    </div>
                    <div className='contenido'>
                        <div className='titulo_conten'>
                            <Skeleton width={200} height={25} />
                        </div>
                        <div className='contenido_info'>
                            <Skeleton count={15} />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <PoliticasContent ref={componentRef} />
                    <div className='politicas-actions'>
                        <button onClick={handlePrint} className='btn-politicas'>
                            Descargar Términos y Condiciones
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
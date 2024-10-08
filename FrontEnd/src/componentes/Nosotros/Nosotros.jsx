import React, { useState, useEffect } from 'react';
import './Nosotros.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Nosotros() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de datos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Cambia el tiempo según sea necesario

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='containernosotros'>
            <div className='header'>
                {loading ? <Skeleton width={300} height={40} /> : <h1>Acerca de Nosotros</h1>}
            </div>

            <div className='contenedor_nosotros'>
            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Quienes Somos</h2>}
                {loading ? <Skeleton count={3} /> : (
                    <p>
                        En Natalia Salazar Artist, nos enorgullece ser un centro de estética facial dedicado a realzar la belleza natural de nuestras clientas. Ubicados en la hermosa ciudad de Palmira, en el barrio de Calle 33b #7-53, nos hemos consolidado como un referente en la industria de la belleza, ofreciendo servicios de alta calidad que cumplen con los más altos estándares.
                    </p>
                )}
            </div>

            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Nuestra Historia</h2>}
                {loading ? <Skeleton count={3} /> : (
                    <p>
                        Con más de 4 años de experiencia, Natalia Salazar Artist ha logrado la satisfacción de más de mil clientas, convirtiéndose en un espacio de confianza donde la belleza y el cuidado personal se encuentran. Nuestra historia comenzó con un sueño compartido de ofrecer servicios excepcionales en un ambiente acogedor y profesional.
                    </p>
                )}
            </div>

            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Nuestro Equipo</h2>}
                {loading ? (
                    <>
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                    </>
                ) : (
                    <>
                        <p>
                            Natalia Salazar: Experta en cejas y Profesional en Micropigmentación, Natalia ha perfeccionado el arte de realzar la belleza natural a través de técnicas avanzadas que garantizan resultados espectaculares y duraderos.
                        </p>
                        <p>
                            Derian Manzano: Con una especialización en lifting y extensiones de pestañas, Derian ha transformado la mirada de innumerables clientas, proporcionándoles un toque de elegancia y sofisticación que marca la diferencia.
                        </p>
                    </>
                )}
            </div>

            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Nuestros Servicios</h2>}
                {loading ? (
                    <>
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                        <Skeleton width={200} height={20} />
                    </>
                ) : (
                    <p>
                        En Natalia Salazar Artist, ofrecemos una amplia gama de servicios diseñados para resaltar lo mejor de cada persona:
                    </p>
                )}
                <ul>
                    {loading ? (
                        <>
                            <Skeleton width={300} height={20} />
                            <Skeleton width={300} height={20} />
                            <Skeleton width={300} height={20} />
                        </>
                    ) : (
                        <>
                            <li><strong>Micropigmentación:</strong> Perfeccionamos la forma de las cejas, labios y ojos, utilizando técnicas precisas para garantizar un resultado natural y armónico.</li>
                            <li><strong>Lifting y Extensiones de Pestañas:</strong> Realzamos la belleza de tus ojos con tratamientos que añaden volumen y longitud a tus pestañas, brindándote una mirada irresistible.</li>
                            <li><strong>Cuidado de Cejas:</strong> Desde el diseño hasta la tintura, nuestras técnicas aseguran cejas perfectamente definidas que complementan tu rostro.</li>
                        </>
                    )}
                </ul>
            </div>

            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Nuestro Compromiso</h2>}
                {loading ? <Skeleton count={3} /> : (
                    <p>
                        La satisfacción de nuestras clientas es nuestra máxima prioridad. Nos esforzamos por ofrecer un servicio personalizado y de calidad, utilizando productos de primera línea y técnicas innovadoras para garantizar resultados que superen las expectativas. En Natalia Salazar Artist, tu belleza es nuestra pasión.
                    </p>
                )}
            </div>

            <div className='section'>
                {loading ? <Skeleton width={200} height={30} /> : <h2>Ubicación y Contacto</h2>}
                {loading ? <Skeleton count={3} /> : (
                    <p>
                        La satisfacción de nuestras clientas es nuestra máxima prioridad. Nos esforzamos por ofrecer un servicio personalizado y de calidad, utilizando productos de primera línea y técnicas innovadoras para garantizar resultados que superen las expectativas. En Natalia Salazar Artist, tu belleza es nuestra pasión.
                    </p>
                )}</div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AbonoInfo.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import qr from '../../assets/images/qr.png';
import bancolombia from '../../assets/images/bancolombia.png';
import nequi from '../../assets/images/nequi.png';
import daviplata from '../../assets/images/daviplata.png';


const AbonoInfo = () => {
    const location = useLocation();
    const { servicio } = location.state || {};
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    console.log(servicio);

    if (!servicio) {
        return <div className='error-message'>Error: Servicio no disponible</div>;
    }

    const abono = servicio.precio * 0.5;

    return (
        <div className='abono-info-container'>
            <div className='abono-info-card'>
                <div className='info-column'>
                    <div className='card-title'>
                        {loading ? (
                            <Skeleton height={40} width={300} />
                        ) : (
                            <h1 className='card-title'>Información de Abono</h1>
                        )}
                    </div>
                    <br></br>
                    <div className='card-subtitle'>
                        {loading ? (
                            <Skeleton height={30} width={500} />
                        ) : (
                            <h4 className='card-subtitle'>Estamos a un paso para confirmar tu cita, debes realizar un abono del 50% del costo del servicio.</h4>
                        )}
                    </div>
                    <br></br>

                    <div className='additional-info'>
                        <div className='cost-details'>
                            {loading ? (
                                <>
                                    <Skeleton height={20} width={250} />
                                    <Skeleton height={20} width={250} />
                                </>
                            ) : (
                                <>
                                    <p><strong>Costo total del servicio:</strong> <span className='price'>{new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 2
                                    }).format(servicio.precio)}</span></p>
                                    <p><strong>Abono a pagar:</strong> <span className='price'>{new Intl.NumberFormat('es-CO', {
                                        style: 'currency',
                                        currency: 'COP',
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 2
                                    }).format(abono)}</span></p>
                                </>
                            )}
                        </div>
                        <br></br>

                        <div className='service-info'>
                            {loading ? (
                                <>
                                    <Skeleton height={20} width={250} />
                                    <Skeleton height={20} width={250} />
                                </>
                            ) : (
                                <>

                                    <h5><i className="fas fa-tag"></i> Servicio Seleccionado:</h5>
                                    <p><strong>Nombre del Servicio:</strong> {servicio.nombre_servicio}</p>


                                </>
                            )}

                        </div>

                    </div>
                </div>

                <div className='info-column'>


                    <div className='payment-info'>
                        {loading ? (
                            <>
                                <Skeleton height={20} width={250} />
                                <Skeleton height={20} width={250} />
                                <Skeleton height={20} width={250} />
                            </>
                        ) : (
                            <>
                                <h3><i className="fas fa-university"></i> Metodos de pago y bancos aliados</h3>
                                <img src={bancolombia} alt="Logo Bancolombia" className="bancolombia-logo" />
                                <div className="personal">
                                    <p><i className="fas fa-credit-card"></i> <strong>Cuenta ahorros Bancolombia:</strong> 75227070421</p>
                                </div>
                                <img src={nequi} alt="Logo Bancolombia" className="bancolombia-logo" />
                                <div className="personal">
                                    <p><i className="fas fa-credit-card"></i> <strong>Cuenta Nequi:</strong> 3168978439</p>
                                </div>
                                <img src={daviplata} alt="Logo Bancolombia" className="bancolombia-logo" />
                                <div className="personal">
                                    <p><i className="fas fa-credit-card"></i> <strong>Cuenta Daviplata:</strong> 3168978439</p>
                                </div>
                                <br></br>
                                
                                {loading ? (
                                    <Skeleton height={40} width={150} />
                                ) : (
                                    <button className='go-home-button' onClick={() => navigate('/CitaPend')}>Ver Mis citas</button>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className='info-column'>
                    <div className='consideraciones'>
                        {loading ? (
                            <>
                                <Skeleton height={30} width={250} />
                                <Skeleton count={2} />
                                <Skeleton height={200} width={200} />
                            </>
                        ) : (
                            <>
                                <h2>Antes de continuar</h2>
                                <br></br>

                                <p>Recuerda que cuando realices tu pago al número de cuenta, deberás enviar tus datos al siguiente enlace de WhatsApp especificando tu nombre:</p>

                                <p>Puedes escanear el código QR o directamente entrar en el link:  <a href="https://wa.link/huzji4" target="_blank" rel="noopener noreferrer">wa.link/huzji4</a></p>
                                <img src={qr} alt="Código QR" className="qr-code" />
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AbonoInfo;

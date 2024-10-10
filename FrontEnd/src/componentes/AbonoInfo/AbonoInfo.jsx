import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    const [selectedBank, setSelectedBank] = useState(null);
    const [showAccountNumber, setShowAccountNumber] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!servicio) {
        return <div className='error-message'>Error: Servicio no disponible</div>;
    }

    const abono = servicio.precio * 0.5;

    const handleBankSelection = (bank) => {
        setSelectedBank(bank);
        setShowAccountNumber(false);
    };

    const handleShowAccountNumber = () => {
        setShowAccountNumber(true);
    };

    const getAccountNumber = () => {
        switch (selectedBank) {
            case 'Bancolombia': return '75227070421';
            case 'Nequi': return '3168978439';
            case 'Daviplata': return '3168978439';
            default: return '';
        }
    };

    const BankInfo = ({ bank, logo, accountType }) => (
        <div className="bank-info">
            <img src={logo} alt={`Logo ${bank}`} className="bank-logo" />
            <p className="account-number">
                <i className="fas fa-credit-card"></i> <strong>{`Cuenta ${accountType}:`}</strong> 
                {showAccountNumber && selectedBank === bank ? getAccountNumber() : '**** **** **** ' + getAccountNumber().slice(-2)}
            </p>
            <button onClick={() => handleBankSelection(bank)}>{`Seleccionar ${bank}`}</button>
        </div>
    );

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
                    <br />
                    <div className='card-subtitle'>
                        {loading ? (
                            <Skeleton height={30} width={500} />
                        ) : (
                            <h4 className='card-subtitle'>Estamos a un paso para confirmar tu cita, debes realizar un abono del 50% del costo del servicio.</h4>
                        )}
                    </div>
                    <br />
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
                        <br />
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
                                <h3><i className="fas fa-university"></i> Métodos de pago y bancos aliados</h3>
                                <BankInfo bank="Bancolombia" logo={bancolombia} accountType="ahorros Bancolombia" />
                                <BankInfo bank="Nequi" logo={nequi} accountType="Nequi" />
                                <BankInfo bank="Daviplata" logo={daviplata} accountType="Daviplata" />
                                <br />
                                <button onClick={handleShowAccountNumber}>Aceptar y Ver Número</button>
                                <button className='go-home-button' onClick={() => navigate('/CitaPend')}>Ver Mis citas</button>
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
                                <br />
                                <p>Recuerda que cuando realices tu pago al número de cuenta, deberás enviar tus datos al siguiente enlace de WhatsApp especificando tu nombre:</p>
                                <p>Puedes escanear el código QR o directamente entrar en el link: <a href="https://wa.link/huzji4" target="_blank" rel="noopener noreferrer">wa.link/huzji4</a></p>
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
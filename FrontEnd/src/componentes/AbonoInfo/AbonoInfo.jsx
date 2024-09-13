import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AbonoInfo.css';
import qr from '../../assets/images/qr.png';
import bancolombia from '../../assets/images/bancolombia.png';

const AbonoInfo = () => {
    const location = useLocation();
    const { servicio } = location.state || {};
    const navigate = useNavigate();

    if (!servicio) { 
        return <div className='error-message'>Error: Servicio no disponible</div>;
    }

    const abono = servicio.precio * 0.5;

    return (
        <div className='abono-info-container'>
            <div className='abono-info-card'>
                <div className='info-column'>
                    <h1 className='card-title'>Información de Abono</h1>
                    <h4 className='card-subtitle'>Estamos a un paso para confirmar tu cita, debes realizar un abono del 50% del costo del servicio.</h4>
                    <div className='additional-info'>
                        <div className='cost-details'>
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
                        </div>
                        <p>El administrador validará tu pago y confirmará tu cita.</p>
                        <p>Muchas gracias por preferirnos.</p>
                    </div>
                </div>

                <div className='info-column'>
                    <div className='service-info'>
                        <h5><i className="fas fa-tag"></i> Servicio Seleccionado:</h5>
                        <p><strong>Nombre del Servicio:</strong> {servicio.nombre_servicio}</p>
                    </div>

                    <div className='payment-info'>
                        <p><i className="fas fa-university"></i> El pago lo debes realizar a través de <strong> BANCOLOMBIA:</strong></p>
                        <img src={bancolombia} alt="Logo Bancolombia" className="bancolombia-logo" />
                        <div className="personal">
                            <br></br>
                            <br></br>
                            <p><i className="fas fa-credit-card"></i> <strong>Cuenta ahorros:</strong> xxxxxxxxxxxxxxx</p>
                            <p><i className="fas fa-user"></i> <strong>Nombre Propietario:</strong> Natalia Salazar</p>
                            <p><i className="fas fa-id-card"></i> <strong>Cédula:</strong> xxxxxxxxx</p>
                            <p><i className="fas fa-phone"></i> <strong>Teléfono:</strong> 316 897 8439</p>
                        </div>
                    </div>
                </div>

                <div className='info-column'>
                    <div className='consideraciones'>
                        <h2>Antes de continuar</h2>
                        <p>Recuerda que cuando realices tu pago al número de cuenta, deberás enviar tus datos al siguiente enlace de WhatsApp especificando tu nombre:</p>
                        <p>Puedes escanear el código QR o directamente entrar en el link :  <a href="https://wa.link/huzji4" target="_blank" rel="noopener noreferrer">wa.link/huzji4</a></p>
                        <img src={qr} alt="Código QR" className="qr-code" />
                    </div>
                    <button className='go-home-button' onClick={() => navigate('/CitaPend')}>Ver Mis citas</button>
                </div>
            </div>
        </div>
    );
};

export default AbonoInfo;

// src/components/AbonoInfo.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AbonoInfo.css';

const AbonoInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { servicio } = location.state || {}; // Usa un valor predeterminado para evitar errores

    if (!servicio) {
        return <div className='error-message'>Error: Servicio no disponible</div>;
    }

    const abono = servicio.precio * 0.5;

    return (
        <div className='abono-info-container'>
            <div className='abono-info-card'>
                <h1 className='card-title'>Información de Abono</h1>
                <h4 className='card-subtitle'>Estamos a un paso para confirmar tu cita, debes realizar un abono del 50% del costo del servicio.</h4>

                <div className='service-info'>
                    <h5><i className="fas fa-tag"></i> Servicio Seleccionado:</h5>
                    <p><strong>Nombre del Servicio:</strong> {servicio.nombre_servicio}</p>
                </div>

                <div className='payment-info'>
                    <p><i className="fas fa-university"></i> El pago lo debes realizar a través de esta cuenta de BANCOLOMBIA:</p>
                    <div className="personal">
                        <p><i className="fas fa-credit-card"></i> <strong>Cuenta ahorros:</strong> xxxxxxxxxxxxxxx</p>
                        <p><i className="fas fa-user"></i> <strong>Nombre Propietario:</strong> Natalia Salazar</p>
                        <p><i className="fas fa-id-card"></i> <strong>Cédula:</strong> xxxxxxxxx</p>
                        <p><i className="fas fa-phone"></i> <strong>Teléfono:</strong> xxxxxxxxx</p>


                    </div>

                </div>

                <div className='cost-details'>
                    <p><strong>Costo total del servicio:</strong> {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2
                    }).format(servicio.precio)}</p>
                    <p><strong>Abono a pagar:</strong> {new Intl.NumberFormat('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2
                    }).format(abono)}</p>
                </div>

                <div className='additional-info'>
                    <p>El administrador validará tu pago y confirmará tu cita</p>

                    <p>Muchas gracias por preferirnos.</p>
                    <div className="status-info">
                    <p>Puedes mirar el estado de tu cita aquí abajo <i className="fas fa-arrow-down"></i></p>
                </div>

                </div>

                <Button className='go-home-button' onClick={() => navigate('/CitaPend')}>Ver Mis citas </Button>
            </div>
        </div>
    );
};

export default AbonoInfo;

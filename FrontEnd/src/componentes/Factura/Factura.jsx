import React from 'react';
import '../Factura/Factura.css';
import { NavLink } from 'react-router-dom';

export const Facturaser = () => {
    return (
        <body>
        <div className='apartadoizquiero_factura'>
            <h2> Estas a un paso de reserva tu cita con nosotros</h2>
            <button> Confirmar </button>
        </div>
        <div className='apartadoderecho_factura'>
            
            <table>
                <thead>
                    <tr><h2> Factura</h2></tr>
                </thead>
                <tbody>
                    <tr>
                    <tr>
                    <th>ID Factura</th>
                    <th>factura</th>
                    </tr>
                    <tr>
                    <th>Profesional</th>
                    <th>nombre</th>
                    </tr>
                    
                        <tr> 
                            <th>Cliente</th>
                            <th>nombre cliente</th>
                            </tr>
                   <tr>
                    <th>Servicio</th>
                    <th>nombre servicio</th>
                   </tr>
                    <tr>
                        <th>Costo</th>
                        <th>cuanto pagar</th>
                        </tr>
                    <tr>
                        <th>Fecha</th>
                        <th>fecha agendamiento</th>
                        </tr>
                    <tr>
                        <th>Hora</th>
                        <th>Servicio agendado</th>
                        </tr>
                    
                    </tr>
                </tbody>
            </table>
        </div>
        </body>
        );
    };
export default Facturaser;
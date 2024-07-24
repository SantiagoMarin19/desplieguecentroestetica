import React from 'react';
import '../Factura/Factura.css';
import { NavLink, useLocation } from 'react-router-dom';



export const Facturaser = () => {

    const location = useLocation();
    const { service } = location.state || { service: { name: "Servicio no especificado", price: "$0.00" } };

    return (
        <div>
        <div className='apartadoizquiero_factura'>
            <h2> Estas a un paso de reserva tu cita con nosotros</h2>
            <button> Confirmar </button>
        </div>
        <div className='apartadoderecho_factura'>
            
            <table>
                <thead>
                    <tr>Factura</tr>
                </thead>
                <tbody>
                    <tr>
                    <tr>
                    <th>ID Factura</th>
                    <td>factura</td>
                    </tr>
                    <tr>
                    <th>Profesional</th>
                    <td>nombre</td>
                    </tr>
                    
                        <tr> 
                            <th>Cliente</th>
                            <td>nombre cliente</td>
                            </tr>
                   <tr>
                    <th>Servicio</th>
                    <td>{service.name}</td>
                   </tr>
                    <tr>
                        <th>Costo</th>
                        <td>{service.price}</td>
                        </tr>
                    <tr>
                        <th>Fecha</th>
                        <td>fecha agendamiento</td>
                        </tr>
                    <tr>
                        <th>Hora</th>
                        <td>Servicio agendado</td>
                        </tr>
                        <tr>
                        <th colSpan={2}></th>
                        </tr>
                    
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        );
    };
export default Facturaser;
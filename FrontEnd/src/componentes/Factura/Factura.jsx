import React, { useState, useEffect } from 'react';
import '../Factura/Factura.css';
import { useLocation } from 'react-router-dom';


export const Facturaser = () => {

  
      

    const location = useLocation();
    const [servicios, setServicios] = useState([]);
    const { servicio } = useLocation().state || { servicio: { nombre_servicio: "Servicio no especificado", precio: "$0.00" } };
    const selectedHora = localStorage.getItem('selectedHora') || 'No especificada';
    const selectedProfesional = localStorage.getItem('selectedProfesional') || 'No especificado';  
    const selectedDate = new Date(localStorage.getItem('selectedDate')) || new Date();
    const formattedDate = `${selectedDate.getDate()} ${selectedDate.toLocaleDateString('default', { month: 'short' })} ${selectedDate.getFullYear()}`;



    useEffect(() => {
        const fetchProfesionales = async () => {
            const { data, error } = await supabase
                .from('profesional')
                .select('id_profesional, nombre_profesional');

            if (error) {
                console.error('Error fetching profesionales:', error);
            } else {
                setProfesionales(data);
            }
        };

      

        fetchProfesionales();
    }, []);

    useEffect(() => {
        const fetchServicios = async () => {
          const { data, error } = await supabase
            .from('servicios')
            .select('*')
            .eq('estado', true);
          if (error) {
            console.error('Error fetching servicios:', error);
          } else {
            console.log('Servicios:', data);
            setServicios(data);
          }
        };
        fetchServicios();
      }, []);




    return (
        <div>
            <div className='apartadoizquierdo_factura'>
                <h2>Estás a un paso de reservar tu cita con nosotros</h2>
                <button>Confirmar</button>
            </div>
            <div className='apartado_derecho_factura'>
                <table>
                  
                    <tbody>
                      
                        <tr>
                            <th>Profesional</th>
                            <td>{selectedProfesional}</td> {/* Muestra el nombre del profesional */}
                        </tr>
                        <tr>
                            <th>Cliente</th>
                            <td>nombre cliente</td>
                        </tr>
                        <tr>
                            <th>Servicio</th>
                            <td>{servicios.nombre_servicio}</td>
                        </tr>
                        <tr>
                            <th>Costo</th>
                            <td>{servicios.precio}</td>
                        </tr>
                        <tr>
                            <th>Fecha</th>
                            <td>{formattedDate}</td> {/* Muestra la fecha seleccionada */}
                        </tr>
                        <tr>
                            <th>Hora</th>
                            <td>{selectedHora}</td> {/* Muestra la hora seleccionada */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Facturaser;

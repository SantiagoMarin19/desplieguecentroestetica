import React, { useEffect, useState, useCallback } from 'react';
import './Agendamiento.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import supabase from '../../supabase/supabaseconfig';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Agendamiento = () => {
    const [profesionales, setProfesionales] = useState([]);
    const [selectedProfesional, setSelectedProfesional] = useState('');
    const [selectedHora, setSelectedHora] = useState('');
    const [horariosOcupados, setHorariosOcupados] = useState([]);
    const [franjasHorarias, setFranjasHorarias] = useState([]);
    const [date, setDate] = useState(null);
    const [userId, setUserId] = useState(null);
    const [loadingProfesionales, setLoadingProfesionales] = useState(true);
    const [loadingFranjas, setLoadingFranjas] = useState(false);
    const [loadingHorarios, setLoadingHorarios] = useState(false);
    const [notification, setNotification] = useState({ message: '', type: 'success' });
    const [isModalOpen, setIsModalOpen] = useState(false); // Controla el modal
    const [modalMessage, setModalMessage] = useState(''); // Mensaje del modal
    const navigate = useNavigate();
    const { servicio } = useLocation().state || { servicio: { nombre_servicio: "Servicio no especificado", precio: "$0.00" } };
    
    // Fetch user and professionals data
    const fetchProfesionales = useCallback(async () => {
        setLoadingProfesionales(true);
        const { data, error } = await supabase
            .from('profesional')
            .select('id_profesional, nombre_profesional, especialidad')
            .eq('estado', true) // Solo selecciona profesionales activos
            .order('nombre_profesional', { ascending: true }); // Ordena alfabéticamente

            if (error) {
                setModalMessage('Error al cargar profesionales. Por favor, intente más tarde.');
                setIsModalOpen(true);
        } else {
            setProfesionales(data || []);
        }
        setLoadingProfesionales(false);
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data) {
                setUserId(data.user.id);
            }else {
                setModalMessage('Error al obtener información del usuario. Por favor, inicie sesión nuevamente.');
                setIsModalOpen(true);
            }
        };

        fetchUser();
        fetchProfesionales();
    }, [fetchProfesionales]);
    
    useEffect(() => {
        const fetchFranjasHorarias = async () => {
            if (date && selectedProfesional && servicio) {
                setLoadingFranjas(true);
                const selectedDate = date.toISOString().split('T')[0];
                const { data, error } = await supabase
                    .from('franja_horaria')
                    .select('id_horario, hora, estado, fecha')
                    .eq('fecha', selectedDate)
                    .eq('id_profesional', selectedProfesional.id_profesional) // Filtra por el profesional seleccionado
                    .eq('nombre_servicio', servicio.nombre_servicio); // Filtra por el servicio seleccionado
    
                console.log('Franjas horarias fetch:', data);
                if (error) {
                    setModalMessage('Error buscando las horas disponibles.');
                    setIsModalOpen(true);
                } else {
                    setFranjasHorarias(data || []);
                }
                setLoadingFranjas(false);
            }
        };
    
        fetchFranjasHorarias();
    }, [date, selectedProfesional, servicio]);
    
    
    useEffect(() => {
        const fetchHorariosOcupados = async () => {
            if (selectedProfesional && date && servicio) {
                setLoadingHorarios(true);
                const selectedDate = date.toISOString().split('T')[0];
                const { data, error } = await supabase
                    .from('cita')
                    .select('duracion')
                    .eq('profesional', selectedProfesional.id_profesional)
                    .eq('fecha', selectedDate)
                    .eq('servicio', servicio.id_servicios);
    
                console.log('Horarios ocupados fetch:', data); // <-- Agrega log
                if (error) {
                    setModalMessage('Error buscando los horarios ocupados.');
                    setIsModalOpen(true);
                } else {
                    setHorariosOcupados(data.map(cita => cita.duracion) || []);
                }
                setLoadingHorarios(false);
            }
        };
    
        fetchHorariosOcupados();
    }, [selectedProfesional, date, servicio]);
    
    const handleProfesionalChange = (event) => {
        const selectedId = event.target.value;
        const profesional = profesionales.find(p => p.id_profesional === parseInt(selectedId));
        setSelectedProfesional(profesional);
        localStorage.setItem('selectedProfesional', JSON.stringify(profesional));
        setSelectedHora('');
        setHorariosOcupados([]);
        setDate(null); // Resetea la fecha seleccionada
        setFranjasHorarias([]); // Limpia las franjas horarias
    };

    const isOcupado = (franjaId) => {
        return horariosOcupados.includes(franjaId);
    };
    
    const handleHorarioClick = (horario) => {
        if (horariosOcupados.includes(horario.hora)) {
            setModalMessage('Este horario ya está ocupado.');
            setIsModalOpen(true);
        } else {
            // Seleccionar el horario normalmente
            setSelectedHora(horario.hora);  // Cambié 'setSelectedHorario' por 'setSelectedHora'
        }
    };
    
    
    const handleReservarClick = (event) => {
        event.preventDefault();

        if (!selectedProfesional || !selectedHora) {
            setModalMessage('Por favor, selecciona un profesional y una hora.');
            setIsModalOpen(true);
            return;
        }

        navigate('/Facturacion', {
            state: {
                fecha: date,
                duracion: selectedHora,
                idProfesional: selectedProfesional.id_profesional,
                nombre_profesional: selectedProfesional.nombre_profesional,
                servicio: {
                    id_servicios: servicio.id_servicios,
                    nombre_servicio: servicio.nombre_servicio,
                    precio: servicio.precio
                },
            }
        });
    };

    const tileDisabled = ({ date }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date.toDateString() === today.toDateString()) {
            console.log('No se puede seleccionar el día actual. Por favor, elige una fecha futura.');
            return true;
        }
        return date < today;
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMessage('');
    };

     // Función para mostrar notificación y desaparecerla automáticamente
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null); // Limpiar la notificación después de 3 segundos
        }, 3000);
    };
    
    return (
        <div className='agendamiento-container'>

{isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalMessage}</p>
                    </div>
                </div>
            )}

            <div className='header_agendamiento'>
                <h3>Agenda Tu Cita Para: {servicio.nombre_servicio} </h3>
            </div>

            <div className='main-content'>
                <div className='left-section'>
                    <div className='seleccion-container'>
                        <h3>Elige un Profesional</h3>
                        <div className='select_contenedor_profesionales'>
                            {loadingProfesionales ? (
                                <Skeleton height={40} />
                            ) : (
                                <select 
                                    className="select_profesional" 
                                    onChange={handleProfesionalChange} 
                                    value={selectedProfesional?.id_profesional || ''}
                                >
                                    <option value=''>--Escoge profesional--</option>
                                    {profesionales.map(profesional => (
                                        <option key={profesional.id_profesional} value={profesional.id_profesional}>
                                            {profesional.nombre_profesional} - {profesional.especialidad}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>

                    <div className='hr'>
                        <hr />
                    </div>

                    <div className='titulo_calendario_escoger_fecha'>
                        <h3>Escoge La fecha</h3>
                        <p>Selecciona el día de tu cita</p>
                    </div>

                    <div className='seccion_calendario_escoger_fecha'>
                        <div className='calendario-container'>
                            <Calendar 
                                className="react_calendar_fecha" 
                                onChange={setDate} 
                                value={date} 
                                tileDisabled={tileDisabled} 
                            />

                            <div className='horarios-container'>
                                <div className='titulo_horarios'>
                                    <h3>Horarios Disponibles</h3>
                                </div>


                                
                                <div className="horarios-disponibles">
                                    {loadingFranjas ? ( <Skeleton height={40} count={5} />) : (
                                        franjasHorarias.map(franja => (
                                        <button key={franja.id_horario} onClick={() => handleHorarioClick(franja)}
                                        disabled={horariosOcupados.includes(franja.hora)} className={`horario-btn ${horariosOcupados.includes(franja.hora) ? 'ocupado' : 'disponible'}`}>
                                            {franja.hora}                                            
                                            </button>
                                            ))
                                            )}
                                            </div>
                                             </div>
                                              </div>
                                               </div>
                                                </div>
                                                
                        <div className='right-section'>
                            <div className='Resumendecompra_Agendamiento'>
                                <div className='titulo_Resumendecompra_Agendamiento'>
                                    <h3>Resumen de Compra</h3></div>
                                    <table>
                                        <thead>
                                <tr>
                                    <th colSpan={2}>
                                        {date ? `${date.getDate()} ${date.toLocaleDateString('default', { month: 'short' })} ${date.getFullYear()} - ${selectedHora}` : 'Selecciona una fecha'}
                                    </th>
                                </tr>
                                <tr>
                                    <th>Profesional</th>
                                    <td>{selectedProfesional ? selectedProfesional.nombre_profesional : ''}</td>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Servicio</th>
                                    <td>{servicio.nombre_servicio}</td>
                                </tr>
                                <tr>
                                    <th>Hora</th>
                                    <td>{selectedHora }</td>
                                </tr>
                                <tr>
                                    <th>Costo</th>
                                    <td>
                                        {servicio.precio ? (
                                            <h5><b>{new Intl.NumberFormat('es-CO', {
                                                style: 'currency',
                                                currency: 'COP',
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 2
                                            }).format(servicio.precio)}</b></h5>
                                        ) : (
                                            <Skeleton width={100} height={20} />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td  colSpan={2}>
                                        <button className='go-home-button-reserva' onClick={handleReservarClick}>Reservar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agendamiento;

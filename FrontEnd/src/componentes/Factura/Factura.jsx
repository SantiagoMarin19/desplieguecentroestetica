import React, { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import './Factura.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FacturacionModal = ({ token }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { fecha, duracion, idProfesional, servicio, idUsuario } = state;
    const parsedFecha = fecha ? new Date(fecha) : null;
    const formattedFecha = parsedFecha && !isNaN(parsedFecha) ? parsedFecha.toLocaleDateString() : 'Fecha no disponible';
    const [user, setUser] = useState(null);
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [idHorario, setIdHorario] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Error fetching user:', error);
            } else {
                setUser(data.user);
            }
        };

        const fetchNombreProfesional = async () => {
            if (idProfesional) {
                const { data, error } = await supabase
                    .from('profesional')
                    .select('nombre_profesional')
                    .eq('id_profesional', idProfesional)
                    .single();

                if (error) {
                    console.error('Error fetching professional name:', error);
                } else {
                    setNombreProfesional(data?.nombre_profesional || '');
                }
            }
        };

        const fetchIdHorario = async () => {
            if (duracion) {
                const { data, error } = await supabase
                    .from('franja_horaria')
                    .select('id_horario')
                    .eq('hora', duracion.trim());

                if (error) {
                    console.error('Error fetching horario ID:', error);
                } else if (data.length > 0) {
                    setIdHorario(data[0].id_horario);
                } else {
                    setIdHorario(null);
                }
            }
        };

        Promise.all([fetchUser(), fetchNombreProfesional(), fetchIdHorario()]).then(() => {
            setLoading(false);
        });
    }, [idProfesional, idUsuario, idHorario, token, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            window.alert('Por favor, inicie sesión para continuar.');
            return;
        }
    
        if (!idHorario) {
            console.error('No se pudo obtener el id_horario para la duración.');
            setModalMessage('No se pudo obtener el id_horario para la duración.');
            setShowModal(true);
            return;
        }
    
        const { data, error } = await supabase
            .from('cita')
            .insert([{
                fecha: fecha.toISOString().split('T')[0],
                profesional: idProfesional,
                servicio: servicio?.id_servicios,
                usuarios: user.id,
                duracion: duracion,
                estado: 'FALSE'
            }]);
    
        if (error) {
            setModalMessage(`Error al guardar la cita: ${error.message}`);
        } else {
            setModalMessage('Cita guardada con éxito. Un administrador verificará tu cita.');
            setShowModal(true);
            // Redirigir a la página de abono, pasando el servicio en el estado de la navegación
            setTimeout(() => navigate('/abono-info', { state: { servicio } }), 3000);
        }
    };
    
    return (
        <div className='contenedor_facturacion'>
            <div className="facturacion-container">
                <div className="invoice-header">
                    <h1>Natalia Salazar Artist</h1>
                    <hr />
                </div>

                <div className='explicacion_factura'>
                    {loading ? <Skeleton width={200} height={30} /> : <h2>Fecha: {formattedFecha}</h2>}
                </div>

                <div className="invoice-body">
                    <div className="invoice-section">
                        <div className='titulo_invoice-section'>
                            <p>Detalles de la Cita</p>
                            <hr />
                        </div>

                        {loading ? (
                            <>
                                <Skeleton width={200} height={20} />
                                <Skeleton width={200} height={20} />
                                <Skeleton width={200} height={20} />
                                <Skeleton width={200} height={20} />
                                <Skeleton width={200} height={20} />
                            </>
                        ) : (
                            <>
                                <p><strong>Hora:</strong> {duracion}</p>
                                <p><strong>Profesional:</strong> {nombreProfesional}</p>
                                <p><strong>Servicio:</strong> {servicio?.nombre_servicio}</p>
                                <p><strong>Costo:</strong> <b>{new Intl.NumberFormat('es-CO', {
                                    style: 'currency',
                                    currency: 'COP',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2
                                }).format(servicio.precio)}</b></p>
                                <p><strong>Cliente:</strong> {user ? user.user_metadata.full_name : 'No disponible'}</p>
                            </>
                        )}
                    </div>
                </div>

                <div className="invoice-footer">
                    <Button onClick={handleGuardarCita} disabled={loading}>Confirmar Cita</Button>
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalMessage}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default FacturacionModal;

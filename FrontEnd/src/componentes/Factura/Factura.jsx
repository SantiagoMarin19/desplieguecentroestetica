import React, { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useModal } from '../modal/ContextModal'; // Importar el hook useModal
import './Factura.css';

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
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const { openModal, closeModal } = useModal(); // Usar el hook useModal

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

        fetchUser();
        fetchNombreProfesional();
        fetchIdHorario();
    }, [idProfesional, idUsuario, idHorario, token, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            setAlertMessage('Por favor, inicie sesión para continuar.');
            setShowNotificationModal(true);

            // Cierra el modal de notificación y abre el modal de inicio de sesión después de 2 segundos
            setTimeout(() => {
                setShowNotificationModal(false);
                openModal('login'); // Abre el modal de inicio de sesión
                // Aquí puedes manejar la lógica para redirigir a la página deseada después de un inicio de sesión exitoso
            }, 2000);

            return;
        }
    
        if (!idHorario) {
            window.alert('No se pudo obtener el id_horario para la duración.');
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
                estado: false
            }]);
    
        if (error) {
            window.alert(`Error al guardar la cita: ${error.message}`);
        } else {
            // Redirigir a AbonoInfo después de 1 segundo
            setTimeout(() => navigate('/abono-info', { state: { servicio } }), 1000);
        }
    };

    const handleModalClose = () => {
        setShowNotificationModal(false);
        window.location.reload(); // Recarga la página al cerrar el modal de notificación
    };

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
        window.location.reload(); // Recarga la página si el modal de inicio de sesión se cierra sin iniciar sesión
    };

    return (
        <div className='contenedor_facturacion'>
            <div className="facturacion-container">
                <div className="invoice-header">
                    <h1>Natalia Salazar Artist</h1>
                    <hr />
                </div>

                <div className='explicacion_factura'>
                    <h2>Fecha: {formattedFecha}</h2>
                </div>

                <div className="invoice-body">
                    <div className="invoice-section">
                        <div className='titulo_invoice-section'>
                            <p>Detalles de la Cita</p>
                            <hr />
                        </div>

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
                    </div>
                </div>

                <div className="invoice-footer">
                    <Button onClick={handleGuardarCita}>Confirmar Cita</Button>
                </div>
            </div>

            {/* Modal de notificación */}
            <Modal show={showNotificationModal} onHide={handleModalClose}>
                
                    <Modal.Title>Notificación</Modal.Title>
                
                <Modal.Body>{alertMessage}</Modal.Body>
                <Modal.Footer>
                 
                </Modal.Footer>
            </Modal>

            {/* Modal de inicio de sesión */}
            <Modal show={showLoginModal} onHide={handleLoginModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleLoginModalClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FacturacionModal;

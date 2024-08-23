import React, { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const FacturacionModal = ({ show, onHide, fecha, duracion, idProfesional, servicio }) => {
    const [user, setUser] = useState(null);
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [idHorario, setIdHorario] = useState(null);
    const [modalMessage, setModalMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate(); // Inicializa useNavigate

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
                    .from('franja_horario')
                    .select('id_horario')
                    .eq('horario', duracion)
                    .single();

                if (error) {
                    console.error('Error fetching horario ID:', error);
                } else {
                    setIdHorario(data?.id_horario || null);
                }
            }
        };

        fetchUser();
        fetchNombreProfesional();
        fetchIdHorario();
    }, [idProfesional, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            window.alert('Por favor, inicie sesión para continuar.');
            return;
        }

        const { data, error } = await supabase
            .from('cita')
            .insert([{
                fecha: fecha.toISOString().split('T')[0],
                franja_horaria: idHorario,
                profesional: idProfesional,
                servicio: servicio?.id_servicios,
                usuarios: user.id,
                duracion: duracion,
                estado: 'true'
            }]);

        if (error) {
            setModalMessage(`Error al guardar la cita: ${error.message}`);
        } else {
            setModalMessage('Su cita ha sido asignada y está en proceso de confirmación.');
            setTimeout(onHide, 4500); 

            setShowSuccessMessage(true); // Muestra el mensaje de éxito
            setTimeout(() => {
                onHide();
                navigate('/servicios'); // Redirige después de cerrar el modal
            }, 2500); 
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Cita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showSuccessMessage ? (
                    <p>{modalMessage}</p>
                ) : (
                    <>
                        <p>Fecha: {fecha.toLocaleDateString()}</p>
                        <p>Duración: {duracion}</p>
                        <p>Profesional: {nombreProfesional}</p>
                        <p>Servicio: {servicio?.nombre_servicio}</p>
                        <p>Costo: {servicio?.precio}</p>
                        <p>Cliente: {user ? user.user_metadata.full_name : 'No disponible'}</p>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                {!showSuccessMessage && <Button variant="primary" onClick={handleGuardarCita}>Guardar Cita</Button>}
            </Modal.Footer>
        </Modal>
    );
};

export default FacturacionModal;

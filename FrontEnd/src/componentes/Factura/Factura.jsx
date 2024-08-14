import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Facturacion = ({ token }) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { fecha, duracion, idProfesional, servicio, idUsuario } = state;

    const [user, setUser] = useState(null);
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [idHorario, setIdHorario] = useState(null); // Nuevo estado para almacenar el id_horario
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            if (token && token.user) {
                setUser(token.user);
            } else {
                const { data, error } = await supabase.auth.getUser();
                if (error) {
                    console.error('Error fetching user:', error);
                } else {
                    setUser(data.user);
                }
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

        const fetchNombreUsuario = async () => {
            if (idUsuario) {
                const { data, error } = await supabase
                    .from('usuarios')
                    .select('nombre_usuario')
                    .eq('id', idUsuario)
                    .single();

                if (error) {
                    console.error('Error fetching user name:', error);
                } else {
                    setNombreUsuario(data?.nombre_usuario || '');
                }
            }
        };

        const fetchIdHorario = async () => {
            if (duracion) {
                const { data, error } = await supabase
                    .from('franja_horaria')
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
        fetchNombreUsuario();
        fetchIdHorario(); // Llama para obtener el id_horario
    }, [idProfesional, idUsuario, token, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            window.alert('Por favor, inicie sesión para continuar.');
            navigate('/loginsupa');
            return;
        }

        if (!idHorario) {
            console.error('No se pudo obtener el id_horario para la duración.');
            setModalMessage('No se pudo obtener el id_horario para la duración.');
            setShowModal(true);
            return;
        }

        console.log('Guardando cita con los siguientes datos:');
        console.log('Fecha:', fecha);
        console.log('Horario ID:', idHorario);
        console.log('Profesional:', nombreProfesional);
        console.log('Servicio:', servicio.nombre_servicio);
        console.log('Usuario ID:', user.id);

        const { data, error } = await supabase
            .from('cita')
            .insert([{
                fecha: fecha.toISOString().split('T')[0], // Guardar la fecha
                franja_horaria: idHorario, // Usar id_horario en lugar de duración
                profesional: idProfesional, // Usar el id del profesional
                servicio: servicio.nombre_servicio,
                usuarios: user.id, // Guardar el ID del usuario registrado
                estado: 'true'
            }]);

        if (error) {
            console.error('Error al guardar la cita:', error);
            setModalMessage(`Error al guardar la cita: ${error.message}`);
            setShowModal(true);
        } else {
            console.log('Cita guardada con éxito:', data);
            setModalMessage('Cita guardada con éxito');
            setShowModal(true);
            setTimeout(() => navigate('/'), 1500); // Redirigir después de mostrar el modal
        }
    };

    return (
        <div>
            <h3>Confirmar Cita</h3>
            <p>Fecha: {fecha.toLocaleDateString()}</p>
            <p>Duración: {duracion}</p>
            <p>Profesional: {nombreProfesional}</p>
            <p>Servicio: {servicio.nombre_servicio}</p>
            <p>Costo: {servicio.precio}</p>
            <p>Cliente: {user ? user.user_metadata.full_name : 'No disponible'}</p>

            <Button onClick={handleGuardarCita}>Continuar</Button>

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
    );
};

export default Facturacion;

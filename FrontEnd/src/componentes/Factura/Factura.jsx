import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Facturacion = ({ token }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Obtener la ubicación actual
    const { state } = location;
    const { fecha, duracion, idProfesional, servicio, idUsuario } = state;
    console.log(servicio);

    const [user, setUser] = useState(null);
    const [nombreProfesional, setNombreProfesional] = useState('');
    const [idHorario, setIdHorario] = useState(null);
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
        // const fetchservicio = async () => {
        //     if (servicio) {
        //         const { data, error } = await supabase
        //             .from('servicios')
        //             .select('nombre_servicio')
        //             .eq('id_servicio', servicio)
        //             .single();

        //         if (error) {
        //             console.error('Error fetching professional name:', error);
        //         } else {
        //             setNombreServicio(data?.nombre_servicio || '');
        //         }
        //     }
        // };
        

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
                console.log('Duracion:', duracion); // Verificar que la duración es correcta
                const { data, error } = await supabase
                    .from('franja_horario')
                    .select('id_horario')
                    .eq('horario', duracion) // Usa la variable `duracion` aquí
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
        // fetchservicio();
    }, [idProfesional, idUsuario, token, duracion]);

    const handleGuardarCita = async () => {
        if (!user) {
            window.alert('Por favor, inicie sesión para continuar.');
            navigate('/loginsupa', { state: { from: '/Facturacion' } });
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
        console.log('Profesional:', idProfesional);
        console.log('Servicio ID:', servicio?.id_servicios); 
        console.log('Usuario ID:', user.id);
        console.log('Duracion:', duracion);

        const { data, error } = await supabase
            .from('cita')
            .insert([{
                fecha: fecha.toISOString().split('T')[0], // Guardar la fecha
                franja_horaria: idHorario,
                profesional: idProfesional,
                servicio: servicio?.id_servicios, // Asegurarse de que id_servicio existe
                usuarios: user.id,
                duracion: duracion, // Guardar la duración como string
                estado: 'true'
            }]);

        if (error) {
            console.error('Error al guardar la cita:', error);
            setModalMessage(`Error al guardar la cita: ${error.message}`);
            setShowModal(true);
        } else {
            console.log('Cita guardada con éxito:', data);
            setModalMessage('Cita guardada con éxito. Un administrador verificará tu cita.');
            setShowModal(true);
            setTimeout(() => navigate('/'), 1500);
        }
    };

    return (
        <div>
            <h3>Confirmar Cita</h3>
            <p>Fecha: {fecha.toLocaleDateString()}</p>
            <p>Duración: {duracion}</p>
            <p>Profesional: {nombreProfesional}</p>
            <p>Servicio: {servicio?.nombre_servicio}</p>
            <p>Costo: {servicio?.precio}</p>
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

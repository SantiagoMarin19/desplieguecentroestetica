import { useState, useEffect } from 'react';
import supabase from '../../supabase/supabaseconfig';
import { ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cipendendientes.css';

const CitasPendientes = ({ token }) => {
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState(null);

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

        const fetchAppointments = async () => {
            if (user) {
                const { data, error } = await supabase
                    .from('cita')
                    .select(`
                        fecha,
                        duracion,
                        estado,
                        profesional (
                            nombre_profesional
                        ),
                        servicio (
                            nombre_servicio
                        )
                    `)
                    .eq('usuarios', user.id);

                if (error) {
                    console.error('Error fetching appointments:', error);
                } else {
                    setAppointments(data || []);
                }
            }
        };

        fetchUser();
        if (user) {
            fetchAppointments();
        }
    }, [token, user]);

    return (
        <Container>
            <div className='titulo_citas'>
            <h3>Tus Citas Pendientes  </h3></div>
            
            {appointments.length === 0 ? (
                <p>No tienes citas programadas. Porfavor inicia session para verificar tus citas </p>
            ) : ( 
                <ListGroup>
                    {appointments.map((appointment, index) => (
                        <ListGroup.Item key={index}>
                            <p>Fecha: {new Date(appointment.fecha).toLocaleDateString()}</p>
                            <p>Duración: {appointment.duracion}</p>
                            <p>Profesional: {appointment.profesional.nombre_profesional}</p>
                            <p>Servicio: {appointment.servicio.nombre_servicio}</p>
                            <p>Estado: {appointment.estado ? 'Confirmada' : 'Pendiente'}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>

       
    );
};

export default CitasPendientes;

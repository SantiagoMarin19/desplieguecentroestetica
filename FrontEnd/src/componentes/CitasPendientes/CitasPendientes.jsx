import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabase/supabaseconfig';
import "./CitasPendientes.css";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';

const CitasPendientes = ({ token }) => {
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            let currentUser;
            if (token && token.user) {
                currentUser = token.user;
            } else {
                const { data, error } = await supabase.auth.getUser();
                if (error) {
                    console.error('Error fetching user:', error);
                    setLoading(false);
                    return;
                } else {
                    currentUser = data.user;
                }
            }
            if (currentUser) {
                setUser(currentUser);
                setUserName(currentUser.user_metadata.full_name);
                localStorage.setItem('userName', currentUser.user_metadata.full_name);
            }
            setLoading(false);
        };

        fetchUser();
    }, [token]);

    useEffect(() => {
        const fetchAppointments = async () => {
            if (user) {
                const { data, error } = await supabase
                    .from('cita')
                    .select(`fecha, duracion, estado, profesional (nombre_profesional), servicio (nombre_servicio, url_img, precio)`)
                    .eq('usuarios', user.id);

                if (error) {
                    console.error('Error fetching appointments:', error);
                } else {
                    setAppointments(data || []);
                }
            }
        };

        if (user) {
            fetchAppointments();
        }
    }, [user]);

    const handleButtonClick = (servicio) => {
        navigate('/abono-info', { state: { servicio } });
    };

    const getStatusClass = (estado) => {
        return estado ? 'status-confirmada' : 'status-pendiente';
    };

    const getStatusText = (estado) => {
        return estado ? 'Confirmada' : 'Pendiente';
    };

    const isPending = (estado) => !estado; // Define si la cita está pendiente

    return (
        <Container className='citaspendientesbody'>
            <h3 className='citaspendientestitulo'>
                {loading ? <Skeleton width={250} height={30} /> : `Tus Citas Pendientes, ${userName}`}
            </h3>
            {loading ? (
                <div>
                    <Skeleton count={5} height={150} />
                </div>
            ) : (
                appointments.length === 0 ? (
                    <p>No tienes citas programadas. Por favor inicia sesión para verificar tus citas.</p>
                ) : (
                    <div className='cartacompletacitas'>
                       {appointments.map((citas, index) => (
    <div key={index} className='contenedorcarta'>
        <div className='subcarta'>
            {loading ? (
                <Skeleton height={100} width={100} />
            ) : (
                <img src={citas.servicio.url_img} alt={citas.servicio.nombre_servicio} className="imagen-servicio" />
            )}
            {loading ? (
                <>
                    <Skeleton width={200} height={20} />
                    <Skeleton width={300} height={20} />
                    <Skeleton width={250} height={20} />
                    <Skeleton width={250} height={20} />
                    <Skeleton width={150} height={20} />
                </>
            ) : (
                <>
                    <p className='contenedorTitulo'>{citas.servicio.nombre_servicio}</p>
                    <p className='contenedorsubtitulo'><b className='fechaAgendadaSubtitulo'>Fecha:</b> {new Date(citas.fecha).toLocaleDateString()}</p>
                    <p className='contenedorsubtitulo'><b className='fechaAgendadaSubtitulo'>Hora:</b> {moment(citas.duracion, 'HH:mm').format('h:mm A')}</p>
                    <p className='contenedorsubtitulo'><b className='fechaAgendadaSubtitulo'>Profesional:</b> {citas.profesional.nombre_profesional}</p>
                    <p className='contenedorsubtitulo'>
                        <span className={`status-indicator ${getStatusClass(citas.estado)}`}></span>
                        <b className={`estado-text ${getStatusClass(citas.estado)}`}>Estado:</b>
                        <span className={`estado-text ${getStatusClass(citas.estado)}`}>{getStatusText(citas.estado)}</span>
                    </p>
                    <button
                        onClick={() => handleButtonClick(citas.servicio)}
                        disabled={!isPending(citas.estado)} // Deshabilita el botón si no está pendiente
                    >
                        VER ABONO
                    </button>
                </>
            )}
        </div>
    </div>
))}

                 
                    </div>
                )
            )}
        </Container>
    );
};

export default CitasPendientes;

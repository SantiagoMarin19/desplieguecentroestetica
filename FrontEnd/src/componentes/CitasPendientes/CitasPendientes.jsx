import { useState, useEffect } from 'react';
import supabase from '../../supabase/supabaseconfig';

const CitasPendientes = ({ userId }) => {
    const [citas, setCitas] = useState([]);
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCitas = async () => {
            if (!userId) {
                console.error('User ID is required');
                return;
            }

            const { data, error } = await supabase
                .from('cita')
                .select(`
                    id_cita,
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
                .eq('usuarios', userId);

            if (error) {
                console.error('Error fetching citas:', error);
            } else {
                setCitas(data);
            }

            setLoading(false);
        };

        fetchCitas();
    }, [userId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (citas.length === 0) {
        return <p>No tienes citas asignadas.</p>;
    }

    return (
        <div>
            <h3>Mis Citas</h3>
            <ul>
                {citas.map((cita) => (
                    <li key={cita.id_cita}>
                        <h4>{cita.servicio.nombre_servicio}</h4>
                        <p>Fecha: {new Date(cita.fecha).toLocaleDateString()}</p>
                        <p>Duración: {cita.duracion}</p>
                        <p>Profesional: {cita.profesional.nombre_profesional}</p>
                        <p>Estado: {cita.estado ? 'Confirmada' : 'Pendiente'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CitasPendientes;

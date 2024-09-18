import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '../PagesAdmin/Pagination';
import "./Personal.css";
import supabase from '../../supabase/supabaseconfig';

const Personal = ({ token }) => {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const appointmentsPerPage = 5;

  useEffect(() => {
    const fetchUser = async () => {
      if (token?.user) {
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

    fetchUser();
  }, [token]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('cita')
          .select(`
            id_cita,
            fecha,
            duracion,
            estado,
            usuario_id,
            profesional_id,
            servicio_id,
            profesional (
              id_profesional,
              nombre_profesional,
              email
            ),
            servicio (
              id_servicio,
              nombre_servicio
            )`)
          .eq('profesional.email', user.email);

        if (error) {
          console.error('Error fetching appointments:', error);
        } else {
          console.log('Fetched appointments:', data);
          setAppointments(data || []);
        }
        setLoading(false);
      }
    };

    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <div className='titulo_Citas_Admin'>
        <h1>Mis Citas</h1>
      </div>
      <div className='Contenido_Citas_Admin'>
        <hr />
        <p>Aquí encontrarás todas las citas que tienes programadas.</p>
        <hr />
      </div>

      <Table>
        <thead>
          <tr>
            <th>ID Cliente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Duración</th>
            <th>Servicio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {currentAppointments.map((appointment) => (
            <tr key={appointment.id_cita}>
              <td>{appointment.usuario_id}</td>
              <td>{new Date(appointment.fecha).toLocaleDateString()}</td>
              <td>{new Date(appointment.fecha).toLocaleTimeString()}</td>
              <td>{appointment.duracion}</td>
              <td>{appointment.servicio.nombre_servicio}</td>
              <td>{appointment.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {appointments.length === 0 && <p>No tienes citas programadas.</p>}

      <Pagination 
        citasPerPage={appointmentsPerPage} 
        totalCitas={appointments.length} 
        paginate={paginate} 
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #FCEBF2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  th, td {
    padding: 1rem;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  th {
    font-weight: bold;
  }
`;

export default Personal;
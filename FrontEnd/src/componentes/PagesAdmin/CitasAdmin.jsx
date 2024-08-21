import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import "./CitasAdmin.css"
import supabase from '../../supabase/supabaseconfig';

const Citas = ({ token }) => {
  const [citas, setCitas] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const citasPerPage = 5;

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

    fetchUser();
  }, [token]);

  useEffect(() => {
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

    fetchAppointments();
  }, [user]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const { data, error } = await supabase
          .from('cita')
          .select('*');
        if (error) throw error;
        setCitas(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching citas:', error);
        setLoading(false);
      }
    };

    fetchCitas();
  }, []);

  const indexOfLastCita = currentPage * citasPerPage;
  const indexOfFirstCita = indexOfLastCita - citasPerPage;
  const currentCitas = citas.slice(indexOfFirstCita, indexOfLastCita);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAcceptCita = async (cita) => {
    if (window.confirm(`¿Estás seguro de aprobar la cita de ${cita.usuarios} para el ${cita.fecha}?`)) {
      try {
        const { data, error } = await supabase
          .from('citas')
          .update({ estado: 'Abono' })
          .eq('id_cita', cita.id_cita);
        if (error) throw error;
        console.log('Cita aprobada correctamente');
      } catch (error) {
        console.error('Error al aprobar cita:', error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <div className="titulo_Citas_Admin">
        <h1>Sección Citas</h1>
      </div>

      <div className="Header">
        <div className='cliente_Citas_Admin'>
          <h2>Cliente</h2>
        </div>
        <div className='fecha_Citas_Admin'>
          <h2>Fecha</h2>
        </div>
        <div className='hora_Citas_Admin'>
          <h2>Hora</h2>
        </div>
        <div className='duracion_Citas_Admin'>
          <h2>Duración</h2>
        </div>
        <div className='servicio_Citas_Admin'>
          <h2>Servicio</h2>
        </div>
        <div className='estado_Citas_Admin'>
          <h2>Estado</h2>
        </div>
      </div>

      <div className="contenido_header">
        {currentCitas.map((cita, index) => (
          <div key={index} className="fila_Cita">
            <div className="cliente_Admin">
              <p>{cita.usuarios}</p>
            </div>
            <div className="fecha_Admin">
              <p>{cita.fecha}</p>
            </div>
            <div className="hora_Admin">
              <p>{cita.franja_horaria}</p>
            </div>
            <div className="duracion_Admin">
              <p>{cita.duracion}</p>
            </div>
            <div className="servicio_Admin">
              <p>{cita.servicio}</p>
            </div>
            <div className="estado_Admin">
              <p>
                <input 
                  type="checkbox" 
                  id={`estado${index}`} 
                  name={`estado${index}`} 
                  checked={cita.estado === 'Abono'} 
                  onChange={() => handleAcceptCita(cita)} 
                  readOnly={cita.estado === 'Abono'}
                />
                <label htmlFor={`estado${index}`}>{cita.estado}</label>
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination 
        citasPerPage={citasPerPage} 
        totalCitas={citas.length} 
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

export default Citas;

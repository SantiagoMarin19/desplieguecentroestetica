import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './CitasAdmin.css';
import Pagination from './Pagination';
import supabase from '../../supabase/supabaseconfig'; 
export function CitasAdmin() {
  const [citas, setCitas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos
  const citasPerPage = 5;

  // Función para cargar las citas desde Supabase
  const fetchCitas = async () => {
    try {
      const { data, error } = await supabase
        .from('citas') // Nombre de la tabla en Supabase
        .select('*'); // Selecciona todas las columnas
      if (error) throw error;
      setCitas(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching citas:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCitas();
  }, []);

 
  const indexOfLastCita = currentPage * citasPerPage;
  const indexOfFirstCita = indexOfLastCita - citasPerPage;
  const currentCitas = citas.slice(indexOfFirstCita, indexOfLastCita);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className='costo_Citas_Admin'>
          <h2>Costo</h2>
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
            <div className="costo_Admin">
              <p>{cita.costo}</p>
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
                  readOnly 
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

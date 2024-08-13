import React, { useState } from "react";
import styled from "styled-components";
import "./CitasAdmin.css";
import Pagination from "./Pagination"; // Importa el componente de paginación

export function CitasAdmin({ citas = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const citasPerPage = 5; // Número de citas por página

  // Calcular el índice de las citas que se deben mostrar
  const indexOfLastCita = currentPage * citasPerPage;
  const indexOfFirstCita = indexOfLastCita - citasPerPage;
  const currentCitas = citas.slice(indexOfFirstCita, indexOfLastCita);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <p>{cita.cliente}</p>
            </div>
            <div className="fecha_Admin">
              <p>{cita.fecha}</p>
            </div>
            <div className="hora_Admin">
              <p>{cita.hora}</p>
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
                <input type="checkbox" id={`estado${index}`} name={`estado${index}`} checked={cita.estado} />
                <label htmlFor={`estado${index}`}>{cita.estado ? "Abono" : "Pendiente"}</label>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
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

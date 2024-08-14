import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./ServiciosAdmin.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import supabase from '../../supabase/supabaseconfig';

const localizer = momentLocalizer(moment);

export function ServiciosAdmin() {
  const [events, setEvents] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [editableService, setEditableService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    name_servicio: '',
    descripcion: '',
    duracion: '',
    precio: ''
  });

  useEffect(() => {
    const fetchServicios = async () => {
      const { data, error } = await supabase.from('servicios').select('*');
      if (error) console.error('Error fetching servicios:', error);
      else setServicios(data);
    };

    fetchServicios();
  }, []);

  const handleServiceClick = (service) => {
    setEditableService(service);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditableService(null);
  };

  const handleServiceUpdate = async () => {
    if (!editableService) return;

    console.log('Datos para actualizar:', editableService);

    const { data, error } = await supabase
      .from('servicios')
      .update({
        name_servicio: editableService.name_servicio,
        descripcion: editableService.descripcion,
        duracion: editableService.duracion,
        precio: editableService.precio
      })
      .eq('id_servicios', editableService.id_servicios);

    if (error) {
      console.error('Error al actualizar servicio:', error);
      alert(`Error actualizando el servicio: ${error.message}`);
    } else {
      console.log('Servicio actualizado exitosamente:', data);
      setServicios(prevServicios =>
        prevServicios.map(service =>
          service.id_servicios === editableService.id_servicios ? editableService : service
        )
      );
      handleModalClose();
    }
  };

  const handleAddService = async () => {
    if (!newService.name_servicio || !newService.descripcion || !newService.duracion || !newService.precio) {
      alert('Por favor, complete todos los campos');
      return;
    }

    console.log('Datos para añadir:', newService);

    const { data, error } = await supabase
      .from('servicios')
      .insert([newService]);

    if (error) {
      console.error('Error al añadir servicio:', error);
      alert(`Error añadiendo el servicio: ${error.message}`);
    } else {
      console.log('Servicio añadido exitosamente:', data);
      setServicios([...servicios, ...data]);
      setNewService({
        name_servicio: '',
        descripcion: '',
        duracion: '',
        precio: ''
      });
    }
  };

  return (
    <Container>
      <div className="titulo_Header_Servicios_Admin">
        <h1>Sección Servicios</h1>
      </div>

      <div className="Tabla_Contenido_Servicios_Admin">
        <div className="titulo_Contenido_Header_Servicios_Admin">
          <h3>Servicios</h3>
          <h3>Ajustes</h3>
        </div>

        <div className="ediciones_header">
          <div className="contenido_Header_Servicios_Admin">
            {servicios.map(service => (
              <div key={service.id_servicios} className="edicion_contenido">
                <button 
                  className="nombre_servicio_boton" 
                  onClick={() => handleServiceClick(service)}
                >
                  {service.name_servicio}
                </button>
                <div className="ajustes_edicion_contenido">
                  <button 
                    className="edicion_contenido_boton" 
                    onClick={() => handleServiceClick(service)}
                  >
                    editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calendario_Contenido_Servicios_Admin">
          <div className="titulo_calendario_Contenido_Servicios_Admin">
            <h3>Calendario Citas</h3>
          </div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      </div>

      <div className="add-service-container">
        <h2>Añadir Servicio</h2>
        <p>Nombre: 
          <input
            type="text"
            value={newService.name_servicio}
            onChange={(e) => setNewService({ ...newService, name_servicio: e.target.value })}
          />
        </p>
        <p>Descripción: 
          <input
            type="text"
            value={newService.descripcion}
            onChange={(e) => setNewService({ ...newService, descripcion: e.target.value })}
          />
        </p>
        <p>Duración: 
          <input
            type="text"
            value={newService.duracion}
            onChange={(e) => setNewService({ ...newService, duracion: e.target.value })}
          />
        </p>
        <p>Precio: 
          <input
            type="number"
            value={newService.precio}
            onChange={(e) => setNewService({ ...newService, precio: e.target.value })}
          />
        </p>
        <button onClick={handleAddService}>Añadir Servicio</button>
      </div>

      {modalOpen && (
        <Modal>
          <div className="modal-content">
            <h2>{editableService ? 'Editar Servicio' : 'Ver Servicio'}</h2>
            {editableService && (
              <div className="modal-fields">
                <p>ID: {editableService.id_servicios}</p>
                <p>Nombre: 
                  <input
                    type="text"
                    value={editableService.name_servicio}
                    onChange={(e) => setEditableService({ ...editableService, name_servicio: e.target.value })}
                  />
                </p>
                <p>Descripción: 
                  <input
                    type="text"
                    value={editableService.descripcion}
                    onChange={(e) => setEditableService({ ...editableService, descripcion: e.target.value })}
                  />
                </p>
                <p>Duración: 
                  <input
                    type="text"
                    value={editableService.duracion}
                    onChange={(e) => setEditableService({ ...editableService, duracion: e.target.value })}
                  />
                </p>
                <p>Precio: 
                  <input
                    type="number"
                    value={editableService.precio}
                    onChange={(e) => setEditableService({ ...editableService, precio: e.target.value })}
                  />
                </p>
                <button onClick={handleServiceUpdate}>Actualizar</button>
              </div>
            )}
            <button onClick={handleModalClose}>Cerrar</button>
          </div>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background: #fcebf2;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .modal-fields input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const AddServiceContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fcebf2;
  border: 1px solid #c98695;
  border-radius: 10px;
  
  h2 {
    margin-bottom: 15px;
  }

  p {
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #c98695;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

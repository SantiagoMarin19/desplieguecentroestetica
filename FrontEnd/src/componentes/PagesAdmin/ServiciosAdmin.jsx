import React, { useState } from 'react';
import styled from 'styled-components';
import "./ServiciosAdmin.css";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export function ServiciosAdmin() {
  const [events, setEvents] = useState([]);

  const addEvent = (title, start, end) => {
    setEvents((prevEvents) => [...prevEvents, { title, start, end }]);
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
            {[
              "Diseño - Depilación en Henna",
              "Laminado de Cejas",
              "Diseño - Depilación y sombreado",
              "Micropigmentación Hair Stroke",
              "Micropigmentación de Cejas Shadow",
              "Micropigmentación de Labios",
              "Lifting de Pestañas",
              "Extensiones de Pestañas"
            ].map(service => (
              <div key={service} className="edicion_contenido">
                <button className="nombre_servicio_boton">{service}</button>
                <div className="ajustes_edicion_contenido">
                  <button className="edicion_contenido_boton">ver</button>
                  <button className="edicion_contenido_boton">editar</button>
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
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

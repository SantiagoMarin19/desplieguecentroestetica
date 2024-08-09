import styled from "styled-components";
import "./ServiciosAdmin.css";

export function ServiciosAdmin() {
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
            <div className="edicion_contenido">
              <p>Diseño - Depilación en Henna</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Laminado de Cejas</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Diseño - Depilación y sombreado</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Micropigmentación Hair Stroke</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Micropigmentación de Cejas Shadow</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Micropigmentación de Labios</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Lifting de Pestañas</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
            <div className="edicion_contenido">
              <p>Extensiones de Pestañas</p>
              <div className="ajustes_edicion_contenido">
              <button className="edicion_contenido_boton">ver</button>
              <button className="edicion_contenido_boton">editar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="calendario_Contenido_Servicios_Admin">
          <div className="titulo_calendario_Contenido_Servicios_Admin">
            <h3>Calendario Citas</h3>
          </div>

        </div>

      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;


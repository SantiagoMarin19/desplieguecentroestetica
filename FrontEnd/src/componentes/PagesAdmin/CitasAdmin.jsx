import React from "react";
import styled from "styled-components";
import "./CitasAdmin.css";

export function CitasAdmin() {
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
        <div className="cliente_Admin">
          <p>Natalia Salguero</p>
          <p>Santiago Marin</p>
          <p>David Ochoa</p>
          <p>Luna Bedoya</p>
          <p>Juan Molina</p>
        </div>
        <div className="fecha_Admin">
          <p>17 de mayo</p>
          <p>19 de septiembre</p>
          <p>5 de septiembre</p>
          <p>8 de enero</p>
          <p>22 de junio</p>
        </div>
        <div className="hora_Admin">
          <p>13:00</p>
          <p>08:00</p>
          <p>10:00</p>
          <p>15:00</p>
          <p>16:00</p>
        </div>
        <div className="duracion_Admin">
          <p>60 min</p>
          <p>60 min</p>
          <p>60 min</p>
          <p>60 min</p>
          <p>60 min</p>
        </div>
        <div className="costo_Admin">
          <p>$550,000</p>
          <p>$150,000</p>
          <p>$350,000</p>
          <p>$250,000</p>
          <p>$150,000</p>
        </div>
        <div className="servicio_Admin">
          <p>Micropigmentación de Labios</p>
          <p>Lifting de Pestañas</p>
          <p>Micropigmentación Hair-Stroke</p>
          <p>Micropigmentación de Cejas</p>
          <p>Micropigmentación de Cejas</p>
        </div>
        <div className="estado_Admin">
          <p>
            <input type="checkbox" id="estado1" name="estado1" checked />
            <label htmlFor="estado1">Abono</label>
          </p>
          <p>
            <input type="checkbox" id="estado2" name="estado2" checked />
            <label htmlFor="estado2">Abono</label>
          </p>
          <p>
            <input type="checkbox" id="estado3" name="estado3" checked />
            <label htmlFor="estado3">Abono</label>
          </p>
          <p>
            <input type="checkbox" id="estado4" name="estado4" checked />
            <label htmlFor="estado4">Abono</label>
          </p>
          <p>
            <input type="checkbox" id="estado5" name="estado5" checked />
            <label htmlFor="estado5">Abono</label>
          </p>
        </div>
      </div>
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

import styled from "styled-components";
import "./CitasAdmin.css"
export function CitasAdmin() {
  return (
    <Container>
      <div className="titulo_Citas_Admin">
        <h1>Sección Citas</h1></div>

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
          <h2>Duracion</h2>
        </div>
        <div className='costo_Citas_Admin'>
          <h2>Costo</h2>
        </div>
        <div className='servicio_Citas_Admin'>
          <h2>Servicio</h2>
        </div>
        <div className='servicio_Citas_Admin'>
          <h2>Estado</h2>
        </div>
      </div>


      <div className="contenido_header">
        <div className="Citas_Admin">
          <p>Natalia Salguero</p>
          <p>Santiago Marin</p>
          <p>David Ochoa</p>
          <p>Luna Bedoya</p>
          <p>Juan Molina</p>
        </div>
        <div className="fecha_Admin">
          <p>17 de mayo </p>
          <p>19 de septiembre</p>
          <p>5 de septiembre</p>
          <p>8 de enero</p>
          <p>22 de junio </p>

        </div>
        <div className="hora_Admin">
          <p>13.00pm</p>
          <p>8.00am</p>
          <p>10.00am</p>
          <p>15.00pm</p>
          <p>16.00pm</p>
        </div>
        <div className="duracion_Admin">
          <p>60minutos</p>
          <p>60minutos</p>
          <p>60minutos</p>
          <p>60minutos</p>
          <p>60minutos</p>
        </div>
        <div className="costo_Admin">
          <p>$550.000</p>
          <p>$150.000</p>
          <p>$350.000</p>
          <p>$250.000</p>
          <p>$150.000</p>
        </div>
        <div className="citas_Admin">
        <p>Micropigmentacion de Labios</p>
          <p>Lifting de pestañas</p>
          <p>Micropigmentacion Hair-Stroke</p>
          <p>Micropigmentacion de cejas</p>
          <p>Micropigmentacion de cejas</p>
        </div>
        <div className="estado_Admin">
          <p>
        <input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Abono</label></p>
        <p><input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Abono</label></p>
        <p><input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Abono</label></p>
        <p><input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Abono</label></p>
        <p><input type="checkbox" id="scales" name="scales" checked />
        <label for="scales">Abono</label></p>

     
        </div>

      </div>


    </Container>);
}

const Container = styled.div`
   height:100vh;
`
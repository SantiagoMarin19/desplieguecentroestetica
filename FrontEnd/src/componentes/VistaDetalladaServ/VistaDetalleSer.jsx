import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Servicio_detalle/Serviciocejas';

export const VistaDetalle = () => {
  const location = useLocation();
  const { servicio } = location.state || {};

  if (!servicio) {
    return <div>No se seleccionó ningún servicio</div>;
  }

  return (
    
    <div className='contenedor_total'>
      <div className='banneer'>
        <h1 className='detallserv'>Detalle del Servicio</h1>
      </div>

      <div className='content_total'>
        <div className='tarjeta'>
          <div className='contenido_ds'>
            <div className='titulo_ds'>
              <h1>{servicio.nombre_servicio}</h1>
            </div>
            <div className='detalle_ds'>
              <p>{servicio.descripcion}</p>
            </div>
            <div className='botontyp'>
              <div className='tiempo'>
                <h4>{servicio.duracion} </h4>
                <p>Tiempo</p>
              </div>
              <div className='precio'>
                <h4>{servicio.precio}</h4>
                <p>Precio</p>
              </div>
            </div>
            <div className='botones'>
              <button className='ReservarS'>Reservar Ahora</button>
            </div>
          </div>
          <div className='imagen-contenedor'>
            <img className='imagen' src={servicio.url_img} alt={servicio.nombre_servicio} />
            <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default VistaDetalle;
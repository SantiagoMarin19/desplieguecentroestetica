import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../Servicio_detalle/Serviciocejas';
import "./VistaDetalleservi.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast } from 'react-toastify'; // Importar toast para las alertas
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toast

export const VistaDetalle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [servicio, setServicio] = useState(null);

  useEffect(() => {
    // Simular la carga de datos
    const { state } = location;
    if (state && state.servicio) {
      setServicio(state.servicio);
    }
  }, [location]);

  const handleReservar = () => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      // Si no hay token (usuario no logueado), muestra una alerta y no permite continuar
      toast.error('Por favor inicia sesión para continuar o regístrate');
    } else {
      // Si está logueado, redirigir a la página de agendar cita
      navigate('/Agendarcita', { state: { servicio } });
    }
  };

  return (
    <div className='contenedor_total' style={{flex:1}}>
      <div className='banneer'>
        <h1 className='detallserv'>Detalle del Servicio</h1>
      </div>

      <div className='content_total'>
        <div className='tarjeta'>
          <div className='contenido_ds'>
            <div className='titulo_ds'>
              <h1>{servicio ? servicio.nombre_servicio : <Skeleton width={200} height={30} />}</h1>
            </div>
            <div className='detalle_ds'>
              <p>{servicio ? servicio.descripcion : <Skeleton count={3} />}</p>
            </div>
            <div className='botontyp'>
              <div className='tiempo'>
                <h4>{servicio ? servicio.duracion : <Skeleton width={100} height={20} />}</h4>
                <p>Tiempo</p>
              </div>
              <div className='precio'>
                <h4>
                  <b>
                    {servicio ? new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2
                    }).format(servicio.precio) : <Skeleton width={100} height={20} />}
                  </b>
                </h4>
                <p>Precio</p>
              </div>
            </div>
            <div className="continue_reserva">
              <button onClick={handleReservar} className="continue_reserva">
                <span>Continue</span>
                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                  <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className='imagen-contenedor'>
            {servicio ? (
              <>
                <img className='imagen' src={servicio.url_img} alt={servicio.nombre_servicio} />
                <p className='leyenda'>Confía en nuestros expertos para obtener unas cejas perfectamente diseñadas</p>
              </>
            ) : (
              <Skeleton height={200} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaDetalle;

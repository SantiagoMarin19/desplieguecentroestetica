import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import supabase from '../../supabase/supabaseconfig';
import { ThemeContext } from '../../App';

export function ServiciosAdmin() {
  const { theme } = React.useContext(ThemeContext);
  const [selectedDates, setSelectedDates] = useState([]);
  const [serviceTimes, setServiceTimes] = useState({});
  const [servicios, setServicios] = useState([]);
  const [categorias, setCategorias] = useState([]); // Nuevo estado para las categorías
  const [selectedService, setSelectedService] = useState(null);
  const [editableService, setEditableService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: 'success' });
  const [newService, setNewService] = useState({
    nombre_servicio: '',
    descripcion: '',
    duracion: '',
    precio: '',
    categoria: '' // Añadir id_categoria
  });

  useEffect(() => {
    const fetchServicios = async () => {
      const { data, error } = await supabase.from('servicios').select('*');
      if (error) {
        console.error('Error fetching servicios:', error);
      } else {
        setServicios(Array.isArray(data) ? data : []);
      }
    };

    const fetchCategorias = async () => { // Nueva función para obtener categorías
      const { data, error } = await supabase.from('categorias').select('id_categoria, nombreCategoria');
      if (error) {
        console.error('Error fetching categorias:', error);
      } else {
        setCategorias(Array.isArray(data) ? data : []);
      }
    };

    fetchServicios();
    fetchCategorias(); // Llamar a la función para obtener categorías
  }, []);

 

  const handleEditClick = async (service) => {
    setEditableService(service);
    setModalOpen(true);
    setSelectedService(null);
    setServiceTimes({});
  };

  const handleSelectClick = async (service) => {
    setSelectedService(service);
    setEditableService(null);
    setModalOpen(false);
    setServiceTimes({});
    setSelectedDates([]);

    const { data, error } = await supabase
      .from('franja_horaria')
      .select('*')
      .eq('nombre_servicio', service.nombre_servicio)
      .eq('id_profesional', 1);

    if (error) console.error('Error al obtener los tiempos de servicio:', error);
    else {
      const serviceTimes = data.reduce((acc, item) => {
        const date = new Date(item.fecha);
        if (!acc[date.toDateString()]) {
          acc[date.toDateString()] = [];
        }
        acc[date.toDateString()].push(item.hora);
        return acc;
      }, {});
      setServiceTimes(serviceTimes);
      setSelectedDates(Object.keys(serviceTimes).map(date => new Date(date)));
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditableService(null);
    setSelectedService(null);
  };

  const handleServiceUpdate = async () => {
    if (!editableService) return;

    const { data, error } = await supabase
      .from('servicios')
      .update(editableService)
      .eq('id_servicios', editableService.id_servicios);

    if (error) {
      console.error('Error al actualizar servicio:', error);
        setNotification({ message: `Error actualizando el servicio: ${error.message}` });
    } else {
      setServicios(prevServicios =>
        prevServicios.map(service =>
          service.id_servicios === editableService.id_servicios ? editableService : service
        )
      );
      handleModalClose();
    }
  };

  const handleAddService = async () => {
    console.log('Estado de newService:', newService); // Imprimir el estado
  
    if (!newService.nombre_servicio || !newService.descripcion || !newService.duracion || !newService.precio || !newService.categoria) {
      setNotification({ message: 'Por favor, complete todos los campos', type: 'error' });
      return;
    }
  
    try {
      const { data, error } = await supabase
        .from('servicios')
        .insert([{ 
          ...newService 
        }]);
      
      if (error) {
        if (error.code === '23505') {
          setNotification({ message: 'Ya existe un servicio con este nombre', type: 'error' });
        } else {
          setNotification({ message: `Error añadiendo el servicio: ${error.message}`, type: 'error' });
        }
      } else {
        setNotification({ message: 'Servicio añadido exitosamente', type: 'success' });
        if (Array.isArray(data)) {
          setServicios(prevServicios => [...prevServicios, ...data]);
        } else if (data) {
          setServicios(prevServicios => [...prevServicios, data]);
        }
        setNewService({
          nombre_servicio: '',
          descripcion: '',
          duracion: '',
          precio: '',
          categoria: '' // Reiniciar categoria
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      setNotification({ message: `Error inesperado: ${error.message}`, type: 'error' });
    }
  
    setTimeout(() => {
      setNotification({ message: '', type: 'success' });
    }, 3000);
  };
  
  const handleDateChange = (date) => {
    if (selectedService) {
      const newSelectedDates = selectedDates.some(d => d.toDateString() === date.toDateString())
        ? selectedDates.filter(d => d.toDateString() !== date.toDateString())
        : [...selectedDates, date];

      setSelectedDates(newSelectedDates);
      const newServiceTimes = { ...serviceTimes };
      newSelectedDates.forEach(d => {
        if (!newServiceTimes[d.toDateString()]) {
          newServiceTimes[d.toDateString()] = [];
        }
      });
      setServiceTimes(newServiceTimes);
    }
  };

  

  const handleTimeChange = (date, index, value) => {
    if (selectedService) {
      const dateString = date.toDateString();
      const newServiceTimes = { ...serviceTimes };

      if (newServiceTimes[dateString].includes(value)) {
       setNotification({ message: 'Esta hora ya está seleccionada.'});
        return;
      }

      newServiceTimes[dateString][index] = value;
      setServiceTimes(newServiceTimes);
    }
  };

  const addTime = (date) => {
    if (selectedService) {
      const dateString = date.toDateString();
      const newServiceTimes = { ...serviceTimes };

      if (newServiceTimes[dateString] && newServiceTimes[dateString].includes('00:00')) {
        setNotification({ message: 'Esta hora ya está seleccionada.'});
        return;
      }

      if (!newServiceTimes[dateString]) {
        newServiceTimes[dateString] = [];
      }

      newServiceTimes[dateString].push('00:00');
      setServiceTimes(newServiceTimes);
    }
  };

  const removeTime = (date, index) => {
    if (selectedService) {
      const dateString = date.toDateString();
      const newServiceTimes = { ...serviceTimes };
      newServiceTimes[dateString].splice(index, 1);
      setServiceTimes(newServiceTimes);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && selectedService) {
      return selectedDates.some(d => d.toDateString() === date.toDateString()) ? 'selected-date' : null;
    }
  };

  const handleUpdateAll = async () => {
    const allUpdates = Object.entries(serviceTimes).flatMap(([date, times]) =>
      times.map(time => ({
        nombre_servicio: selectedService.nombre_servicio,
        fecha: date,
        hora: time,
        estado: 'disponible',
        id_profesional: 1 // Agregar id_profesional aquí
      }))
    );

    for (let update of allUpdates) {
      const { data: existingRecords, error: checkError } = await supabase
        .from('franja_horaria')
        .select('*')
        .eq('nombre_servicio', update.nombre_servicio)
        .eq('fecha', update.fecha)
        .eq('hora', update.hora)
        .eq('id_profesional', update.id_profesional); // Verificar por id_profesional

      if (checkError) {
        console.error('Error verificando duplicados:', checkError);
         setNotification({ message:`Error verificando duplicados: ${checkError.message}`});
        return;
      }

      if (existingRecords.length > 0) {
         setNotification({ message:`Ya existe una franja horaria para la fecha ${update.fecha} a las ${update.hora}. No se guardará.`});
        continue;
      }

      const { error: insertError } = await supabase.from('franja_horaria').upsert([update]);

      if (insertError) {
        console.error('Error al actualizar horarios de servicios:', insertError);
       setNotification({ message:`Error actualizando horarios de servicios: ${insertError.message}`});
        return;
      }
    }

   setNotification({ message:'Horarios actualizados correctamente.'});
    setServiceTimes({});
  };

  const handleToggleService = async () => {
    if (!editableService) return;

    // Cambiar el estado del servicio
    const updatedService = {
      ...editableService,
      estado: !editableService.estado // Cambiar el estado actual
    };

    const { data, error } = await supabase
      .from('servicios')
      .update(updatedService)
      .eq('id_servicios', updatedService.id_servicios);

    if (error) {
      console.error('Error al habilitar/deshabilitar servicio:', error);
     setNotification({ message:`Error habilitando/deshabilitando el servicio: ${error.message}`});

    } else {
      setEditableService(updatedService);
      setServicios(prevServicios =>
        prevServicios.map(service =>
          service.id_servicios === updatedService.id_servicios ? updatedService : service
        )
      );
    }
  };

  return (
    <Container theme={theme}>
      <div className="contenedor_servicio_Admin">
        <Header theme={theme}>
          <h1>Sección Servicios</h1>
          <p>Hola, en esta sección podrás agregar las horas disponibles para las citas por cada servicio.</p>
          <p><strong>Recomendación</strong></p>
          <p>Agendar las citas de la semana con anticipación ya que al cliente no se le permite agendar citas para el mismo día.</p>
        </Header>

        <TableContainer>
          <TableHeader theme={theme}>
            <h3>Servicios</h3>
            <h3>Ajustes</h3>
          </TableHeader>

          <ServiceList>
            {servicios.map(service => (
              <ServiceItem key={service.id_servicios} theme={theme}>

<ServiceButton theme={theme}
  className={`nombre_servicio_boton ${service.estado ? 'habilitado' : 'inhabilitado'}`}
  onClick={() => handleSelectClick(service)}>
  <ServiceName>
    <p>{service.nombre_servicio}</p>
    <StatusDot active={service.estado} />
  </ServiceName>
</ServiceButton>
                <EditButton onClick={() => handleEditClick(service)} theme={theme} >editar</EditButton >
              </ServiceItem>
            ))}
          </ServiceList>

          {selectedService && (
            <CalendarContainer theme={theme} >
              <h3 theme={theme} >Agregar horas para {selectedService.nombre_servicio}</h3>
              <StyledCalendar
                onChange={handleDateChange}
                value={null}
                tileClassName={tileClassName}
                prevLabel={null}
                nextLabel={null}
                showNeighboringMonth={false}
              />

             
              <HourSelection theme={theme}>
                <form>
                <DatesContainer  theme={theme}>
                  {selectedDates.map(date => (
                    <DateSelection theme={theme}  key={date.toDateString()}>
                      <div>
                        {date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <div>
                        {serviceTimes[date.toDateString()] && serviceTimes[date.toDateString()].map((time, index) => (
                          <TimeInput key={index} theme={theme}>
                            <input
                              type="time"
                              value={time}
                              onChange={(e) => handleTimeChange(date, index, e.target.value)}
                            />
                            <RemoveButton type="button" onClick={() => removeTime(date, index)}theme={theme}>Eliminar Hora</RemoveButton>
                          </TimeInput>
                        ))}
                        <AddButton type="button" onClick={() => addTime(date)}theme={theme}>Añadir Hora</AddButton>
                      </div>
                    </DateSelection>
                  ))}
                  </DatesContainer>
                </form>
              </HourSelection>
            </CalendarContainer>
          )}

          <UpdateButton>
            <FloatingButton onClick={handleUpdateAll} theme={theme}> Actualizar </FloatingButton>
          </UpdateButton>

          
          {notification.message && (
  <Notification isVisible={!!notification.message} type={notification.type}>
    {notification.message}
  </Notification>
)} 

    <AddServiceSection theme={theme}>
      <Titleservice theme={theme}>Añadir Servicio</Titleservice>
      <ServiceInput theme={theme}>
        <input
          type="text"
          placeholder="Nombre del servicio"
          value={newService.nombre_servicio}
          onChange={(e) => setNewService({ ...newService, nombre_servicio: e.target.value })}
        />
        <textarea
          placeholder="Descripción del servicio"
          value={newService.descripcion}
          onChange={(e) => setNewService({ ...newService, descripcion: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duración del servicio"
          value={newService.duracion}
          onChange={(e) => setNewService({ ...newService, duracion: e.target.value })}
        />
        <input
          type="text"
          placeholder="Precio del servicio"
          value={newService.precio}
          onChange={(e) => setNewService({ ...newService, precio: e.target.value })}
        />
      <select
  value={newService.categoria} // Asegúrate de seguir usando 'categoria'
  onChange={(e) => setNewService({ ...newService, categoria: e.target.value })} // Cambia a 'categoria'
>
  <option value="">Elegir categoría</option>
  {categorias.map(categoria => (
    <option key={categoria.id_categoria} value={categoria.id_categoria}> {/* Usa id_categoria aquí */}
      {categoria.nombreCategoria}
    </option>
  ))}
</select>
<input type="file" multiple="multiple" id="photo"
placeholder='Pulse aquí para añadir archivos'
value={newService.url_img}
onChange={(e) => setNewService({ ...newService, url_img: e.target.value })}
/>
        </ServiceInput>
        <HandleAddServiceButton onClick={handleAddService} theme={theme}>
          Añadir Servicio
        </HandleAddServiceButton>
      </AddServiceSection>
      

          {modalOpen && (
            <Modal theme={theme}>
              <div className="modal-content">
                <h2>{editableService ? 'Editar Servicio' : 'Ver Servicio'}</h2>
                {editableService && (
                  <ModalFields>
                    <p>ID: {editableService.id_servicios}</p>
                    <p>Nombre:
                      <input type="text" value={editableService.nombre_servicio} onChange={(e) => setEditableService({ ...editableService, nombre_servicio: e.target.value })} />
                    </p>
                    <p>Descripción:
                      <input type="text" value={editableService.descripcion} onChange={(e) => setEditableService({ ...editableService, descripcion: e.target.value })} />
                    </p>
                    <p>Duración:
                      <input type="text" value={editableService.duracion} onChange={(e) => setEditableService({ ...editableService, duracion: e.target.value })} />
                    </p>
                    <p>Precio:
                      <input type="number" value={editableService.precio} onChange={(e) => setEditableService({ ...editableService, precio: e.target.value })} />
                    </p>
                    <p>
                    <div classname="drag-drop">
            <input type="file" multiple="multiple" id="photo" />
            <span classname="fa-stack fa-2x">
                <i classname="fa fa-cloud fa-stack-2x bottom pulsating"></i>
                <i classname="fa fa-circle fa-stack-1x top medium"></i>
                <i classname="fa fa-arrow-circle-up fa-stack-1x top"></i>
            </span>
            <span classname="desc">Pulse aquí para añadir archivos</span>
        </div></p>
                    <p>
                      <label>
                        Habilitado:
                        <input type="checkbox" checked={editableService.estado} onChange={handleToggleService} />
                      </label>
                    </p>
                    <button theme={theme} onClick={handleServiceUpdate}>Actualizar</button>
                  </ModalFields>
                )}
                <button theme={theme} onClick={handleModalClose}>Cerrar</button>
              </div>
            </Modal>
          )}
        </TableContainer>
      </div>
    </Container>
  );
}


const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.theme === 'light' ? '#f5f5f5' : '#21252B'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  transition: all 0.5s ease;
  border-radius: 10px;
  
`;


const Header = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#444'};
  border: 10px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  font-family: "Playfair Display", serif;
  font-weight: normal;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h1, h2 {
    font-size: 30px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
    transition: all 0.3s ease;
  }
`;


const TableContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

const TableHeader = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
`;

const ServiceList = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme === 'light' ? '#ffffff' : '#444'};
  border: 1px solid ${({ theme }) => theme === 'light' ? '#e0e0e0' : '#666'};
  color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};

  border-radius: 5px;
  width: 100%;
    p {
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  }
`;

const ServiceButton = styled.button`
font-size: 17px;
background-color: transparent;
border: none;
color: #000;
cursor: pointer;
`;

const EditButton = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme === 'light' ? '#c98695' : '#6A5ACD'}; /* Cambia según el tema */
  color: #fff; /* Color del texto */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#a75d53' : '#483D8B'}; /* Cambia según el tema */
  }
`;


const CalendarContainer = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
   background-color: ${props => props.theme === 'light' ? '#f5f5f5' : '#21252B'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  
  h3 {
    font-size: 30px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  
 border: 10px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
text-align: center;
padding: 15px;
font-family: "Playfair Display", serif;
font-weight: normal;
margin-bottom: 20px;
}
`;

const DatesContainer = styled.div`
display: flex; /* Usar flexbox para alinear en fila */
  flex-wrap: wrap; /* Permitir que se envuelvan en varias líneas si no caben */
  justify-content: space-between; /* Espaciado uniforme entre fechas */
  margin: 20px 0; /* Espacio superior e inferior */
`;

// Estilos para el calendario
const StyledCalendar = styled(Calendar)`
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;

  &__tile {
    border-radius: 5px;
    padding: 10px;
  }

  &__tile--active,
  &__tile--hasActive {
    background-color: ${({ theme }) => theme.activeBackground};
    color: ${({ theme }) => theme.activeColor};
  }
`;

// Otros estilos
const HourSelection = styled.div`
  margin-top: 10px;
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
`;

const DateSelection = styled.div`
  flex: 1 1 calc(33% - 20px); /* Cada fecha ocupa 1/3 del contenedor con margen */
  margin: 10px; /* Margen entre las fechas */
  padding: 15px; /* Relleno alrededor de cada fecha */
  border: 2px solid ${({ theme }) => theme === 'light' ? '#ddd' : '#555'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme === 'light' ? '#fff' : '#444'};
  transition: background-color 0.3s;


  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#555'}; /* Color al pasar el cursor */
  }

`;

const Title = styled.h3`
  color: ${({ theme }) => theme === 'light' ? '#333' : '#fff'};
  margin-bottom: 15px;
  text-align: center;
`;

const TimeInput = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 10px;
 font-size: 16px;
  padding: 8px;

  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  border-radius: 5px;
  margin-right: 10px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme === 'light' ? '#C98695' : '#6A5ACD'}; /* Color al enfocar */
  }
`;

const AddButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
   background-color: ${({ theme }) => theme === 'light' ? '#a75d53' : '#483D8B'};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const UpdateButton = styled.div`
  margin-top: 20px;
`;

const RemoveButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
  background-color: ${({ theme }) => theme === 'light' ? '#a75d53' : '#483D8B'};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const FloatingButton = styled.button`
  font-size: 16px; /* Cambiar el tamaño de la tipografía */
  text-transform: uppercase; /* Texto en mayúsculas */
  font-weight: bold; /* Fuente en negrita */
  color: ${({ theme }) => theme === 'light' ? '#000000' : '#ffffff'}; /* Color del texto */
  border-radius: 5px; /* Borde del botón */
  letter-spacing: 2px; /* Espacio entre letras */
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#6A5ACD'}; /* Color de fondo */
  padding: 18px 30px; /* Relleno del botón */
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: all 300ms ease 0ms;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;

  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#c98695' : '#483D8B'}; /* Color de fondo al pasar el cursor */
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-7px);
  }
`;

const AddServiceSection = styled.div`
  padding: 20px;
  margin: 15px;
  background-color: ${({ theme }) => theme === 'light' ? '#fcebf2' : '#333'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


// Estilo para el título
const Titleservice = styled.h2`
 font-size: 30px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
   background-color: ${({ theme }) => theme === 'light' ? ' #fcebf2' : '#444'};
 border: 10px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
text-align: center;
padding: 15px;
font-family: "Playfair Display", serif;
font-weight: normal;
margin-bottom: 20px;

`;

const ServiceInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input, textarea {
    background-color: ${({ theme }) => theme === 'light' ? '#ffffff' : '#555'};
    border: 2px solid ${({ theme }) => theme === 'light' ? '#c98695' : '#9247FC'};
    border-radius: 5px; 
    padding: 10px;
    font-size: 16px;
    font-family: "Playfair Display", serif;
    color: ${({ theme }) => theme === 'light' ? '#333' : '#fff'};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme === 'light' ? '#a75d53' : '#7C3AED'};
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const HandleAddServiceButton = styled.button`
  background-color: ${({ theme }) => theme === 'light' ? '#c98695' : '#6A5ACD'};
  border: none;
  border-radius: 5px; 
  padding: 12px 20px;
  font-size: 18px;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: ${({ theme }) => theme === 'light' ? '#a75d53' : '#483D8B'};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
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
`;

const ModalFields = styled.div`
background: #fcebf2;
padding: 20px;
border-radius: 8px;
max-width: 500px;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;

input {
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #c98695;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a75d53;
  }
}
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#4CAF50' : '#F44336')};
  display: inline-block;
`;

const ServiceName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
 
const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  transition: opacity 0.5s ease, background-color 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  z-index: 1000;
  background-color: ${({ type }) => type === 'error' ? '#f44336' : '#4CAF50'};
  color: white;
`;

export default ServiciosAdmin;
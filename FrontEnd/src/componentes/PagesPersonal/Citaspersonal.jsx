import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import supabase from '../../supabase/supabaseconfig';
import moment from 'moment';
import { ThemeContext } from "../../App";

const CitasProfesional = ({ token }) => {
  const [citas, setCitas] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const citasPerPage = 5;
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (token?.user) {
        setUser(token.user);
      } else {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          console.error('Error fetching user:', error);
        } else {
          setUser(data.user);
        }
      }
    };

    fetchUser();
  }, [token]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const startOfMonth = moment().startOf('month');
        const { data, error } = await supabase
          .from('cita')
          .select('id_cita, fecha, estado, usuarios, servicio(nombre_servicio), profesional, duracion')
          .eq('profesional', user?.id) // Filtra por el ID del profesional
          .gte('fecha', startOfMonth.toISOString())
          .order('fecha', { ascending: true });

        if (error) throw error;

        const citasConEstadoPorDefecto = data.map(cita => ({
          ...cita,
          estado: cita.estado ?? false
        }));

        setCitas(citasConEstadoPorDefecto);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching citas:', error);
        setLoading(false);
      }
    };

    if (user) {
      fetchCitas();
    }
  }, [user]);

  const filteredCitas = citas.filter(cita => {
    const searchLower = searchTerm.toLowerCase();
    const fecha = moment(cita.fecha).format('DD/MM/YYYY');
    const hora = moment(cita.duracion, 'HH:mm').format('h:mm A');
    return (
      cita.usuarios.toLowerCase().includes(searchLower) ||
      fecha.includes(searchLower) ||
      hora.toLowerCase().includes(searchLower) ||
      cita.servicio.nombre_servicio.toLowerCase().includes(searchLower)
    );
  });

  const sortedCitas = [...filteredCitas].sort((a, b) => {
    const dateA = new Date(a.fecha);
    const dateB = new Date(b.fecha);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const indexOfLastCita = currentPage * citasPerPage;
  const indexOfFirstCita = indexOfLastCita - citasPerPage;
  const currentCitas = sortedCitas.slice(indexOfFirstCita, indexOfLastCita);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleAcceptCita = async (cita) => {
    const confirmMessage = `¿Estás seguro de ${cita.estado ? 'cancelar' : 'aprobar'} la cita de ${cita.usuarios} para el ${moment(cita.fecha).format('DD/MM/YYYY HH:mm')}?`;
    if (window.confirm(confirmMessage)) {
      try {
        const newEstado = !cita.estado;
        const { data, error } = await supabase
          .from('cita')
          .update({ estado: newEstado })
          .eq('id_cita', cita.id_cita);
        
        if (error) throw error;
        
        console.log(`Cita ${newEstado ? 'aprobada' : 'cancelada'} correctamente`);
        
        setCitas(citas.map(c => c.id_cita === cita.id_cita ? { ...c, estado: newEstado } : c));
      } catch (error) {
        console.error('Error al actualizar cita:', error);
      }
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container theme={theme}>
      <div className="Container_C_A">
        <Header theme={theme}>
          <h1>Citas Administrador</h1>
        </Header>
        <Content theme={theme}>
          <p>En esta sección encontrarás todas las citas registradas por los clientes para el mes actual y los meses futuros.</p>
          <p><b>Nota:</b> Confirma el Estado de la cita por medio del Checklist <b>SOLO</b> si la cita fue abonada exitosamente con el 50%.</p>
        </Content>

        <SearchBar 
          type="text" 
          placeholder="Buscar por fecha, hora, cliente o servicio..." 
          value={searchTerm}
          onChange={handleSearchChange}
          theme={theme}
        />
        
        <SortControl theme={theme}>
          <Button onClick={toggleSortOrder} theme={theme}>
            Ordenar por fecha: {sortOrder === 'asc' ? 'Más antiguas primero' : 'Más recientes primero'}
          </Button>
        </SortControl>

        <Table theme={theme}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Servicio</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentCitas.map(cita => (
              <tr key={cita.id_cita}>
                <td>{cita.usuarios}</td>
                <td>{moment(cita.fecha).format('DD/MM/YYYY')}</td>
                <td>{moment(cita.duracion, 'HH:mm').format('h:mm A')}</td>
                <td>{cita.servicio.nombre_servicio}</td>
                <td>{cita.estado ? 'Aprobada' : 'Pendiente'}</td>
                <td>
                  <button onClick={() => handleAcceptCita(cita)}>
                    {cita.estado ? 'Cancelar' : 'Aprobar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.theme === 'light' ? '#f5f5f5' : '#21252B'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  transition: all 0.3s ease;
`;


const Header = styled.div`
  border: 10px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme === 'light' ? 'transparent' : '#313131'};
  
  h1 {
    font-size: 30px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  }
`;

const Content = styled.div`
  background-color: ${props => props.theme === 'light' ? 'transparent' : '#313131'};
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SortControl = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: ${props => props.theme === 'light' ? 'transparent' : '#313131'};
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  overflow: hidden;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  }

  th {
    background-color: ${props => props.theme === 'light' ? '#FCEBF2' : '#2e2e2e'};
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  }

  tr:nth-child(even) {
    background-color: ${props => props.theme === 'light' ? '#f9f9f9' : '#2e2e2e'};
  }

  tr:hover {
    background-color: ${props => props.theme === 'light' ? '#f1f1f1' : '#3e3e3e'};
  }

  td.aprobada {
    color: #4CAF50; /* Verde para Aprobada */
    text-shadow: 1px 1px 2px white; /* Sombra blanca */
  }

  td.pendiente {
    color: #f44336; /* Rojo para Pendiente */
    text-shadow: 1px 1px 2px white; /* Sombra blanca */
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme === 'light' ? '#b57b7a' : '#7c3b8a'};
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.3s, border-color 0.3s;

  &:checked {
    background-color: #4CAF50; /* Verde */
    border-color: #4CAF50; /* Borde verde */
  }

  &:not(:checked) {
    border-color: #f44336; /* Rojo */
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-left: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${props => props.estado ? '#4CAF50' : '#f44336'}; /* Verde si está aprobado, rojo si está pendiente */
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${props => props.theme === 'light' ? '#fff' : '#2e2e2e'};
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};

  &::placeholder {
    color: ${props => props.theme === 'light' ? '#999' : '#bbb'};
  }
`;

export default  CitasProfesional;

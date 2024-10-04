import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import supabase from '../../supabase/supabaseconfig';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ThemeContext } from '../../App';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function PersonalAdmin() {
  const [personalList, setPersonalList] = useState([]);
  const [editingProfesional, setEditingProfesional] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isPdfDownloaded, setIsPdfDownloaded] = useState(false);
  const [newProfesional, setNewProfesional] = useState({
    nombre_profesional: '',
    especialidad: '',
    celular: '',
    correo: '',
    estado: true,
    password: '',
  });
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Nuevos estados para las mejoras
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [notification, setNotification] = useState(null);

  

  useEffect(() => {
    fetchProfesionales();
  }, [currentPage, searchTerm]);

  const fetchProfesionales = async () => {
    const from = (currentPage - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    let query = supabase
      .from('profesional')
      .select('*', { count: 'exact' })
      .range(from, to);

    if (searchTerm) {
      query = query.ilike('nombre_profesional', `%${searchTerm}%`);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching data: ', error);
      showNotification('Error al cargar los profesionales', 'error');
    } else {
      setPersonalList(data || []);
      setTotalCount(count || 0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfesional({ ...newProfesional, [name]: value });
  };

  const generatePassword = () => {
    const { nombre_profesional, celular } = newProfesional;
    const password = `${nombre_profesional.substr(0, 3)}${celular.substr(-4)}`;
    setNewProfesional({ ...newProfesional, password });
    setPdfGenerated(false);
  };

  const addProfesional = async () => {
    if (!newProfesional.nombre_profesional || !newProfesional.password) {
        showNotification('Por favor complete todos los campos requeridos.', 'error');
        return;
    }

    const isDuplicate = await checkForDuplicate(newProfesional.nombre_profesional);
    if (isDuplicate) {
        showNotification('Ya existe un profesional con ese nombre.', 'error');
        return;
    }

    try {
        const { data, error } = await supabase
            .from('profesional')
            .insert([newProfesional])
            .select();

        if (error) throw error;

        if (data && data.length > 0) {
            setPersonalList([...personalList, ...data]);
            resetForm();
            showNotification('Profesional añadido con éxito', 'success');
        }
    } catch (err) {
        console.error('Error adding professional: ', err.message);
        showNotification('Ocurrió un error al agregar el profesional.', 'error');
    }
};

const checkForDuplicate = async (nombre_profesional) => {
  const { data, error } = await supabase
      .from('profesional')
      .select('id_profesional')
      .eq('nombre_profesional', nombre_profes<ional);
  
  if (error) {
      console.error('Error checking for duplicates: ', error);
      return false;
  }

  return data.length > 0; // Devuelve true si hay duplicados
};


  const resetForm = () => {
    setNewProfesional({
      nombre_profesional: '',
      especialidad: '',
      celular: '',
      correo: '',
      estado: true,
      password: '',
    });
    setPdfGenerated(false);
  };
 
  const handleEdit = (profesional) => {
    setEditingProfesional(profesional);
    setNewProfesional(profesional);
  };

  const updateProfesional = async () => {
    if (!confirmAction('¿Estás seguro de que quieres actualizar este profesional?')) return;

    try {
      const { data, error } = await supabase
        .from('profesional')
        .update({
          nombre_profesional: newProfesional.nombre_profesional,
          especialidad: newProfesional.especialidad,
          celular: newProfesional.celular,
          correo: newProfesional.correo,
          estado: newProfesional.estado,
        })
        .eq('id_profesional', editingProfesional.id_profesional)
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setPersonalList((prevList) =>
          prevList.map((p) =>
            p.id_profesional === editingProfesional.id_profesional ? { ...data[0] } : p
          )
        );
        setEditingProfesional(null);
        resetForm();
        showNotification('Profesional actualizado con éxito', 'success');
      }
    } catch (err) {
      console.error('Error updating professional: ', err.message);
      showNotification('Ocurrió un error al actualizar el profesional.', 'error');
    }
  };

  const toggleEstado = async (profesional) => {
    const newState = !profesional.estado;
    if (!confirmAction(`¿Estás seguro de que quieres ${newState ? 'activar' : 'desactivar'} a ${profesional.nombre_profesional}?`)) return;

    try {
      const { data, error } = await supabase
        .from('profesional')
        .update({ estado: newState })
        .eq('id_profesional', profesional.id_profesional)
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setPersonalList((prevList) =>
          prevList.map((p) =>
            p.id_profesional === profesional.id_profesional ? { ...p, estado: newState } : p
          )
        );
        showNotification(`${profesional.nombre_profesional} ha sido ${newState ? 'activado' : 'desactivado'}`, 'success');
      }
    } catch (err) {
      console.error('Error toggling professional state: ', err.message);
      showNotification('Ocurrió un error al cambiar el estado del profesional.', 'error');
    }
  };

  const confirmAction = (message) => {
    return window.confirm(message);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };



  return (
    <Container theme={theme}>
      <div className="contenedor_personal_Admin">
        <Header theme={theme}>
          <h1>Sección Personal</h1>
        </Header>

        <SearchBar theme={theme}
          type="text"
          placeholder="Buscar profesional..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ListaPersonal theme={theme}>
          {personalList.map((profesional) => (
            <PersonalItem key={profesional.id_profesional} theme={theme} professionalStatus={profesional.estado}>
              <button
                className="boton_nombre_profesional_calendario"
                onClick={() => handleEdit(profesional)}
                disabled={!profesional.estado}
              >
                {profesional.nombre_profesional}
              </button>
              <p>{profesional.especialidad}</p>
              <p>{profesional.celular}</p>
              <p>{profesional.correo}</p>
              <p>{profesional.estado ? "Activo" : "Inactivo"}</p>
              <button  theme={theme} onClick={() => toggleEstado(profesional)}>
                {profesional.estado ? "Marcar como Inactivo" : "Marcar como Activo"}
              </button>
            </PersonalItem>
          ))}
        </ListaPersonal>

        <Pagination theme={theme}>
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Anterior
          </button>
          <span>Página {currentPage} de {Math.ceil(totalCount / itemsPerPage)}</span>
          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage >= Math.ceil(totalCount / itemsPerPage)}>
            Siguiente
          </button>
        </Pagination>

        <Header theme={theme}>
          <h2>{editingProfesional ? "Editar Personal" : "Añadir Personal"}</h2>
        </Header>

        <FormContainer theme={theme}>
          <input
            type="text" name="nombre_profesional"
            value={newProfesional.nombre_profesional}
            placeholder="Nombre Profesional" onChange={handleChange}
          />
          <input
            type="text" name="especialidad"
            value={newProfesional.especialidad}
            placeholder="Especialidad" onChange={handleChange}
          />
          <input
            type="text"  name="celular"
            value={newProfesional.celular}
            placeholder="Celular" onChange={handleChange}
          />
          <input
            type="email"  name="correo"
            value={newProfesional.correo}
            placeholder="Correo" onChange={handleChange}
          />
          
          <Button theme={theme} onClick={generatePassword}>Generar Contraseña</Button>
          
          <PasswordDisplay theme={theme}>
            Contraseña: {newProfesional.password}
          </PasswordDisplay>
          
          <Button theme={theme} onClick={editingProfesional ? updateProfesional : addProfesional}>
            {editingProfesional ? "Actualizar" : "Agregar"}
          </Button>

          <Button theme={theme} onClick={() => generatePDF(newProfesional)}>
            Generar PDF
          </Button>
          
          {pdfGenerated && <SuccessMessage>PDF generado exitosamente.</SuccessMessage>}
        </FormContainer>

        {notification && (
          <Notification type={notification.type}>
            {notification.message}
          </Notification>
        )}
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
  transition: all 0.3s ease;
  border-radius: 10px;
     @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 12px;
  }

`;

const Header = styled.div`
 background-color: ${({ theme }) => theme === 'light' ? ' #fcebf2' : '#444'};
  border: 10px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  font-family: "Playfair Display", serif;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  
  h1, h2 {
    font-size: 30px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  }
`;

const ListaPersonal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  max-width: 1200px;
`;

const PersonalItem = styled.div`
  background-color: ${props => props.theme === 'light' ? '#ffffff' : '#424242'};
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  padding: 15px;
  flex: 1;
  min-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: ${props => props.professionalStatus ? (props.theme === 'light' ? '#202020' : '#fff') : '#999'};
  opacity: ${props => props.professionalStatus ? '1' : '0.6'};

  .boton_nombre_profesional_calendario {
    font-size: 18px;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    color: ${props => props.professionalStatus ? (props.theme === 'light' ? '#c98695' : '#9247FC') : '#999'};
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    display: block;
    width: 100%;
    text-decoration: underline;
    transition: color 0.3s;

    &:hover {
      color: ${props => props.professionalStatus ? (props.theme === 'light' ? '#a75d53' : '#7522e6') : '#999'};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  button { background-color: ${props => props.theme === 'light' ? '#ffffff' : '#424242'};
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  color: ${props => props.theme === 'light' ? '#31708f' : '#fff'};
  border-radius: 10px;
  }
`;

const FormContainer = styled.div`
  background-color: ${props => props.theme === 'light' ? '#ffffff' : '#424242'};
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  input {
    padding: 12px;
    background-color: ${props => props.theme === 'light' ? '#ffffff' : '#21252B'};
    border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
    border-radius: 5px;
    font-size: 16px;
    width: calc(100% - 24px);
    margin-bottom: 10px;
    box-sizing: border-box;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};

    &::placeholder {
      color: ${props => props.theme === 'light' ? '#969593' : '#a6a6a6'};
    }
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px 0;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme === 'light' ? '#a75d53' : '#7522e6'};
  }
`;

const PasswordDisplay = styled.p`
  background-color: ${props => props.theme === 'light' ? '#e7f3fe' : '#424242'};
  color: ${props => props.theme === 'light' ? '#31708f' : '#fff'};
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 16px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
  border-radius: 5px;
  font-size: 16px;
  color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  background-color: ${props => props.theme === 'light' ? '#ffffff' : '#21252B'};

  &::placeholder {
    color: ${props => props.theme === 'light' ? '#969593' : '#a6a6a6'};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 5px 10px;
    background-color: ${props => props.theme === 'light' ? '#c98695' : '#9247FC'};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme === 'light' ? '#a75d53' : '#7522e6'};
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 14px;
    color: ${props => props.theme === 'light' ? '#202020' : '#fff'};
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${props => props.type === 'error' ? '#ff6b6b' : '#51cf66'};
  color: white;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out;
`;
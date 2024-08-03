import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'; 

export const AgendarCitaAdmin = () => {
    const [profesionales, setProfesionales] = useState([]);
    const [selectedProfesional, setSelectedProfesional] = useState('');

    useEffect(() => {
        // Función para obtener los datos de los profesionales
        const fetchProfesionales = async () => {
            try {
                const response = await axios.get('https://api.example.com/profesionales'); // Cambia la URL a tu endpoint
                setProfesionales(response.data);
            } catch (error) {
                console.error('Error al obtener los profesionales:', error);
            }
        };

        fetchProfesionales();
    }, []);

    const handleChange = (event) => {
        setSelectedProfesional(event.target.value);
    };

    return (
        <div className='contenedor_AG_ADMIN'>
            <div className='Contenido_AG_ADMIN'>
                <div className='Lista_profesionales_AG_ADMIN'>
                    <div className='Titulo_profesionales__AG_ADMIN'>
                        <h4>Profesionales</h4>
                    </div>
                    
                    <div className='Lista_Profesionales_AG_ADMIN'>
                        <select value={selectedProfesional} onChange={handleChange}>
                            <option value="" disabled>Selecciona un profesional</option>
                            {profesionales.map(profesional => (
                                <option key={profesional.id} value={profesional.id}>
                                    {profesional.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AgendarCitaAdmin;

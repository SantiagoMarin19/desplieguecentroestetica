import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bxluhldahxrqbukrqcdy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHVobGRhaHhycWJ1a3JxY2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NTM3MTYsImV4cCI6MjAzNTAyOTcxNn0.0fcUept_tAqKCks-TYp0gp_8kZPDzOMiLAN8JEijvXg';

export const supabase = createClient(supabaseUrl, supabaseKey);

function AppDataBase() {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    fetchCliente();
  }, []);

  async function fetchCliente() {
    try {
      const { data, error } = await supabase.from('cliente').select('*');
      if (error) {
        throw error;
      }
      setCliente(data || []);
    } catch (error) {
      console.error('Error al obtener datos de prueba:', error.message);
    }
  }

  return (
    <div>
      <h2>Lista de Pruebas</h2>
      {cliente.length  > 0 ? (
        <ul>
          {cliente.map((e) => (
            <li key={e.name}>{e.telefono} - {e.correo} - {e.nombre}</li> // Ajusta según los campos que tengas en tu tabla prueba
          ))}
        </ul>
      ) : (
        <p>No se encontraron datos de prueba.</p>
      )}
    </div>
  );
}                                                         

// function AppDataBase() {
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//       getCountries();
//     }, []);

//     async function getCountries() {
//       const { data } = await supabase.from("countries").select();
//       setCountries(data);
//     }

//     return (
//       <ul>
//         {countries.map((country) => (
//           <li key={country.name}>{country.name} - {country.id}</li>
          
//         ))}
//       </ul>
//     );
//   }

export default AppDataBase;
import React, { useState, useEffect } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Background } from "../componentes/Background/Background";
import { Promociones } from "../componentes/Promociones/Promociones";
import { useNavigate } from "react-router-dom";
import { Piedepagina } from "../componentes/Footer/footer";

export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recupera el token del sessionStorage
    const storedToken = sessionStorage.getItem('sb-bxluhldahxrqbukrqcdy-auth-token');
    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken);
        if (parsedToken && parsedToken.user && parsedToken.user.user_metadata) {
          setUser(parsedToken.user.user_metadata.full_name);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error parsing token:', error);
        setUser(null); // En caso de error, asegurarse de que el estado no contenga datos corruptos
      }
    } else {
      setUser(null); // Si no hay token, asegurar que el estado esté limpio
    }
  }, []);

  function handleLogout() {
    // Eliminar el token y otros datos del localStorage y sessionStorage
    localStorage.removeItem('sb-bxluhldahxrqbukrqcdy-auth-token'); // Eliminar del localStorage
    sessionStorage.removeItem('sb-bxluhldahxrqbukrqcdy-auth-token'); // Eliminar del sessionStorage
    sessionStorage.removeItem('userDetails'); // Eliminar otros datos si es necesario

    // Actualizar el estado local
    setUser(null);

    // Redirigir a la página de inicio de sesión
    window.location.reload

    // Verificar que los datos hayan sido eliminados
    console.log('Local Storage:', localStorage.getItem('sb-bxluhldahxrqbukrqcdy-auth-token'));
    console.log('Session Storage:', sessionStorage.getItem('sb-bxluhldahxrqbukrqcdy-auth-token'));
  }

  return (
    <>
      <Promociones />
      <Navbar />
      <div className="user">
        <i className='bx bxs-user-circle'>
          {user}
        </i>
      </div>
      <button onClick={handleLogout}>
        Cerrar Sesión
      </button>
      <Background />
      <Piedepagina />
    </>
  );
};

export default Home;

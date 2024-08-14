import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Background } from "../componentes/Background/Background";
import { Promociones } from "../componentes/Promociones/Promociones";
import { useNavigate } from "react-router-dom";
import { Piedepagina } from "../componentes/Footer/footer";

export const Home = ({ token }) => {
  const navigate = useNavigate();

  function handleLogout() {
 
    sessionStorage.removeItem('token');


    window.location.reload();
    
 
  }

  return (
    <>
      <Promociones />
      <Navbar />
      <div className="user">
        <i className='bx bxs-user-circle'>
          {token && token.user.user_metadata.full_name}
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

import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import { Piedepagina } from "../componentes/Footer/footer";

export const Acerca_de = ({ token }) => {
  function handleLogout() {
    sessionStorage.removeItem('token');
    window.location.reload(); // Recarga la página después de cerrar sesión
  }

  return (
    <>
      <Promociones />
      <Navbar token={token} handleLogout={handleLogout} />
      <div className="askdjk">
        <h1>Hola mundo</h1>
      </div>
      <Piedepagina />
    </>
  );
};

export default Acerca_de;

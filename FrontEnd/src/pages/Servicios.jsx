import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import { CompServicios } from "../componentes/CompoServicios/CompServicios";
import { Piedepagina } from "../componentes/Footer/footer";

export const Servicios = ({ token }) => {
  function handleLogout() {
    sessionStorage.removeItem('token');
    window.location.reload(); // Recarga la página después de cerrar sesión
  }

  return (
    <>
      <Promociones />
      <Navbar token={token} handleLogout={handleLogout} />
      <CompServicios />
      <Piedepagina />
    </>
  );
};

export default Servicios;

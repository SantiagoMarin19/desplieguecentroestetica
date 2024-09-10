import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import { CompServicios } from "../componentes/CompoServicios/CompServicios";
import { Piedepagina } from "../componentes/Footer/footer";

export const Servicios = ({ token }) => {
 

  return (
    <>
      <Promociones />
      <Navbar token={token} />
      <CompServicios />
      <Piedepagina />
    </>
  );
};

export default Servicios;

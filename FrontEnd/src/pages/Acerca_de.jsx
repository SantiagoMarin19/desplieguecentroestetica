import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import { Piedepagina } from "../componentes/Footer/footer";
import Nosotros from "../componentes/Nosotros/Nosotros";

export const Acerca_de = ({ token }) => {
  

  return (
    <>
      <Promociones />
      <Navbar token={token} />
      <Nosotros></Nosotros>
     
      <Piedepagina />
    </>
  );
};

export default Acerca_de;

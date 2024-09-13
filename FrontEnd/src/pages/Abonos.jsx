import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import { Piedepagina } from "../componentes/Footer/footer";
import AbonoInfo from "../componentes/AbonoInfo/AbonoInfo";

export const Abono = ({ token }) => {
  

  return (
    <>
      <Promociones />
      <Navbar token={token} />
      <AbonoInfo></AbonoInfo>
     
      <Piedepagina />
    </>
  );
};

export default Abono;

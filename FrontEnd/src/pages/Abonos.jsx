import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Piedepagina } from "../componentes/Footer/footer";
import AbonoInfo from "../componentes/AbonoInfo/AbonoInfo";

export const Abono = ({ token }) => {
  

  return (
    <>
      <Navbar token={token} />
      <AbonoInfo></AbonoInfo>
     
      <Piedepagina />
    </>
  );
};

export default Abono;

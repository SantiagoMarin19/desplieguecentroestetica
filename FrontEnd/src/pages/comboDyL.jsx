import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import {ComboSyLifting} from "../componentes/Servicio_detalle/Combosombreadio+lifting";



export const Combodepylif = () => {

  return (
    <>
   <Promociones></Promociones>
        <Navbar></Navbar>
        <ComboSyLifting></ComboSyLifting>
        
        

    </>
  );
};

export default Combodepylif;
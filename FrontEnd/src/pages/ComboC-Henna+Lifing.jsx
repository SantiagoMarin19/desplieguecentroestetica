import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import {ComboHyLifting} from "../componentes/Servicio_detalle/ComboHenna+Lifiting";



export const ComboHeyLifting = () => {

  return (
    <>
   <Promociones></Promociones>
        <Navbar></Navbar>
        <ComboHyLifting></ComboHyLifting>
        
        

    </>
  );
};

export default ComboHeyLifting;
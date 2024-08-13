import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Promociones } from "../componentes/Promociones/Promociones";
import {ComboSyLifting} from "../componentes/Servicio_detalle/ComboLaminacionyExtension";



export const Combolamiyextension= () => {

  return (
    <>
   <Promociones></Promociones>
        <Navbar></Navbar>
        <ComboSyLifting></ComboSyLifting>
        
        

    </>
  );
};

export default Combolamiyextension;
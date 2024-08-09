import React, { useContext, useState } from "react";
import { Agendamiento } from "../componentes/Agendamiento/Agendamiento";
import {Promociones} from "../componentes/Promociones/Promociones";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Piedepagina } from "../componentes/Footer/footer";

export const Agendar = () => {

  return (
    <>
       <Promociones></Promociones>
       <Navbar></Navbar>
    <body className="helloxd">
      <Agendamiento/>
    </body>
    <Piedepagina></Piedepagina>
      

   
        
        

    </>
  );
};

export default Agendar;
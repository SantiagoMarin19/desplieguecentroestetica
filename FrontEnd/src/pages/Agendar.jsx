import React, { useContext, useState } from "react";
import { Agendamiento } from "../componentes/Agendamiento/Agendamiento";
import {Promociones} from "../componentes/Promociones/Promociones";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Piedepagina } from "../componentes/Footer/footer";

export const Agendar = ({ token }) => {

  return (
    <>
       <Promociones></Promociones>
       <Navbar token={token} />
    <body className="helloxd">
      <Agendamiento/>
    </body>
      

   
        
        

    </>
  );
};

export default Agendar;
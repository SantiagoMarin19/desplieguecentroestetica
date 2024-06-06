import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Background } from "../componentes/Background/Background";
import {Promociones} from "../componentes/Promociones/Promociones";
import {Piedepagina} from "../componentes/Footer/footer";


export const Home = () => {

  return (
    <>
    <Promociones></Promociones>
     <Navbar></Navbar>
       
   <Background></Background>
   <Piedepagina></Piedepagina>
       
        
    </>
  );
};

export default Home;
import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Background } from "../componentes/Background/Background";
import {Promociones} from "../componentes/Promociones/Promociones";



export const Home = ({token}) => {

  return (
    <>
   <Promociones></Promociones>
        <Navbar></Navbar>
        <div className="user">        
         <i class='bx bxs-user-circle'>{token && token.user.user_metadata.full_name}</i>
        </div>
 
        <Background></Background>
        
        

    </>
  );
};

export default Home;
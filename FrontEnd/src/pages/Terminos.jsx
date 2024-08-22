import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {Politicases} from "../componentes/Politicas/Politicas"
import {Piedepagina} from "../componentes/Footer/footer"

export const Condiciones = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar token={token} />

        <Politicases></Politicases>    
        <Piedepagina/>    
      
        </>
       
    )
}
export default Condiciones;
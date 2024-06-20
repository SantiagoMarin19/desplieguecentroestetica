import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {CompServicios2} from "../componentes/CompoServicios2/CompServicios2"
import {Piedepagina} from "../componentes/Footer/footer"

export const Servicios2 = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <CompServicios2></CompServicios2>    
        <Piedepagina></Piedepagina>    
        </>
       
    )
}
export default Servicios2;
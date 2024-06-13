import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {CompServicios1} from "../componentes/CompoServicios1/CompServicios1"
import {Piedepagina} from "../componentes/Footer/footer"

export const Servicios1 = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <CompServicios1></CompServicios1>        
        </>
       
    )
}
export default Servicios1;
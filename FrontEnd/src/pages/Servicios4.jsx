import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {CompServicios3} from "../componentes/CompoServicios3/CompServicios3"
import {Piedepagina} from "../componentes/Footer/footer"

export const Servicios4 = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <CompServicios4></CompServicios4>    
        <Piedepagina></Piedepagina>    
        </>
       
    )
}
export default Servicios4;
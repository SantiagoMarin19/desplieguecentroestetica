import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {CompServicios} from "../componentes/CompoServicios/CompServicios"
import { Piedepagina } from "../componentes/Footer/footer";

export const Servicios = () => {
        return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <CompServicios></CompServicios>
        <Piedepagina></Piedepagina>
        </>
    )
}
export default Servicios;


import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {Pestañas} from "../componentes/Servicio_detalle/serviciopestañas"

export const ServicioPestañas = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <Pestañas></Pestañas>
        </>
    )
}
export default ServicioPestañas;


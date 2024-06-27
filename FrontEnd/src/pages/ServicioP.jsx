import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {Pestañas} from "../componentes/Servicio_detalle/serviciopestañas"

export const Pestañas = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <serviciopestañas></serviciopestañas>
        </>
    )
}
export default Pestañas;


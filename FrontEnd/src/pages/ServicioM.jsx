import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {Micropigmentacion} from "../componentes/Servicio_detalle/serviciomicropigmentacion"

export const Micropigmentacion = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <Serviciocejas></Serviciocejas>
        </>
    )
}
export default Micropigmentacion;


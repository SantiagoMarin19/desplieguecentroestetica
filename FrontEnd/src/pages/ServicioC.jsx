import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {Cejas} from "../componentes/Servicio_detalle/Serviciocejas"

export const Cejas = () => {
    return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <Serviciocejas></Serviciocejas>
        </>
    )
}
export default Cejas;


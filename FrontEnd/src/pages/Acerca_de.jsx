import React, { useContext, useState } from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import {Promociones} from "../componentes/Promociones/Promociones"
import {CompServicios} from "../componentes/CompoServicios/CompServicios"
import { Piedepagina } from "../componentes/Footer/footer";

export const Acerca_de = () => {
        return (
        <>
    <Promociones></Promociones>
    <Navbar></Navbar>
        <div className="askdjk">
            <h1>Hola mundo</h1>
        </div>
        <Piedepagina></Piedepagina>
        </>
    )
}
export default Acerca_de;

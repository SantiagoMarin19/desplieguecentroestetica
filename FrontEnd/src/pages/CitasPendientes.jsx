import React from "react";
import { Piedepagina } from "../componentes/Footer/footer";
import Navbar from "../componentes/Navbar/Navbar";
import Promociones from "../componentes/Promociones/Promociones";
import CitasPendientes from "../componentes/CitasPendientes/CitasPendientes";


export const CitaPend = () => {

    return (
        <>
            <Promociones></Promociones>
            <Navbar></Navbar>
            <CitasPendientes></CitasPendientes>
            <Piedepagina></Piedepagina>

        </>




    );
};

export default CitaPend;
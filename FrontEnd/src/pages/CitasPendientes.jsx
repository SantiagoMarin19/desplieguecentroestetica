import React from "react";
import { Piedepagina } from "../componentes/Footer/footer";
import Navbar from "../componentes/Navbar/Navbar";
import Promociones from "../componentes/Promociones/Promociones";
import CitasPendientes from "../componentes/CitasPendientes/CitasPendientes";


export const CitaPend = ({ token }) => {

    return (
        <>
            <Promociones></Promociones>
            <Navbar token={token} />

            <CitasPendientes/>
            <Piedepagina/>

        </>




    );
};

export default CitaPend;
import React from "react";
import Navbar from "../componentes/Navbar/Navbar";
import Promociones from "../componentes/Promociones/Promociones";
import CitasPendientes from "../componentes/CitasPendientes/CitasPendientes";
import { Piedepagina } from "../componentes/Footer/footer";



export const CitaPend = ({ token }) => {

    return (
        <>
            <Promociones></Promociones>
            <Navbar token={token} />
            <CitasPendientes></CitasPendientes>
          
            <Piedepagina/>
        </>
          




    );
};

export default CitaPend;
import React from "react";
import Navbar from "../componentes/Navbar/Navbar";
import CitasPendientes from "../componentes/CitasPendientes/CitasPendientes";
import { Piedepagina } from "../componentes/Footer/footer";



export const CitaPend = ({ token }) => {

    return (
        <>
            <Navbar token={token} />
            <CitasPendientes></CitasPendientes>
          
            <Piedepagina/>
        </>
          




    );
};

export default CitaPend;
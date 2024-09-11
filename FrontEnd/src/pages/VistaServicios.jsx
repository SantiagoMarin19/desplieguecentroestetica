import React, { useContext, useState } from "react";
import Navbar from "../componentes/Navbar/Navbar";
import { VistaDetalle } from "../componentes/VistaDetalladaServ/VistaDetalleSer";
import { Piedepagina } from "../componentes/Footer/footer";
import Promociones from "../componentes/Promociones/Promociones";




export const VistaServicios = ({token}) => {



    return (
        <>
        <Promociones></Promociones>
        <Navbar token={token} />
        <VistaDetalle></VistaDetalle>
        <Piedepagina></Piedepagina>



        </>





    );
};



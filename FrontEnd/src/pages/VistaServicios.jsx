import React, { useContext, useState } from "react";
import Navbar from "../componentes/Navbar/Navbar";
import { VistaDetalle } from "../componentes/VistaDetalladaServ/VistaDetalleSer";
import { Piedepagina } from "../componentes/Footer/footer";
import Promociones from "../componentes/Promociones/Promociones";




export const VistaServicios = () => {



    return (
        <>
        <Promociones></Promociones>
        <Navbar></Navbar>
        <VistaDetalle></VistaDetalle>
        <Piedepagina></Piedepagina>



        </>





    );
};



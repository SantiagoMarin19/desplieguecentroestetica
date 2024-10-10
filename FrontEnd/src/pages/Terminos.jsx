import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Politicases } from "../componentes/Politicas/Politicas"
import { Piedepagina } from "../componentes/Footer/footer"

export const Condiciones = () => {
    return (
        <>
            <Navbar />
            <Politicases></Politicases>
            <Piedepagina />

        </>

    )
}
export default Condiciones;
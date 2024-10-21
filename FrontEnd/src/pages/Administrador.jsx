import React from "react";
import { Sidebar } from "../componentes/Sidebar/Sidebar";
import { PersonalAdmin } from "../componentes/PagesAdmin/PersonalAdmin";
import ServiciosAdmin from "../componentes/PagesAdmin/ServiciosAdmin";
import CitasAdmin from "../componentes/PagesAdmin/CitasAdmin";
import { Piedepagina } from "../componentes/Footer/footer";
import Navbar from "../componentes/Navbar/Navbar";

export const AdministradorComponente = ({ token }) => {
  return (
    <>
      <Sidebar />
      <PersonalAdmin />
      <ServiciosAdmin />
      <CitasAdmin />
      <Piedepagina></Piedepagina>
    </>
  );
};

export default AdministradorComponente;

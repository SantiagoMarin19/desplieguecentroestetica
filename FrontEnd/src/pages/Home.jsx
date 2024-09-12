import React from "react";
import { Navbar } from "../componentes/Navbar/Navbar";
import { Background } from "../componentes/Background/Background";
import { Promociones } from "../componentes/Promociones/Promociones";
import { Piedepagina } from "../componentes/Footer/footer";

export const Home = ({ token }) => {
  return (
    <>
      <Promociones />
      <Navbar token={token} />
      <Background />
      <Piedepagina />
    </>
  );
};

export default Home;

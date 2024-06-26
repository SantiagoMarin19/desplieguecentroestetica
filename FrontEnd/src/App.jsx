import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompServicios from './pages/Servicios';
import {Piedepagina} from './componentes/Footer/footer';
import {  Pestañas} from "./componentes/Servicio_detalle/serviciopestañas";
import {Cejas} from "./componentes/Servicio_detalle/Serviciocejas"
import { Micropigmentacion } from "./componentes/Servicio_detalle/serviciomicropigmentacion";



function App() {
  return (
   <CompServicios></CompServicios>
  );
};

export default App;
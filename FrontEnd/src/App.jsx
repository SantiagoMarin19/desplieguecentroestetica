import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppDataBase from './supabase/supabase';
import VerificarCitas from './supabase/verificarCitas';



function App() {
  return (
 
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/DB" element={<AppDataBase />} />
      <Route path="/login" element={<VerificarCitas/>} />


    </Routes>
  </Router>
  );

}

   


   

export default App;
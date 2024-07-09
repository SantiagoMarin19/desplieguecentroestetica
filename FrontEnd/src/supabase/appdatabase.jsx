
import React, { useEffect, useState } from "react";
import supabase from "./supabaseconfig"; 

function AppDataBase() {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    getCliente();
  }, []);

  async function getCliente() {
    const { data } = await supabase.from("cliente").select();
    setCliente(data);
  }

  return (
    <ul>
      {cliente.map((cliente) => (
        <li key={cliente.nombre}>{cliente.telefono} - {cliente.nombre}</li>
      ))}
    </ul>
  );
}

export default AppDataBase;

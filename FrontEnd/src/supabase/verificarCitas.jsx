import React, { useState } from 'react';
import { supabase } from './supabaseclient';


function VerificarCitas() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await supabase.auth.signIn({
        email,
      })
    } catch (error) {
      console.error(error)

    }



  };



  return (

    <div>
      <form onSubmit={handleSubmit}>


        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />



        <button type="submit">Enviar</button>
      </form>

    </div>
  );
}

export default VerificarCitas;

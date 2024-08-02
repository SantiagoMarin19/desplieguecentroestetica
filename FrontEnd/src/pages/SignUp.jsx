import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  supabase  from "../supabase/supabaseconfig";
import "./Estilos/SignUp.css"

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

 async function handleSubmit(e) {
  e.preventDefault();

  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
        },
      },
    });

    if (error) {
      throw error;
    }

    alert('Verifica tu correo electrónico para el enlace de confirmación.');
  } catch (error) {
    if (error.response && error.response.status === 429) {
      // Manejar el error de límite de tasa (429)
      alert('Se ha alcanzado el límite de solicitudes. Por favor, espera unos momentos y vuelve a intentarlo.');
    } else {
      // Otros errores
      alert('Ocurrió un error al registrarse:', error.message);
    }
  }
}




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Nombre'
          name='fullName'
          onChange={handleChange}
        />

        <input 
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input 
          placeholder='Contraseña'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button type='submit'>
          Registrarme
        </button>


      </form>
      Ya tienes una cuenta?<Link to='/loginsupa'>Inicia sesión</Link> 
    </div>


  )
}

export default SignUp
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseconfig';
import flechaizq from "../assets/images/decoración.png";
import or from "../assets/images/OR.png";
import flechader from "../assets/images/decor.png";
import "./Estilos/SignUp.css";

const SignUp = ({ closeModal }) => {
  let navigate = useNavigate();
  let location = useLocation(); // Use useLocation to capture the state

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
        if (error.status === 429) {
          alert('Se ha alcanzado el límite de solicitudes. Por favor, espera unos momentos y vuelve a intentarlo.');
        } else {
          throw error; // Propaga otros errores
        }
      } else {
        alert('Verifica tu correo electrónico para el enlace de confirmación.');
      }
    } catch (error) {
      alert('Ocurrió un error al registrarse: ' + error.message);
    }
  }

  return (
    <div className='bodySesion'>
      <form onSubmit={handleSubmit}>
        <div className='titulosesion'><b>Registrate</b></div>
        <div className='subtitsesion'>Complete los campos</div>
        <div className='datosbody'>
          <div className='contenedorNombre'>
            <input className='inputcontenedores'
              placeholder='Nombre'
              name='fullName'
              onChange={handleChange}
            />
          </div>
          <div className='contenedorCorreo'>
            <input className='inputcontenedores'
              placeholder='Email'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='contenedorContraseña'>
            <input className='inputcontenedores'
              placeholder='Contraseña'
              name='password'
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="botoningresar" type='submit'>Registrarse</button>
        <div className='decoraciones'>
          <div className='deco1'><img className="img-dec" src={flechaizq} alt="Decoración izquierda" /></div>
          <div className='deco2'><img className="img-o" src={or} alt="OR" /></div>
          <div className='deco3'><img className="img-decor" src={flechader} alt="Decoración derecha" /></div>
        </div>
      </form>
      <div className='poncuenta'>
        Ya tienes una cuenta?
        <Link to="/loginsupa" onClick={() => openModal('LoginUser')}>
          Inicia sesión
        </Link>
      </div>

    </div>
  );
}

export default SignUp;

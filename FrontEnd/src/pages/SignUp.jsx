import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseconfig';
import flechaizq from "../assets/images/decoración.png";
import or from "../assets/images/OR.png";
import flechader from "../assets/images/decor.png";
import { useModal } from '../componentes/modal/ContextModal';
import "./Estilos/SignUp.css";

const SignUp = ({ closeModal }) => {
  let navigate = useNavigate();
  const { openModal } = useModal(); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

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
          throw error; 
        }
      } else {
        alert('Verifica tu correo electrónico para el enlace de confirmación.');
        navigate('/login'); // Redirige al login después del registro exitoso
      }
    } catch (error) {
      alert('Ocurrió un error al registrarse: ' + error.message);
    }
  }

  return (
    <div className='bodySesion'>
      <form onSubmit={handleSubmit}>
        <div className='titulosesion'><b>Registrate</b></div>
        <div className='subtitsesion'>Complete los campos para Registrarse</div>
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
          <div className='contenedorConfirmarContra'>
            <input className='inputcontenedores'
              placeholder='Confirmar Contraseña'
              name='confirmPassword'
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
        <p>Ya tienes una cuenta?  <span
          className="registrarme-link"
          onClick={() => {
            closeModal();
            setTimeout(() => openModal('login'), 300); 
          }}>
          Iniciar Sesion.
        </span></p>
      </div>
    </div>
  );
}

export default SignUp;

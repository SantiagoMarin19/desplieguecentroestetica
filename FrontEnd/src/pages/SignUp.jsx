import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [errors, setErrors] = useState({
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
    validate(name, value);
  }

  function validate(name, value) {
    let error = '';
    switch (name) {
      case 'fullName':
        error = value.trim() === '' ? 'El nombre es obligatorio' : '';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailPattern.test(value) ? 'Correo electrónico inválido' : '';
        break;
      case 'password':
        error = value.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : '';
        break;
      case 'confirmPassword':
        error = value !== formData.password ? 'Las contraseñas no coinciden' : '';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validar todos los campos antes de enviar el formulario
    Object.keys(formData).forEach(name => validate(name, formData[name]));
    if (Object.values(errors).some(error => error)) {
      return; // Si hay errores, no enviar el formulario
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
        openModal('login')

        
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
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>
          <div className='contenedorCorreo'>
            <input className='inputcontenedores'
              placeholder='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className='contenedorContraseña'>
            <input className='inputcontenedores'
              placeholder='Contraseña'
              name='password'
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className='contenedorConfirmarContra'>
            <input className='inputcontenedores'
              placeholder='Confirmar Contraseña'
              name='confirmPassword'
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
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

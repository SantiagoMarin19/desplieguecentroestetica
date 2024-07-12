import React, { useState } from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import "../mostrarcontraseña";
import supabase from "../../supabase/supabaseconfig"; 
import deco from "../../assets/images/decoración.png";
import decor from "../../assets/images/decor.png";
import o from "../../assets/images/OR.png";

const ModalRegistro = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    repPassword: ''
  });

  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  function openLoginModal() {
    setShowModalLogin(true);
    setShowModalRegister(false);
  }

  function openRegisterModal() {
    setShowModalLogin(false);
    setShowModalRegister(true);
  }

  function closeModals() {
    setShowModalLogin(false);
    setShowModalRegister(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Realiza el registro en Supabase
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

      // Reinicia el formulario después del registro exitoso
      setFormData({
        fullName: '',
        email: '',
        password: '',
        repPassword: ''
      });

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
    <div className='todoingreso'>
      <div className='all'>
        {/* Modal de Iniciar Sesión */}
        <div className={`modal fade ${showModalLogin ? 'show' : ''}`} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={{ display: showModalLogin ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={closeModals} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='titini'>Iniciar sesión</div>
                <div className='subtit'>Complete los campos a continuación</div>
                <div className='datos'>
                  <input type="text" name='correo' id='Inputmail1' placeholder="Ingrese su correo" />
                  <div className='cont2'>
                    <input type="password" name='contraseña' id="Input1" placeholder="Contraseña" />
                    <i className='bx bx-show' />
                  </div>
                  <div className='botoningreso'><button type='submit'><b>Agendar</b></button></div>
                </div>
                <div className='decoraciones'>
                  <div className='deco1'><img className="img-dec" src={deco} /></div>
                  <div className='deco2'><img className="img-o" src={o} /></div>
                  <div className='deco3'><img className="img-decor" src={decor} /></div>
                </div>
                <div className='lodeabajo'>
                  <div className='acclog'>No tienes cuenta?</div>
                  <button className="btn btn-primary" onClick={openRegisterModal}>Registrarme</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Registro */}
        <div className={`modal fade ${showModalRegister ? 'show' : ''}`} id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" style={{ display: showModalRegister ? 'block' : 'none' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={closeModals} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='titini'>Registrarse</div>
                <div className='subtit'>Complete los campos a continuación</div>
                <form onSubmit={handleSubmit}>
                  <div className='datos'>
                    <input type="text" name='fullName' id='InputName' placeholder="Nombre completo" value={formData.fullName} onChange={handleChange} />
                    <input type="text" name='correo' id='Inputmail2' placeholder="Ingrese su correo" value={formData.email} onChange={handleChange} />
                    <div className='cont2'>
                      <input type="password" name='password' id="Input2" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
                      <i className='bx bx-show' />
                    </div>
                    <div className='cont3'>
                      <input type="password" name='repPassword' id="Input3" placeholder="Confirmar contraseña" value={formData.repPassword} onChange={handleChange} />
                      <i className='bx bx-show' />
                    </div>
                    <div className='botoningreso'><button type='submit'><b>Registrarse</b></button></div>
                  </div>
                </form>
                <div className='decoraciones'>
                  <div className='deco1'><img className="img-dec" src={deco} /></div>
                  <div className='deco2'><img className="img-o" src={o} /></div>
                  <div className='deco3'><img className="img-decor" src={decor} /></div>
                </div>
                <div className='lodeabajo'>
                  <div className='acclog'>Ya tienes cuenta?</div>
                  <button className="btn btn-primary" onClick={openLoginModal}>Iniciar sesión</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Iniciar Sesión */}
        <button className="btn btn-principal" onClick={openLoginModal}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default ModalRegistro;

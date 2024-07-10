import React from 'react';
import 'boxicons'
import 'boxicons/css/boxicons.min.css';
import "./ModalRegistro.css"
import "../mostrarcontraseña"
import deco from "../../assets/images/decoración.png"
import decor from "../../assets/images/decor.png"
import o from "../../assets/images/OR.png"

export const ModalRegistro=() => {
return (
    <div className='todoingreso'>
        <div className='all'>

        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='titini'>Ingresa tus Datos</div>
    <div className='subtit'>Complete los campos a continuación</div>
      <div className='datos'>
    <input type="text" name='email' placeholder = "Ingrese su nombre"/>
    <input type="text" name='correo' placeholder = "Ingrese su correo"/>
    <input type="text" name='telefono' placeholder = "Ingrese su teléfono"/>
    <div className='botoningreso'><button type='submit'><b>Agendar</b></button></div>
</div>

<div className='decoraciones'>
<div className='deco1'><img className="img-dec" src={deco} /></div>
<div className='deco2'><img className="img-o" src={o} /></div>
<div className='deco3'><img className="img-decor" src={decor} /></div>
</div>

<div className='lodeabajo'>
<div className='acclog'>No tienes cuenta?</div>
<button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Registrarme</button>
</div>
      </div>

        
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <div className='titini'>Registrarse</div>
<div className='subtit'>Complete los campos a continuación</div>


<div className='datos'>

<div className='cont1'>
    <input type="text" name='email' id="Input0" placeholder = "Email" className='holaxs'/>
    </div>

    <div className='cont2'>
    <input type="password" name='contraseña' id="Input1" placeholder = "Contraseña" />
    <i className='bx bx-show'/>
    </div>

    <div className='cont3'>
    
    <input type="password" name='repcontraseña'  id="Input" placeholder = "Confirmar contraseña"/>
    <i className='bx bx-show'/>
    </div>
    <div className='botoningreso'><button type='submit'><b>Registrarse</b></button></div>
</div>

<div className='decoraciones'>
<div className='deco1'><img className="img-dec" src={deco} /></div>
<div className='deco2'><img className="img-o" src={o} /></div>
<div className='deco3'><img className="img-decor" src={decor} /></div>
</div>

<div className='lodeabajo'>
<div className='acclog'>ya tienes cuenta?</div>
<div className='accini'>Iniciar sesión</div>
</div>

      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button class="btn btn-principal" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>

</div>
</div>

);
}

export default ModalRegistro;
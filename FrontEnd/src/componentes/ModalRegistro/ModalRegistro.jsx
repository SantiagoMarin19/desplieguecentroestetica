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
<div className='titini'>Registrarse</div>
<div className='subtit'>Complete los campos a continuación</div>


<div className='datos'>
    <div className='cont1'>
       
    <input type="password" name='contraseña' id="Input1" placeholder = "Contraseña"/>
    <i className='bx bx-show'/></div>
    <div className='cont2'>
    
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
</div>

);
}

export default ModalRegistro;
import React from 'react';
import 'boxicons'
import "./ModalRegistro.css"
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
        <i className='bx bx-show'/>
    <input type="password" name='contraseña' placeholder = "Contraseña"/></div>
    <div className='cont2'>
    <input type="password" name='repcontraseña' placeholder = "Confirmar contraseña"/>
    <box-icon name='show' color='#D9D9D9' ></box-icon></div>
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

<script>
    
</script>

</div>
</div>

);
}

export default ModalRegistro;
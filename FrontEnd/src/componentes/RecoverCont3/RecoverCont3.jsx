import React from 'react';
import "./RecoverCont3.css"
import "../mostrarcontraseña"

export const RecoverCont3=() => {
return (
    <div className='todoingreso'>
        <div className='all'>
<div className='titini'>Recuperar contraseña</div>
<div className='subtit'>Ingrese una nueva contraseña para su cuenta:</div>


<div className='datos'>
    <div className='cont1'>
       
    <input type="password" name='contraseña' id="Input1" placeholder = "Contraseña"/>
    <i className='bx bx-show'/></div>
    <div className='cont2'>
    
    <input type="password" name='repcontraseña'  id="Input" placeholder = "Confirmar contraseña"/>
    <i className='bx bx-show'/>
    </div>
    <div className='botoningreso'><button type='submit'><b> Guardar </b></button></div>
</div>

</div>
</div>

);
}

export default RecoverCont3;
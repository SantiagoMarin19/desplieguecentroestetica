import React from 'react';
import "./RecoverCont.css"
import deco from "../../assets/images/decoración.png"
import decor from "../../assets/images/decor.png"
import o from "../../assets/images/OR.png"

export const RecoverCont=() => {
return (
    <div className='todoingreso'>
        <div className='all'>
<div className='titini'>Recuperar contraseña</div>
<div className='subtit'>Por favor introduzca su correo electrónico:</div>


<div className='datos'>
    <input type="text" name='email' placeholder = "Ingrese su nombre"/>
    <div className='botoningreso'><button type='submit'><b>Recuperar</b></button></div>
</div>

<div className='decoraciones'>
<div className='deco1'><img className="img-dec" src={deco} /></div>
<div className='deco2'><img className="img-o" src={o} /></div>
<div className='deco3'><img className="img-decor" src={decor} /></div>
</div>

<div className='lodeabajo'>
<div className='acclog'>Recuerdas tu contraseña?</div>
<div className='accreg'>Iniciar sesión</div>
</div>

</div>
</div>

);
}

export default RecoverCont;
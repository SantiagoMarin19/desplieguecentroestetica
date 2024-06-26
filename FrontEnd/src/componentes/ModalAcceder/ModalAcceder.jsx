import React from 'react';
import deco from "../../assets/images/decoración.png"


export const ModalAcceder=() => {
return (
    <div className='todoingreso'>
<div className='titini'>Ingresa tus datos</div>
<div className='subtit'>Por favor complete los campos a continuación:</div>
<div className='datos'>

<div className='datos'>
    <input type="text" placeholder="Ingrese su nombre"/>
    <input type="text" placeholder="Ingrese su correo"/>
    <input type="text" placeholder="Ingrese su teléfono"/>
    <button>Agendar</button>
    <img className="img-dec" src={deco} />
</div>

</div>

</div>
);
}

export default ModalAcceder;
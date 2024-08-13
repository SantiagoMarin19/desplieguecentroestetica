import React from 'react';
import "./RecoverCont3.css"
import { Link } from 'react-router-dom';

export const RecoverCont3=() => {
return (
    <div className='bodySesion'>
        <div className='jajaxd'>
<div className='titulosesion'>Recuperar contraseña</div>
<div className='subtitsesion'>Ingrese una nueva contraseña para su cuenta:</div>


<div className='datosbody'>
    <div className='contenedorContraseña'>
       
    <input
              className="inputcontenedores"
              type="password"
              name='password'
              placeholder="Nueva contraseña"/></div>
              <div className='contenedorContraseña'>
    <input
              className="inputcontenedores"
              type="password"
              name='password'
              placeholder="Repita contraseña"/></div>
    
    </div>
    <button className="botoningresar" type='submit'> <Link to={"/"}>Guardar</Link></button>
</div>

</div>
);
}

export default RecoverCont3;
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import supabase from '../supabase/supabaseconfig';
import flechaizq from "../assets/images/decoración.png"
import or from "../assets/images/OR.png"
import flechader from "../assets/images/decor.png"
import "./Estilos/Login.css"


const LoginUser = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div className='bodySesion'>
      <form onSubmit={handleSubmit}>
        
                  <div className='titulosesion'><b>Iniciar sesión</b></div>
                  <div className='subtitsesion'>Complete los campos</div>
                  <div className='datosbody'>
                    <div className='contenedorCorreo'>
                    <input className="inputcontenedores" type="text" name='correo'  placeholder="Ingrese su correo"  onChange={handleChange}/>
                    </div><div className='contenedorContraseña'>
                      <input className="inputcontenedores" type="password" name='contraseña'  placeholder="Contraseña" onChange={handleChange} />
                      
                    </div></div>

                    <button className="botoningresar" type='submit'>Ingresar</button>
        <div className='decoraciones'>
                    <div className='deco1'><img className="img-dec" src={flechaizq} /></div>
                    <div className='deco2'><img className="img-o" src={or} /></div>
                    <div className='deco3'><img className="img-decor" src={flechader} /></div>
        </div>  

      </form>
      <div className='redireccionamiento'>
      <div className='poncuenta'>No tienes cuenta?</div> <Link to='/Registrar'>Registrate</Link> 
    </div></div>
  )
}

export default LoginUser;
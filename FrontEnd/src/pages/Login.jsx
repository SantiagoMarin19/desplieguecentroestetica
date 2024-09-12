import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseconfig';
import { toast } from 'react-toastify';  // Importa react-toastify para mostrar notificaciones
import 'react-toastify/dist/ReactToastify.css';
import flechaizq from "../assets/images/decoración.png";
import or from "../assets/images/OR.png";
import flechader from "../assets/images/decor.png";
import { useModal } from '../componentes/modal/ContextModal'; 
import "./Estilos/Login.css";

const LoginUser = ({ closeModal }) => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { openModal } = useModal();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;

            // Almacena el token y el nombre de usuario
            sessionStorage.setItem('token', JSON.stringify(data.session.access_token));
            sessionStorage.setItem('user', JSON.stringify(data.user.user_metadata.full_name));

            // Muestra la notificación de inicio de sesión exitoso
            toast.success(`Bienvenido de nuevo, ${data.user.user_metadata.full_name}`);

            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
            closeModal();  // Cierra el modal después de la redirección
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);  // Muestra una notificación en caso de error
        }
    }

    function handleForgotPasswordClick() {
        closeModal();
        navigate('/recover');
    }

    return (
        <div className='bodySesion'>
            <form onSubmit={handleSubmit}>
                <div className='titulosesion'><b>Iniciar sesión</b></div>
                <div className='subtitsesion'>Complete los campos</div>
                <div className='datosbody'>
                    <div className='contenedorCorreo'>
                        <input
                            className="inputcontenedores"
                            type="text"
                            name='email'
                            placeholder="Ingrese su correo"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='contenedorContraseña'>
                        <input
                            className="inputcontenedores"
                            type="password"
                            name='password'
                            placeholder="Contraseña"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='passwordforgot'> 
                        <span 
                            className="hover-pointer" 
                            onClick={handleForgotPasswordClick}
                        >
                            ¿Has olvidado la contraseña?
                        </span>
                    </div>
                </div>
                <button className="botoningresar" type='submit'>Ingresar</button>
                <div className='decoraciones'>
                    <div className='deco1'><img className="img-dec" src={flechaizq} alt="Decoración izquierda" /></div>
                    <div className='deco2'><img className="img-o" src={or} alt="OR" /></div>
                    <div className='deco3'><img className="img-decor" src={flechader} alt="Decoración derecha" /></div>
                </div>
            </form>
            <div className='poncuenta'>
                <p>No tengo cuenta. <span 
                    className="registrarme-link hover-pointer" 
                    onClick={() => openModal('SignUp')}
                >
                    Registrarme
                </span></p>
            </div>
        </div>
    );
}

export default LoginUser;

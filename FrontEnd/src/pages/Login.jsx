import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseconfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import flechaizq from "../assets/images/decoración.png";
import or from "../assets/images/OR.png";
import flechader from "../assets/images/decor.png";
import { useModal } from '../componentes/modal/ContextModal';
import './Estilos/Login.css';

const LoginUser = ({ closeModal }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { openModal } = useModal();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error('Por favor, complete todos los campos.');
            return;
        }
        if (!isValidEmail(formData.email)) {
            toast.error('Ingrese un correo electrónico válido.');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) throw error;
            const { user } = data;

            // Obtener rol desde la tabla 'profesional'
            const { data: profile, error: profileError } = await supabase
                .from('profesional')
                .select('rol')
                .eq('correo', user.email)
                .single();

            if (profileError && profileError.code !== 'PGRST116') { // Código de error para "no encontrado"
                throw profileError;
            }

            const rol = profile ? profile.rol : 'cliente'; // Asigna 'cliente' si no hay perfil

            // Guardar datos en sessionStorage
            sessionStorage.setItem('token', JSON.stringify(data.session.access_token));
            sessionStorage.setItem('user', JSON.stringify(user.email));
            sessionStorage.setItem('rol', rol);

            // Redirigir según el rol
            if (rol === 'admin') {
                navigate('/admin'); // Asegúrate de que esta ruta esté configurada en tu router
            } else if (rol === 'profesional') {
                navigate('/personal');
            } else {
                navigate('/'); // Ruta para clientes
            }

            closeModal();
        } catch (err) {
            console.error('Error al iniciar sesión:', err.message);
            toast.error('Error al iniciar sesión. Verifique sus credenciales.');
        }
    }

    function handleForgotPasswordClick() {
        closeModal();
        navigate('/RecuperarContraseña');
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

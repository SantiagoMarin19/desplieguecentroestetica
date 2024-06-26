// Importa React y los hooks necesarios
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./InicioSesion";

// Define y exporta el componente
export const InicioSesion = ({ showIn, handleCloseIn }) => {
  // Define los estados para el correo, contraseña, error y usuario
  const [correo, setCorreo] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(null);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [showUp, setShowUp] = useState(false);

  // Obtener la función `login` desde el contexto de autenticación
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleShowUp = () => {
    setShowUp(true);
    handleCloseIn();
  };

  const handleCloseUp = () => setShowUp(false);

  // Manejador para cambiar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  // Manejador para el cambio en el campo de correo
  const handleCorreoChange = (e) => {
    const value = e.target.value;
    setCorreo(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Formato de email no válido.");
    } else {
      setError(null);
    }
  };

  // Manejador para el cambio en el campo de contraseña
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setUserPassword(value);
    if (value.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
    } else if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      setError(
        "La contraseña debe contener al menos una letra mayúscula y al menos un número."
      );
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    if (!showIn) {
      // Reset all states when modal is closed
      setCorreo("");
      setUserPassword("");
      setError(null);
      setMostrarPassword(false);
      setEmailFocused(false);
      setPasswordFocused(false);
    }
  }, [showIn]);

  // Manejador para el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!correo || !userPassword) {
      setError("Todos los campos deben ser llenados.");
      return;
    }

    try {
      // Hacer la solicitud POST a la API para validar el inicio de sesión
      const response = await fetch("http://localhost:3000/validateLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: correo, user_password: userPassword }),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData));
        login(userData); // Llama a la función `login` con los datos del usuario
        handleCloseIn(); // Cierra el modal de inicio de sesión
        navigate("/");
      } else {
        // Si hay un error en la respuesta, mostrar un mensaje de error
        setError(
          "Correo o contraseña incorrectos. Por favor, inténtalo de nuevo."
        );
        console.error(
          "La respuesta no fue exitosa. Código de estado:",
          response.status
        );
      }
    } catch (error) {
      // Si hay un error en la solicitud, mostrar un mensaje de error
      console.error("Error al iniciar sesión:", error);
      setError(
        "Correo o contraseña incorrectos. Por favor, inténtalo de nuevo."
      );
    }
  };

  // Renderizar el formulario de inicio de sesión
  return (
    <>
      <Modal show={showIn} onHide={handleCloseIn}>
        <Modal.Body>
          <div
            className="container_login container-fluid"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <Modal.Header closeButton />
              <div className="col-xl-6">
                <form className="sign_in d-flex flex-column justify-content-center align-items-center">
                  <h1>¡Bienvenido de nuevo!</h1>
                  <p>
                    Explora, conecta y disfruta de una experiencia
                    personalizada, diseñada solo para ti.
                  </p>

                  <div className="inputs_login_content">
                    <div className="input_container_in">
                      <input
                        type="text"
                        onChange={handleCorreoChange}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(correo !== "")}
                        className={emailFocused ? "focused" : ""}
                      />
                      <label
                        className={`d-flex flex-row justify-content-center align-items-center ${
                          emailFocused ? "focused" : ""
                        }`}
                      >
                        <i className="bx bx-user"></i>
                        <p>e-mail or username</p>
                      </label>
                    </div>

                    <div className="container_password">
                      <div className="input_container_in">
                        <input
                          type={mostrarPassword ? "text" : "password"}
                          value={userPassword}
                          onChange={handlePasswordChange}
                          onFocus={() => setPasswordFocused(true)}
                          onBlur={() => setPasswordFocused(userPassword !== "")}
                          className={passwordFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            passwordFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-lock-alt"></i>
                          <p>password</p>
                        </label>
                        <div className="show_password_in">
                          {mostrarPassword ? (
                            <i
                              className="bx bxs-show"
                              onClick={togglePasswordVisibility}
                            ></i>
                          ) : (
                            <i
                              className="bx bxs-low-vision"
                              onClick={togglePasswordVisibility}
                            ></i>
                          )}
                        </div>
                      </div>

                      <NavLink className="forgot" to="/olvidaste">
                        ¿Olvidaste tu contraseña?{" "}
                      </NavLink>
                    </div>
                  </div>

                  <button className="button_in btn btn-primary" type="submit">
                    Iniciar Sesión
                  </button>
                </form>
              </div>
              <div className="content_register col-xl-6">
                <div className="start_register">
                  <h1>¿Ya formas parte de nuestra comunidad?</h1>
                  <p>
                    ¡Excelente! Inicia sesión aquí para explorar las novedades y
                    aprovechar todas tus ventajas exclusivas. ¡Tu próxima
                    aventura sobre ruedas te espera!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleShowUp}
                  >
                    Registrarse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Registro showUp={showUp} handleCloseUp={handleCloseUp} />
    </>
  );
};

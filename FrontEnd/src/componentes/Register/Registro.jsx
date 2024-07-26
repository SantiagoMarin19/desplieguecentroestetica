import React, { useState } from "react";
import "./Registro.css";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { InicioSesion } from "../InicioSesion/InicioSesion";

export const Registro = ({ showUp, handleCloseUp }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [no_documento, setNoDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [nombreFocused, setNombreFocused] = useState(false);
  const [direccionFocused, setDireccionFocused] = useState(false);
  const [ciudadFocused, setCiudadFocused] = useState(false);
  const [telefonoFocused, setTelefonoFocused] = useState(false);
  const [documentoFocused, setDocumentoFocused] = useState(false);
  const [correoFocused, setCorreoFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [showIn, setShowIn] = useState(false);

  const handleShowIn = () => {
    setShowIn(true);
    handleCloseUp();
  };

  const handleCloseIn = () => setShowIn(false);

  // Manejador para cambiar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setMostrarPassword(!mostrarPassword);
  };

  const handleNombreChange = (e) => {
    const value = e.target.value;
    setNombre(value);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMessage("Nombre solo debe contener letras y espacios.");
    } else {
      setErrorMessage("");
    }
  };

  const handleDireccionChange = (e) => {
    const value = e.target.value;
    setDireccion(value);
    setErrorMessage("");
  };

  const handleCiudadChange = (e) => {
    const value = e.target.value;
    setCiudad(value);
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setErrorMessage("Ciudad solo debe contener letras y espacios.");
    } else {
      setErrorMessage("");
    }
  };

  const handleTelefonoChange = (e) => {
    const value = e.target.value;
    setTelefono(value);
    if (!/^\d{0,10}$/.test(value)) {
      setErrorMessage("Teléfono solo puede contener hasta 10 números.");
    } else {
      setErrorMessage("");
    }
  };

  const handleIdentificacionChange = (e) => {
    const value = e.target.value;
    setNoDocumento(value);
    if (!/^\d{0,10}$/.test(value)) {
      setErrorMessage("Identificación solo puede contener hasta 10 números.");
    } else {
      setErrorMessage("");
    }
  };

  const handleCorreoChange = (e) => {
    const value = e.target.value;
    setCorreo(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrorMessage("Formato de email no válido.");
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setUserPassword(value);
    if (value.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
    } else if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      setErrorMessage(
        "La contraseña debe contener al menos una letra mayúscula y al menos un número."
      );
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (
      !nombre ||
      !direccion ||
      !ciudad ||
      !telefono ||
      !no_documento ||
      !correo ||
      !user_password
    ) {
      setErrorMessage("Todos los campos deben ser llenados.");
      return;
    }

    // Enviar datos al backend usando fetch
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          direccion: direccion,
          ciudad: ciudad,
          telefono: telefono,
          no_documento: no_documento,
          correo: correo,
          id_rol: 1,
          user_password: user_password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      // Limpiar campos y mensajes de error después del envío exitoso
      setNombre("");
      setDireccion("");
      setCiudad("");
      setTelefono("");
      setNoDocumento("");
      setCorreo("");
      setUserPassword("");
      setErrorMessage("");
      alert("Registro exitoso");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setErrorMessage(
        "Hubo un error al registrar el usuario. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <>
      <Modal show={showUp} onHide={handleCloseUp}>
        <Modal.Body>
          <div className="container_register container-fluid">
            <div className="row">
              <Modal.Header closeButton />
              <div className="col-xl-6">
                <form
                  className="sign_up d-flex flex-column justify-content-center align-items-center"
                  onSubmit={handleSubmit}
                >
                  <h1>¡Descubre el mundo sobre dos ruedas con nosotros!</h1>
                  <p>
                    ¡Únete a nosotros y lleva tu pasión por el ciclismo al
                    próximo nivel!
                  </p>

                  <div className="inputs_register_content">
                    <div className="inputs_first ">
                      <div className="input_container_up">
                        <input
                          type="text"
                          value={nombre}
                          onChange={handleNombreChange}
                          onFocus={() => setNombreFocused(true)}
                          onBlur={() => setNombreFocused(nombre !== "")}
                          className={nombreFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            nombreFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-user"></i>
                          <p>nombre</p>
                        </label>
                      </div>

                      <div className="input_container_up">
                        <input
                          type="text"
                          value={direccion}
                          onChange={handleDireccionChange}
                          onFocus={() => setDireccionFocused(true)}
                          onBlur={() => setDireccionFocused(direccion !== "")}
                          className={direccionFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            direccionFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-directions"></i>
                          <p>direccion</p>
                        </label>
                      </div>

                      <div className="input_container_up">
                        <input
                          type="text"
                          value={ciudad}
                          onChange={handleCiudadChange}
                          onFocus={() => setCiudadFocused(true)}
                          onBlur={() => setCiudadFocused(ciudad !== "")}
                          className={ciudadFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            ciudadFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-buildings"></i>
                          <p>ciudad</p>
                        </label>
                      </div>

                      <div className="input_container_up">
                        <input
                          type="text"
                          value={telefono}
                          onChange={handleTelefonoChange}
                          onFocus={() => setTelefonoFocused(true)}
                          onBlur={() => setTelefonoFocused(telefono !== "")}
                          className={telefonoFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            telefonoFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-phone"></i>
                          <p>telefono</p>
                        </label>
                      </div>
                    </div>

                    <div className="inputs_second">
                      <div className="input_container_up">
                        <input
                          type="text"
                          value={no_documento}
                          onChange={handleIdentificacionChange}
                          onFocus={() => setDocumentoFocused(true)}
                          onBlur={() =>
                            setDocumentoFocused(no_documento !== "")
                          }
                          className={documentoFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            documentoFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bxs-id-card"></i>
                          <p>número documento</p>
                        </label>
                      </div>

                      <div className="input_container_up">
                        <input
                          type="text"
                          value={correo}
                          onChange={handleCorreoChange}
                          onFocus={() => setCorreoFocused(true)}
                          onBlur={() => setCorreoFocused(correo !== "")}
                          className={correoFocused ? "focused" : ""}
                        />
                        <label
                          className={`d-flex flex-row justify-content-center align-items-center ${
                            correoFocused ? "focused" : ""
                          }`}
                        >
                          <i className="bx bx-envelope"></i>
                          <p>email</p>
                        </label>
                      </div>

                      <div className="input_container_up">
                        <input
                          type={mostrarPassword ? "text" : "password"}
                          value={user_password}
                          onChange={handlePasswordChange}
                          onFocus={() => setPasswordFocused(true)}
                          onBlur={() =>
                            setPasswordFocused(user_password !== "")
                          }
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

                        <div className="show_password_up">
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
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="error_message d-flex flex-row justify-content-center align-items-center ">
                      <i className="bx bx-error-circle"></i>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button className="button_up btn btn-primary" type="submit">
                    Registrarse
                  </button>
                </form>
              </div>
              <div className="content_login col-xl-6">
                <div className="start_login">
                  <h1>¿Ya formas parte de nuestra comunidad?</h1>
                  <p>
                    ¡Excelente! Inicia sesión aquí para explorar las novedades y
                    aprovechar todas tus ventajas exclusivas. ¡Tu próxima
                    aventura sobre ruedas te espera!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleShowIn}
                  >
                    Iniciar sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

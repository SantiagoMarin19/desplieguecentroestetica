

import React, { useState } from "react";
import "../InicioSesion/InicioSesion.css"; // Asegúrate de importar correctamente el archivo de estilos CSS

export const InicioSesion = ({ showIn, handleCloseIn }) => {


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
                          className={`d-flex flex-row justify-content-center align-items-center ${emailFocused ? "focused" : ""
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
                            className={`d-flex flex-row justify-content-center align-items-center ${passwordFocused ? "focused" : ""
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


                        ¿Olvidaste tu contraseña?{" "}
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
}

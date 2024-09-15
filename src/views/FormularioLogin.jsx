import React, { useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TokenContext } from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";

const FormularioLogin = () => {
  const {
    mail,
    setMail,
    contrasena,
    setContrasena,
    envio,
    setEnvio,
    error,
    setError,
    user,
    setUser,
  } = useContext(TokenContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const validarInput = (e) => {
    setError("");

    if (mail === "" || contrasena === "") {
      setError("Hay campos vacíos en el formulario");
      return false;
    }
    if (contrasena.length <= 6) {
      setError("La contraseña debe tener mínimo 6 caracteres");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarInput()) {
      if (mail === "juanito@gmail.com" && contrasena === "12345678") {
        setUser(true);
        setEnvio(true);
        Toast.fire({
          icon: "success",
          title: "Login exitoso",
          color: "white",
          background: "#212529",
        });
        navigate("/Pizzeria_Mammamia/");
      } else {
        setUser(false);
        setError("Credenciales incorrectas");
      }
      setMail("");
      setContrasena("");
    }
  };
  return (
    <div className="login">
      <Container className="loginBox">
        <Form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <h4 style={{ color: "white", textShadow: "0 0 10px #03bcf4" }}>
            Ingresa a MAMMAMÍA 🙌🏼!
          </h4>
          <div className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </Form.Group>
          </div>
          {error && (
            <p className="msjError" aria-live="polite">
              {error}
            </p>
          )}

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormularioLogin;

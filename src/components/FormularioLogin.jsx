import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormularioLogin = () => {
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [envio, setEnvio] = useState(false);
  const [error, setError] = useState("");

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
    e.preventDefault();
    setError("");

    if (mail === "" || contrasena === "") {
      setError("Hay campos vacíos en el formulario");
      return;
    }
    if (contrasena.length <= 6) {
      setError("La contraseña debe tener mínimo 6 caracteres");
      return;
    }

    setEnvio(true);
    setMail("");
    setContrasena("");
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <Form
          className="d-flex flex-column align-items-center"
          onSubmit={validarInput}
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
          {envio
            ? Toast.fire({
                icon: "success",
                title: "Login exitoso",
                color: "white",
                background: "#212529",
              })
            : null}

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormularioLogin;

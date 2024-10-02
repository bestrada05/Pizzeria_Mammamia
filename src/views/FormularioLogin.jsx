import React, { useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useEffect } from "react";

import { TokenContext } from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";

const FormularioLogin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    handleSubmit,
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

  const envioFormularioLogin = (e) => {
    e.preventDefault();
    handleSubmit(e);
    navigate("/Pizzeria_Mammamia/");
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <Form
          className="d-flex flex-column align-items-center"
          onSubmit={envioFormularioLogin}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormularioLogin;

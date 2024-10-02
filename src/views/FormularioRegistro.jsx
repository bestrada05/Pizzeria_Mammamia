import React, { useContext } from "react";
import {
  Container,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { TokenContext } from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";

const FormularioRegistro = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    validacion,
    setValidacion,
    validarInput,
  } = useContext(TokenContext);

  const navigate = useNavigate();

  const envioFormularioRegistro = (e) => {
    e.preventDefault();
    validarInput(e);
    navigate("/Pizzeria_Mammamia/");
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <Form
          onSubmit={envioFormularioRegistro}
          className="d-flex flex-column align-items-center"
        >
          <h4 style={{ color: "white", textShadow: "0 0 10px #03bcf4" }}>
            Registro MAMMAMÍA 👏🏼!
          </h4>

          <div className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-mail">
                    {" "}
                    No compartiremos tu información con nadie 🤫!
                  </Tooltip>
                }
              >
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-clave">
                    {" "}
                    Ingresa mínimo 6 caracteres
                  </Tooltip>
                }
              >
                <Form.Control
                  type="password"
                  placeholder="Ingresa una contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </OverlayTrigger>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repite tu contraseña"
                value={validacion}
                onChange={(e) => setValidacion(e.target.value)}
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormularioRegistro;

import React from "react";
import {
  Container,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormularioRegistro = () => {
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [validacion, setValidacion] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [envio, setEnvio] = useState(false);

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

    if (mail === "" || contrasena === "" || validacion === "") {
      Swal.fire({
        title: "Error",
        text: "No pueden haber campos vacíos en el formulario",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }
    if (contrasena.length <= 6) {
      Swal.fire({
        title: "Error",
        text: "La contraserña debe tener mínimo 6 caracteres",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      }).then(() => {
        window.location.reload();
      });
      return;
    }
    if (contrasena !== validacion) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas deben coincidir",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }
    if (!checkboxChecked) {
      Swal.fire({
        title: "Error",
        text: "Debes aceptar el registro en MammaMía",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }

    setEnvio(true);
    setMail("");
    setContrasena("");
    setValidacion("");
    setCheckboxChecked(false);
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <Form
          onSubmit={validarInput}
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
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
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
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
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
          <div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                style={{ color: "white", textShadow: "0 0 10px #03bcf4" }}
                type="checkbox"
                name="checkbox"
                label="Acepto el registro en MammaMía"
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
            </Form.Group>
          </div>

          {envio
            ? Toast.fire({
                icon: "success",
                title: "Login exitoso",
                color: "white",
                background: "#212529",
              })
            : null}

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormularioRegistro;

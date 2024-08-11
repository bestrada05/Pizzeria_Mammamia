import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  const estilo = {
    color: "#212529",
    textShadow: "0 0 10px #e1e6f0",
  };
  return (
    <Container fluid className="p-3 mb-2 text-center sticky-bottom">
      <h5 style={estilo}>
        {" "}
        © 2021-Pizzería MammaMia!-Todos los derechos reservados
      </h5>
    </Container>
  );
}

export default Footer;

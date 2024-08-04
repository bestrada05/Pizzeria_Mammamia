import React from "react";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Container fluid className="headerContainer">
      <div
        style={{ minHeight: "400px" }}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <h1 className="titulo">Pizzería MammaMía</h1>
      </div>
    </Container>
  );
};

export default Header;

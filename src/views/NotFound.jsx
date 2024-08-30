import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container fluid className="headerContainer">
      <div
        style={{ minHeight: "400px" }}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <h1 className="titulo">La Página no existe</h1>

        <Link
          to="/Pizzeria_Mammamia/"
          className="btn btn-outline-secondary m-5 "
        >
          Vuelve a nuestras Pizzas!
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;

import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <Container fluid className="headerContainer">
      <div
        style={{ minHeight: "400px" }}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <h1 className="titulo">Vuelve Pronto</h1>

        <Link
          to="/Pizzeria_Mammamia/"
          className="btn btn-outline-secondary m-5 "
        >
          🍕 Home
        </Link>
      </div>
    </Container>
  );
};

export default Logout;

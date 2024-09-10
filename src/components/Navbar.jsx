import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const token = false;

  return (
    <Navbar
      className="barranav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand style={{ color: "#fff", textShadow: "0 0 10px #03bcf4" }}>
          MAMMAMÍA!{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/Pizzeria_Mammamia/"
              className="btn btn-outline-secondary ms-3 "
            >
              🍕 HOME
            </Link>

            {token ? (
              <Link to="/Logout" className="btn btn-outline-secondary ms-3 ">
                🔒 Logout
              </Link>
            ) : (
              <Link
                to="/Pizzeria_Mammamia/Login"
                className="btn btn-outline-secondary ms-3 "
              >
                🔐 Login
              </Link>
            )}
            {token ? (
              <Link
                to="/Pizzeria_Mammamia/Profile"
                className="btn btn-outline-secondary ms-3 "
              >
                🔓 Profile
              </Link>
            ) : (
              <Link
                to="/Pizzeria_Mammamia/Register"
                className="btn btn-outline-secondary ms-3 "
              >
                🔐 Register
              </Link>
            )}
          </Nav>
          <Nav>
            <Link
              to="/Pizzeria_Mammamia/Carrito"
              className=" btn btn-outline-secondary text-white linkNav"
            >
              🛒 Total: $ {total.toLocaleString()}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;

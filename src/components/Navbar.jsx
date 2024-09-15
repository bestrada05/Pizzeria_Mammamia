import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const NavbarApp = () => {
  const { cart } = useContext(CartContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

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
            <NavLink
              to="/Pizzeria_Mammamia/"
              className={`navLink  ${setActiveClass}`}
              end
            >
              🍕 Home
            </NavLink>

            {token ? (
              <NavLink to="/Logout" className={`navLink  ${setActiveClass}`}>
                🔒 Logout
              </NavLink>
            ) : (
              <NavLink
                to="/Pizzeria_Mammamia/Login"
                className={`navLink  ${setActiveClass}`}
              >
                🔐 Login
              </NavLink>
            )}
            {token ? (
              <NavLink
                to="/Pizzeria_Mammamia/Profile"
                className={`navLink  ${setActiveClass}`}
              >
                🔓 Profile
              </NavLink>
            ) : (
              <NavLink
                to="/Pizzeria_Mammamia/Register"
                className={`navLink  ${setActiveClass}`}
              >
                🔐 Register
              </NavLink>
            )}
          </Nav>
          <Nav>
            <NavLink
              to="/Pizzeria_Mammamia/Carrito"
              className={`navLink  ${setActiveClass}`}
            >
              🛒 Total: $ {total.toLocaleString()}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;

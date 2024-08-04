import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarApp = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{ color: "#fff", textShadow: "0 0 10px #03bcf4" }}>
          MAMMAMÍA!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="btn btn-outline-secondary ms-3 " href="#">
              🍕 HOME
            </Nav.Link>
            {token ? (
              <Nav.Link className="btn btn-outline-secondary ms-3 " href="#">
                🔒 Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="btn btn-outline-secondary ms-3 " href="#">
                🔐 Login
              </Nav.Link>
            )}
            {token ? (
              <Nav.Link className="btn btn-outline-secondary ms-3 " href="#">
                🔓 Profile
              </Nav.Link>
            ) : (
              <Nav.Link className="btn btn-outline-secondary ms-3 " href="#">
                🔐 Register
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link
              className=" btn btn-outline-secondary text-white linkNav"
              href="#"
            >
              🛒 Total: $ {total.toLocaleString()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;

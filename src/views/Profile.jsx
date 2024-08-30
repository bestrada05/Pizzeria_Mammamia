import React from "react";
import { Container, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="login">
      <Container className="loginBox">
        <div>
          <h5>Usuario:</h5>
          <p>juanito@gmail.com</p>
        </div>
        <Button className="m-4"> Cerrar Sesión </Button>
      </Container>
    </div>
  );
};

export default Profile;

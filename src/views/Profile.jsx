import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { TokenContext } from "../Context/TokenContext";

const Profile = () => {
  const { setUser } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false);
    navigate("/Pizzeria_Mammamia/");
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <div>
          <h5>Usuario:</h5>
          <p>juanito@gmail.com</p>
        </div>
        <Button className="m-4" onClick={handleLogout}>
          {" "}
          Cerrar Sesión{" "}
        </Button>
      </Container>
    </div>
  );
};

export default Profile;

import React, { useContext, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { TokenContext } from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Profile = () => {
  const { user, setUser } = useContext(TokenContext);
  const { setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    navigate("/Pizzeria_Mammamia/");
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <div>
          {user ? (
            <p>Email: {user.email}</p>
          ) : (
            <p>Ingresa a tu cuenta para ver tu Perfil</p>
          )}
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

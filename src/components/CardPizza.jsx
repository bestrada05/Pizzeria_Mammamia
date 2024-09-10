import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CardPizza = ({ name, price, ingredients, img, pizza }) => {
  const { addToCart, handleShow } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = (pizza) => {
    addToCart(pizza);
    handleShow(true);
    navigate("/Pizzeria_Mammamia/Carrito");
  };

  return (
    <>
      <Card className="m-4" style={{ minHeight: "550px" }}>
        <Card.Img variant="top" src={img} alt={`Imagen de Pizza ${name}`} />
        <Card.Body>
          <Card.Title className="text-body-secondary nombrePizza">
            <h4>{name}</h4>
          </Card.Title>
          <hr />
          <Card.Text className="text-center text-body-secondary">
            <strong>
              <FontAwesomeIcon
                icon={faPizzaSlice}
                style={{ color: "#74C0FC" }}
              />
              {"  "} Ingredientes:
            </strong>
            {ingredients}
          </Card.Text>
          <hr />
          <Card.Text className="text-center text-body-secondary">
            <strong>Precio: </strong> ${price}
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button variant="outline-secondary btn">Ver más</Button>
            <Button
              variant="outline-secondary"
              onClick={() => handleClick(pizza)}
            >
              Añadir
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardPizza;

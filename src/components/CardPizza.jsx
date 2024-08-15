import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const CardPizza = ({ name, price, ingredients, img }) => {
  const precio = price.toLocaleString();

  return (
    <Card className="m-4 " style={{ minHeight: "550px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-body-secondary nombrePizza">
          <h4>{name}</h4>
        </Card.Title>
        <hr />
        <Card.Text className="text-center text-body-secondary">
          <strong>
            {" "}
            <FontAwesomeIcon icon={faPizzaSlice} style={{ color: "#74C0FC" }} />
            {"  "}
            Ingredientes:
          </strong>
          {ingredients}
        </Card.Text>
        <hr />
        <Card.Text className="text-center text-body-secondary">
          <strong>Precio: </strong> ${precio}
        </Card.Text>

        <div className="d-flex justify-content-around">
          <Button variant="outline-secondary btn">Ver más</Button>
          <Button variant="outline-secondary">Añadir</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

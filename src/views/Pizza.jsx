import React, { useState, useEffect, useContext } from "react";
import { Spinner, Alert, Button, Card } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../Context/PizzaContext";
import { CartContext } from "../Context/CartContext";

const Pizza = () => {
  const { pizza, setPizza, loading, setLoading, error, setError } =
    useContext(PizzaContext);
  const { addToCart, handleShow } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function pizzaApi() {
      const url = `http://localhost:4000/api/pizzas/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) pizzaApi();
  }, [id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  const handleClick = (pizza) => {
    addToCart(pizza);
    handleShow(true);
    navigate("/Pizzeria_Mammamia/Carrito");
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        <Card.Body>
          <Card.Title>
            {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
          </Card.Title>
          <Card.Text className="d-flex flex-column text-center">
            {pizza.desc}
            <strong>Ingredientes 🍕 :</strong> {pizza.ingredients.join(", ")}{" "}
            <br />
            <strong>Precio 💰 :</strong> ${pizza.price.toLocaleString()}{" "}
          </Card.Text>
        </Card.Body>
        <Button onClick={() => handleClick(pizza)}>Añadir</Button>
      </Card>
    </>
  );
};

export default Pizza;

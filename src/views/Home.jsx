import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../Context/CartContext";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const { pizzas } = useContext(CartContext);

  return (
    <div className="home">
      <Header></Header>
      <Container className=" d-flex ">
        <Row className="g-4">
          {pizzas.map((pizza) => {
            return (
              <Col sm={12} md={6} lg={4} key={pizza.id}>
                <CardPizza
                  pizza={pizza}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={
                    <ul>
                      {pizza.ingredients.map((ingrediente) => (
                        <li key={ingrediente}>{ingrediente}</li>
                      ))}
                    </ul>
                  }
                  img={pizza.img}
                ></CardPizza>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

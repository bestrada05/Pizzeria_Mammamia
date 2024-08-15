import React, { useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col } from "react-bootstrap";
import { data } from "./pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState(data);

  return (
    <div className="home">
      <Header></Header>
      <Container className=" d-flex ">
        <Row className="g-4">
          {pizzas.map((pizza) => {
            return (
              <Col sm={12} md={6} lg={4} key={pizza.name}>
                <CardPizza
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

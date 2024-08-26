import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pizzasApi();
  }, []);

  const pizzasApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Failed to fetch pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div className="home">
      <Header></Header>
      <Container className=" d-flex ">
        <Row className="g-4">
          {pizzas.map((pizza) => {
            return (
              <Col sm={12} md={6} lg={4} key={pizza.id}>
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

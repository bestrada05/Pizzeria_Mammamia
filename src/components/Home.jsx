import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Container className="m-4 d-flex ">
        <Row className="g-4">
          <Col sm={12} md={6} lg={4}>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            ></CardPizza>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardPizza>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></CardPizza>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

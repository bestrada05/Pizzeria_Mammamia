import React, { useState } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import { data } from "../components/pizzas";

const Cart2 = () => {
  const [pizzas, setPizzas] = useState(data);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
  };

  const increaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleClick = (pizza) => {
    addToCart(pizza);
    handleShow();
  };

  return (
    <div className="cart pb-2">
      <br />
      <Container className=" cartBox d-flex flex-column justify-content-center align-items-center">
        <h3
          style={{
            color: "#fff",
            textShadow: "0 0 10px #03bcf4",
            paddingBottom: "1rem",
          }}
        >
          Pizzas En Stock
        </h3>
        {pizzas.map((pizza) => (
          <Row
            key={pizza.id}
            className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center"
          >
            <Col xs={12} md={12} lg={3}>
              <img
                src={pizza.img}
                alt={`Imagen de Pizza ${pizza.name}`}
                className="pizza-image"
              />
              <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h6>
                  {pizza.name} {""} ${pizza.price.toLocaleString()}
                </h6>
              </div>
            </Col>

            <Col
              xs={12}
              md={12}
              lg={4}
              className="d-flex justify-content-center align-items-center"
            >
              <button className="btn" onClick={() => handleClick(pizza)}>
                Agregar 🛒
              </button>
            </Col>
          </Row>
        ))}
      </Container>

      <Offcanvas
        className="bg-dark text-white d-flex flex-column justify-content-center "
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              color: "#fff",
              textShadow: "0 0 10px #03bcf4",
              paddingBottom: "1rem",
            }}
          >
            Carrito 🛒
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container className="d-flex flex-column justify-content-center align-items-center">
            {cart.map((pizza) => (
              <Row
                key={pizza.id}
                className="mb-3 border p-3 rounded d-flex justify-content-between align-items-center"
              >
                <Col>
                  <img
                    src={pizza.img}
                    alt={`Imagen de Pizza ${pizza.name}`}
                    className="pizza-image"
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h6>
                      {pizza.name} {""} ${pizza.price.toLocaleString()}
                    </h6>
                  </div>
                </Col>

                <Col className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <button
                      className="btnCarrito"
                      onClick={() => increaseQuantity(pizza.id)}
                    >
                      ➕
                    </button>
                    <button
                      className="btnCarrito"
                      onClick={() => decreaseQuantity(pizza.id)}
                    >
                      ➖
                    </button>
                  </div>
                  <button
                    className="btnCarrito"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    Quitar
                  </button>
                </Col>
              </Row>
            ))}
          </Container>
        </Offcanvas.Body>
        <h4
          className="text-end m-2"
          style={{
            color: "#fff",
            textShadow: "0 0 10px #03bcf4",
            paddingBottom: "1rem",
          }}
        >
          🍕 Total : ${calculateTotal().toLocaleString()}
        </h4>
      </Offcanvas>
    </div>
  );
};

export default Cart2;

import React, { useContext } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const {
    pizzas,
    setPizzas,
    cart,
    setCart,
    show,
    handleClose,
    handleShow,
    handleClick,
  } = useContext(CartContext);

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
      prevCart
        .map((item) => {
          if (item.id === pizzaId) {
            if (item.quantity === 1) {
              removeFromCart(pizzaId);
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  console.log(pizzas);
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
        className="bg-dark text-white d-flex flex-column justify-content-center"
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
            {cart.length > 0 ? (
              cart.map((pizza) => (
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
                        {pizza.name} ${pizza.price.toLocaleString()}
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
                      <span className="mx-2">
                        {pizza.quantity} {/* Mostrar cantidad */}
                      </span>
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
              ))
            ) : (
              <h6>El carrito está vacío.</h6>
            )}
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

export default Cart;

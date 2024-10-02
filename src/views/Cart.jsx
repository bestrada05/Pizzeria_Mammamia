import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { TokenContext } from "../Context/TokenContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { pizzas, cart, setCart, show, handleClose, handleShow, handleClick } =
    useContext(CartContext);

  const { user } = useContext(TokenContext);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

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

  async function handleCart(e) {
    e.preventDefault();

    console.log("Usuario autenticado:", user);
    console.log("Token enviado:", user?.token);

    const response = await fetch("http://localhost:4000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        cart,
        user,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("cart", JSON.stringify(data.cart));
      setCart([]);
      Toast.fire({
        icon: "success",
        title: data.message,
        color: "white",
        background: "#212529",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: data.error,
        color: "white",
        background: "#212529",
      });
    }
  }

  return (
    <div className="cart pb-2">
      <Button onClick={handleShow}>
        Mostrar Carrito <br /> 🛒
      </Button>
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
                      <span className="mx-2">{pizza.quantity}</span>
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
        <Button
          variant="outline-secondary"
          className={user ? "" : "disabled"}
          onClick={handleCart}
        >
          {" "}
          💳 Pagar{" "}
        </Button>
      </Offcanvas>
    </div>
  );
};

export default Cart;

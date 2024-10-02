import { createContext, useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    pizzasApi();
  }, []);

  const pizzasApi = async () => {
    try {
      const url = "http://localhost:4000/api/pizzas";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      setError("Failed to fetch pizzas: " + error.message);
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

  const handleClick = (pizza) => {
    addToCart(pizza);
    handleShow();
  };
  return (
    <CartContext.Provider
      value={{
        pizzas,
        setPizzas,
        cart,
        setCart,
        show,
        setShow,
        loading,
        setLoading,
        error,
        setError,
        addToCart,
        handleClose,
        handleShow,
        handleClick,
        pizzasApi,
        message,
        setMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

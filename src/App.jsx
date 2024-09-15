import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import FormularioRegistro from "./views/FormularioRegistro";
import FormularioLogin from "./views/FormularioLogin";
import Profile from "./views/Profile";
import Pizza from "./views/Pizza";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";
import CartProvider from "./Context/CartContext";
import PizzaProvider from "./Context/PizzaContext";

function App() {
  return (
    <>
      <CartProvider>
        <PizzaProvider>
          <NavbarApp />

          <Routes>
            <Route path="/Pizzeria_Mammamia/" element={<Home />} />
            <Route
              path="/Pizzeria_Mammamia/Register"
              element={<FormularioRegistro />}
            />
            <Route
              path="/Pizzeria_Mammamia/Login"
              element={<FormularioLogin />}
            />
            <Route path="/Pizzeria_Mammamia/Profile" element={<Profile />} />

            <Route path="/Pizzeria_Mammamia/Carrito" element={<Cart />} />
            <Route path="/Pizzeria_Mammamia/pizza/:id" element={<Pizza />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </PizzaProvider>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Cart from "./components/Cart";
import FormularioRegistro from "./components/FormularioRegistro";
import "./App.css";
import FormularioLogin from "./components/FormularioLogin";

function App() {
  return (
    <>
      <NavbarApp />
      {/*<FormularioRegistro />*/}
      {/*  <FormularioLogin />*/}
      {/* <Home /> */}

      <Cart />
      <Footer />
    </>
  );
}

export default App;

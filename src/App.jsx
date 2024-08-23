import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import FormularioRegistro from "./components/FormularioRegistro";
import FormularioLogin from "./components/FormularioLogin";
import Pizza from "./components/Pizza";
import "./App.css";

function App() {
  return (
    <>
      <NavbarApp />
      {/*<FormularioRegistro />*/}
      {/*  <FormularioLogin />*/}
      {/* <Home />*/}
      {/*<Cart />*/}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;

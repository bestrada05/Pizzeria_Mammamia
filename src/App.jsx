import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import FormularioRegistro from "./components/FormularioRegistro";
import "./App.css";
import FormularioLogin from "./components/FormularioLogin";
import Copia from "./components/FormularioRegistro";

function App() {
  return (
    <>
      <NavbarApp />
      <FormularioRegistro />
      {/*  <FormularioLogin />*/}
      {/*<Home />*/}
      <Footer />
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Cart2 from "./components/Cart2";
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

      <Cart2 />
      <Footer />
    </>
  );
}

export default App;

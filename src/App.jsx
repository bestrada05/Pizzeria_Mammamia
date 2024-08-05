import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavbarApp></NavbarApp>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarTop } from "./components/navbar/NavbarTop";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { HomePage } from "./components/home-page/HomePage";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import { AllProdotti } from "./components/tuttiProdotti/AllProdotti";
import { Carrello } from "./components/carrello/Carrello";
import { SingleMerce } from "./components/singleCardMerce/SingleMerce";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutti-i-prodotti" element={<AllProdotti />} />
          <Route path="/prodotti-cercati/:id" element={<SingleMerce />} />
          <Route path="/carrello" element={<Carrello />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

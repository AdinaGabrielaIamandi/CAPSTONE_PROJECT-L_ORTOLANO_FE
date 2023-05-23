import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarTop } from "./components/navbar/NavbarTop";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import { HomePage } from "./components/home-page/HomePage";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavbarTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

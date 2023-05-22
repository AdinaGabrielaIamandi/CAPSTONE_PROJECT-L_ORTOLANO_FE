import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarTop } from "./components/navbar/NavbarTop";
import { Footer } from "./components/footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <NavbarTop />
        <Routes>
          <Route />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

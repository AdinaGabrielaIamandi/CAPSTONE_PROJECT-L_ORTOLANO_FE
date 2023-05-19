import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarTop } from "./components/navbar/NavbarTop";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

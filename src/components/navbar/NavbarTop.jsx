import "./navbarTop.scss";
import { Dropdown, Form, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { ImCart } from "react-icons/im";
import Logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

export const NavbarTop = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="d-flex align-items-center justify-content-evenly p-0 mb-4 myNavbar flex-nowrap"
    >
      <Image src={Logo} style={{ cursor: "pointer" }} className="logoNav d-flex" alt="l'ortolano logo" />
      <Form className="ms-1 search d-flex custom-control-input">
        <input
          style={{ width: windowWidth > 600 ? "400px" : "100%" }}
          type="search"
          placeholder="Cerca"
          className="me-lg-5"
          aria-label="Search"
          id="cercaSearch"
          name="cercaSearch"
        />
      </Form>
      <div className="d-flex align-items-center justify-content-center coloreNavbar">
        <Dropdown className="me-4">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="bottoneMenu">
            <FiMenu />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="dorpColor">Home</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Tutti i prodotti</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ImCart className="iconaNavbar me-2" />
        <p className="mb-0 fw-bold">Carrello</p>
      </div>
    </Navbar>
  );
};

import "./navbarTop.scss";
import { Dropdown, Form, Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { ImCart } from "react-icons/im";
import Logo from "../../images/logo.png";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMerceAction } from "../../redux/action";
import { ModalSearch } from "./ModalSearch";

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

  const merci = useSelector((state) => state.lortolano.merci);
  const dispatch = useDispatch();
  const [merceCercata, setMerceCercata] = useState();

  const getIDByName = (input) => {
    setMerceCercata(
      merci
        .filter((prodotto) => input.toString().toUpperCase() === prodotto.tipoMerce.toString().toUpperCase())
        .map((elemento) => elemento)
    );
    setShowModal(true);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    dispatch(getAllMerceAction());
    await getIDByName(e.target.cercaSearch.value);
  };

  const [showModal, setShowModal] = useState(false);
  const setShowFunction = (el) => {
    setShowModal(el);
  };

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="d-flex align-items-center justify-content-evenly p-0 myNavbar flex-nowrap"
      >
        <Link to="/">
          <Image src={Logo} style={{ cursor: "pointer" }} className="logoNav d-flex" alt="l'ortolano logo" />
        </Link>
        <Form className="ms-1 search d-flex custom-control-input" onSubmit={handelSubmit}>
          <input
            style={{ width: windowWidth > 600 ? "400px" : "100%" }}
            type="search"
            placeholder="Cerca prodotto"
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
            <Dropdown.Menu className="text-decoration-none">
              <Link to="/" className="dorpColor">
                <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              </Link>
              <Link to="/login">
                <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
              </Link>
              <Link to="/tutti-i-prodotti">
                <Dropdown.Item href="#/action-3">Tutti i prodotti</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <ImCart className="iconaNavbar me-2" />
          <Link to="/carrello" className="text-decoration-none text-black">
            <p className="mb-0 fw-bold">Carrello</p>
          </Link>
        </div>
      </Navbar>
      <ModalSearch setShowFunction={setShowFunction} showModal={showModal} merci={merceCercata} />
    </>
  );
};

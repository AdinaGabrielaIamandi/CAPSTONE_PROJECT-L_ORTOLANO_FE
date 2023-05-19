import "./navbarTop.scss";
import { Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.png";

export const NavbarTop = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="d-flex justify-content-center p-0 mb-4 flex-sm-nowrap">
        <Image src={Logo} style={{ cursor: "pointer" }} className="logoNav d-none d-md-flex" alt="l'ortolano logo" />
      </Navbar>
    </>
  );
};

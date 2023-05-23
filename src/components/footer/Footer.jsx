import "./footer.scss";
import { Row, Col, Container } from "react-bootstrap";
import { FaPaypal, FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container className="d-flex justify-content-evenly align-items-center mb-4">
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <Row>
            <p className="fw-bold coloreFooter">PRODOTTI</p>
            <p className="sottolineatoFooter">Offerte</p>
            <p className="sottolineatoFooter">Catalogo</p>
            <p className="sottolineatoFooter">Wishlist</p>
            <p className="sottolineatoFooter">Personalizza la tua cassetta</p>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <Row>
            <p className="fw-bold coloreFooter">LA NOSTRA AZIENDA</p>
            <p className="sottolineatoFooter">Privacy</p>
            <p className="sottolineatoFooter">Termini e condizioni d'uso</p>
            <p className="sottolineatoFooter">Cookie Policy</p>
            <p className="sottolineatoFooter">Recensioni</p>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <Row>
            <p className="fw-bold coloreFooter">IL TUO ACCOUNT</p>
            <p className="sottolineatoFooter">Informazioni personali</p>
            <p className="sottolineatoFooter">Ordini</p>
            <p className="sottolineatoFooter">Note di credito</p>
            <p className="sottolineatoFooter">Indirizzi</p>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Row className="mb-3">
            <p className="fw-bold coloreFooter">Pagamenti con:</p>
            <div className="d-flex align-items-center">
              <FaPaypal className="me-1 text-primary fs-2" />{" "}
              <span className="fst-italic sottolineatoFooter">PayPal</span>
            </div>
          </Row>
          <Row>
            <p className="fw-bold coloreFooter">Seguici su:</p>
            <div className="d-flex justify-content-start">
              <div className="d-flex flex-column align-items-center me-4">
                <AiFillFacebook className="me-1 text-primary fs-2" />{" "}
                <p className="fst-italic sottolineatoFooter">Facebook</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <FaInstagram className="me-1 fs-2" />
                <p className="fst-italic sottolineatoFooter">Instagram</p>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

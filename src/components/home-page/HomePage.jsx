import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import "./homePage.scss";
import Orto from "../../images/orto.jpg";
import CassetteMiste from "../../images/le-cassette-miste.jpg";
import OfferteDiStagione from "../../images/offerte-di-stagione.jpg";
import FruttaEVerdura from "../../images/frutta-e-verdura.jpg";

export const HomePage = () => {
  return (
    <Container className="pe-0 mb-5">
      <Row className="d-flex align-items-center justify-content-between mb-5 colorePrimaCard ">
        <Col xs={12} lg={8} className="d-flex justify-content-center">
          <p className="primaCard text-center p-2">
            Acquista la tua frutta e verdura online direttamente dai migliori produttori locali. Prodotti km 0 per uno
            stile di vita sano ed ecologico!
          </p>
        </Col>
        <Col xs={12} lg={4} className="d-flex justify-content-center">
          <Image src={Orto} style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row className="row justify-content-center pb-5 border-bottom border-3 bordoCarosello mb-5">
        <p className="primaCard text-center p-2">In offerta</p>
        <Col xs={12} lg={7}>
          <Carousel className="carosello">
            <Carousel.Item>
              <img className="d-block w-100" src={Orto} alt="First slide" style={{ height: "400px" }} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Orto} alt="Second slide" style={{ height: "400px" }} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Orto} alt="Third slide" style={{ height: "400px" }} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Orto} alt="First slide" style={{ height: "400px" }} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="border-bottom border-3 bordoCarosello mb-5 pb-5">
        <Col xs={12} lg={4} className="d-flex justify-content-center align-items-center mb-3">
          <div className="contenitoreImmagine">
            <Image src={CassetteMiste} style={{ width: "100%" }} />
            <div className="contenitoreTesto">
              <p className="testoImmagine m-0">CASSETTE MISTE</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={8} className="d-flex flex-column justify-content-center mb-3 contenitoreXDue">
          <Row className="mb-3">
            <Col xs={12}>
              <div className="contenitoreImmagine">
                <Image src={OfferteDiStagione} style={{ width: "100%" }} />
                <div className="contenitoreTesto">
                  <p className="testoImmagine m-0">OFFERTE DI STAGIONE</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="contenitoreImmagine">
                <Image src={FruttaEVerdura} style={{ width: "100%" }} />
                <div className="contenitoreTesto">
                  <p className="testoImmagine m-0">FRUTTA E VERDURA</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

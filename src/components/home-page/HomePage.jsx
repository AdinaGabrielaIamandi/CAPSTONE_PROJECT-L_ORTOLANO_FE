/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Image, Row } from "react-bootstrap";
import "./homePage.scss";
import Orto from "../../images/orto.jpg";
import CassetteMiste from "../../images/le-cassette-miste.jpg";
import OfferteDiStagione from "../../images/offerte-di-stagione.jpg";
import FruttaEVerdura from "../../images/frutta-e-verdura.jpg";
import { SingleMerce } from "../singleCardMerce/SingleMerce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMerceAction } from "../../redux/action";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const merci = useSelector((state) => state.lortolano.merci);
  useEffect(() => {
    dispatch(getAllMerceAction());
  }, []);

  const merciInOfferta = [...merci];
  const merciRandom = [];
  while (merciRandom.length < 4 && merciInOfferta.length > 0) {
    const randomIndex = Math.floor(Math.random() * merciInOfferta.length);
    const merceRandom = merciInOfferta[randomIndex];
    merciRandom.push(merceRandom);
    merciInOfferta.splice(randomIndex, 1);
  }

  const prodottiPiùVenduti = merci.slice(0, 8);

  return (
    <Container className="mt-5 mb-5 d-flex flex-column justify-content-center">
      <Row className="d-flex align-items-center justify-content-center mb-5 colorePrimaCard">
        <Col xs={12} lg={8} className="d-flex justify-content-center">
          <p className="primaCard text-center pt-2 pb-2 pe-0">
            Acquista la tua frutta e verdura online direttamente dai migliori produttori locali. Prodotti km 0 per uno
            stile di vita sano ed ecologico!
          </p>
        </Col>
        <Col xs={12} lg={4} className="d-flex justify-content-center p-0">
          <Image src={Orto} style={{ width: "100%" }} />
        </Col>
      </Row>
      <Row className="row justify-content-center pb-5 border-bottom border-3 bordoCarosello mb-5">
        <p className="primaCard text-center mb-4">In offerta</p>
        <Row>
          {merciRandom.map((merce) => (
            <SingleMerce key={merce.id} merci={merce} />
          ))}
        </Row>
      </Row>
      <Row className="border-bottom border-3 bordoCarosello my-5 pb-5">
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
      <Row className="d-flex justify-content-center">
        <p className="primaCard text-center">Prodotti più venduti</p>
        <Row className="mt-3 d-flex justify-content-center">
          {prodottiPiùVenduti.map((prodotto) => (
            <SingleMerce merci={prodotto} key={prodotto.id} />
          ))}
        </Row>
        <Row className="text-center m-2">
          <Link to="/tutti-i-prodotti" className="fw-bold primaCard">
            <p>Vedi tutti i prodotti!</p>
          </Link>
        </Row>
      </Row>
    </Container>
  );
};

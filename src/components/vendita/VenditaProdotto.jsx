import { Button, Col, Container, Row } from "react-bootstrap";
import "./vendita.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postProdottoAction } from "./../../redux/action/index";

export const VenditaProdotto = () => {
  const dispatch = useDispatch();
  const [prodotto, setProdotto] = useState();

  return (
    <Container className="mt-3 mb-3 p-5 sfondoVendita">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <h3 className="text-center mb-5">Inserisci i dati del prodotto</h3>
          <div className="d-flex flex-column justify-content-center">
            <div class="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Tipo di prodotto*"
                onChange={(e) => {
                  setProdotto((prev) => ({ ...prev, tipoMerce: e.target.value }));
                }}
              />
              <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                Tipo di prodotto*
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Quantità in kg*"
                onChange={(e) => {
                  setProdotto((prev) => ({ ...prev, quantità: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Quantità in kg*
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Prezzo*"
                onChange={(e) => {
                  setProdotto((prev) => ({ ...prev, prezzoAlKg: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Prezzo*
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-center">
          <Button
            variant="success"
            className="bottoneLogin mb-5"
            onClick={() => dispatch(postProdottoAction(prodotto))}
          >
            Vendi prodotto
          </Button>
        </div>
      </Row>
      <small className="text-secondary fst-italic">* Campi obbligatori</small>
    </Container>
  );
};

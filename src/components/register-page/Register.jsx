import { Button, Col, Container, Row } from "react-bootstrap";
import "./register.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRegisterAction } from "../../redux/action";
import { postUtenteAction } from "./../../redux/action/index";

export const Register = () => {
  const [registrazione, setRegistrazione] = useState();
  const [utente, setUtente] = useState();
  const dispatch = useDispatch();

  return (
    <Container className="backGroundFotoRegister mt-4 pb-4">
      <Row className="d-flex flex-column align-items-center p-3">
        <Col xs={12} md={6}>
          <h3 className="text-center mb-5">I tuoi dati</h3>
          <div className="d-flex flex-column justify-content-center">
            <div class="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Nome*"
                onChange={(e) => {
                  setRegistrazione((prev) => ({ ...prev, name: e.target.value }));
                  setUtente((prev) => ({ ...prev, nome: e.target.value }));
                }}
              />
              <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                Nome*
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Cognome"
                onChange={(e) => {
                  setUtente((prev) => ({ ...prev, cognome: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Cognome*
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Username"
                onChange={(e) => {
                  setRegistrazione((prev) => ({ ...prev, username: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Username*
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Indirizzo*"
                onChange={(e) => {
                  setUtente((prev) => ({ ...prev, indirizzo: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Indirizzo*
              </label>
            </div>
            <div className="form-floating mb-5">
              <input
                type="email"
                className="form-control login"
                id="floatingInput"
                placeholder="Email*"
                onChange={(e) => {
                  setRegistrazione((prev) => ({ ...prev, email: e.target.value }));
                  setUtente((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Email*
              </label>
            </div>
            <div className="form-floating mb-5">
              <input
                type="password"
                className="form-control login"
                id="floatingInput"
                placeholder="Password*"
                onChange={(e) => {
                  setRegistrazione((prev) => ({ ...prev, password: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Password*
              </label>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column align-items-center justify-content-start">
            <h3>Sei un'azienda?</h3>
            <p>Inserisci qui i seguenti dati</p>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <div class="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Partita IVA"
                onChange={(e) => {
                  setUtente((prev) => ({ ...prev, partitaIVA: e.target.value }));
                }}
              />
              <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                Partita IVA
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Ragione sociale"
                onChange={(e) => {
                  setUtente((prev) => ({ ...prev, ragioneSociale: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Ragione sociale
              </label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control login"
                id="floatingInput"
                placeholder="Pec"
                onChange={(e) => {
                  setUtente((prev) => ({ ...prev, pec: e.target.value }));
                }}
              />
              <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                Pec
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center p-3">
        <Col xs={12} md={6}>
          <div className="d-flex justify-content-center">
            <Button
              className="bottoneLogin btn-success mb-5"
              onClick={() => {
                dispatch(postRegisterAction(registrazione));
                dispatch(postUtenteAction(utente));
              }}
            >
              Registrati
            </Button>
          </div>
        </Col>
      </Row>
      <small className="text-secondary fst-italic">* Campi obbligatori</small>
    </Container>
  );
};

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Container className="backGroundFoto mt-4">
      {" "}
      <Row className="text-center">
        <Col xs={12} lg={5} className="d-flex flex-column justify-content-evenly mb-2 mt-2 p-5">
          <div className="mt-4">
            <p className="fs-1 accedi">Crea il tuo account</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap mb-4">
              <p className="me-1 fs-5 mb-1">Sei già registrato?</p>
              <Link to="/login">
                <button className="bottoneLogin btn-success ms-1 mt-1">Accedi!</button>
              </Link>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="d-flex flex-column align-items-center mb-3 mx-1">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control register" id="floatingInput" placeholder="Name" />
                  <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                    Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control register" id="floatingInput" placeholder="Username" />
                  <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                    Userame
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control register" id="floatingInput" placeholder="Email" />
                  <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                    Email
                  </label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control register"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Password
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mb-5 mx-1">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control register" id="floatingPassword" placeholder="Cognome" />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Cognome
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control register" id="floatingPassword" placeholder="Indirizzo" />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Indirizzo
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control register"
                    id="floatingPassword"
                    placeholder="Partita IVA"
                  />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Partita IVA
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control register"
                    id="floatingPassword"
                    placeholder="Ragione sociale"
                  />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Ragione sociale
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control register" id="floatingPassword" placeholder="Pec" />
                  <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                    Pec
                  </label>
                </div>
              </div>
            </div>
            <button className="bottoneLogin btn-success">Registrati</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

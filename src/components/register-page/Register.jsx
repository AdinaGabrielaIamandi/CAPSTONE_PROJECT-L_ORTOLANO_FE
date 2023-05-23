import { Col, Container, Row } from "react-bootstrap";
import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Container className="backGroundFoto">
      {" "}
      <Row className="text-center">
        <Col xs={5} className="d-flex flex-column justify-content-evenly mb-2 mt-2 p-5">
          <div className="mt-2">
            <p className="fs-1 accedi">Crea il tuo account</p>
            <div className="d-flex justify-content-center align-items-center mb-4">
              <p className="me-5 fs-5 mb-0">Sei già registrato?</p>
              <Link to="/login">
                <button className="bottoneLogin btn-success">Accedi!</button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <div class="form-floating mb-3">
                <input type="email" class="form-control register" id="floatingInput" placeholder="Name" />
                <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                  Name
                </label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control register" id="floatingInput" placeholder="Username" />
                <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                  Userame
                </label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control register" id="floatingInput" placeholder="Email" />
                <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                  Email
                </label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control register" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                  Password
                </label>
              </div>
            </div>
            <button className="bottoneLogin btn-success">Registrati</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

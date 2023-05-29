import { Link } from "react-router-dom";
import "./login.scss";
import { Col, Container, Row } from "react-bootstrap";

export const Login = () => {
  return (
    <Container className="backGroundFoto mt-4">
      <Row className="text-center">
        <Col xs={12} lg={5} className="d-flex flex-column justify-content-evenly mt-4 mb-5 p-5">
          <div className="mt-4">
            <p className="mb-5 fs-1 accedi">Accedi al tuo account</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap mb-5">
              <p className="me-1 fs-5 mb-1">Non hai ancora un account?</p>
              <Link to="/register">
                <button className="bottoneLogin btn-success ms-1 mt-1">Registrati qui!</button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <div class="form-floating mb-4">
                <input type="email" className="form-control login" id="floatingInput" placeholder="Username" />
                <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                  Username
                </label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control login" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                  Password
                </label>
              </div>
            </div>
            <button className="mb-3 bottoneLogin btn-success">Accedi</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

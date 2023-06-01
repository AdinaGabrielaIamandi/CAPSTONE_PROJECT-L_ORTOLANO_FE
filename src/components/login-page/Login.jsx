import { Link } from "react-router-dom";
import "./login.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useContext, useRef } from "react";
import AuthContext from "./AuthContextProvider";

export const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const { login } = useContext(AuthContext);

  const loginSubmit = async () => {
    let payload = {
      username: username.current.value,
      password: password.current.value
    };
    await login(payload);
  };

  return (
    <Container className="backGroundFoto mt-4">
      <Row className="text-center">
        <Col xs={12} lg={5} className="d-flex flex-column justify-content-evenly mt-4 mb-5 p-5">
          <div className="mt-4">
            <p className="mb-5 fs-1 accedi">Accedi al tuo account</p>
            <div className="d-flex justify-content-center align-items-center flex-wrap mb-5">
              <p className="me-1 fs-5 mb-1">Non hai ancora un account?</p>
              <Link to="/register">
                <Button className="bottoneLogin btn-success ms-1 mt-1">Registrati qui!</Button>
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <div class="form-floating mb-4">
                <input
                  type="email"
                  className="form-control login"
                  id="floatingInput"
                  placeholder="Username"
                  ref={username}
                />
                <label for="floatingInput" className="fst-italic d-flex align-items-center justify-content-center">
                  Username
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control login"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={password}
                />
                <label for="floatingPassword" className="fst-italic d-flex align-items-center justify-content-center">
                  Password
                </label>
              </div>
            </div>
            <Button className="mb-3 bottoneLogin btn-success" onClick={loginSubmit}>
              Accedi
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

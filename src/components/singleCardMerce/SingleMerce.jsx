/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Col, Row } from "react-bootstrap";
import "./singleMerce.scss";
import { ProdottoImage } from "../image/ProdottoImage";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarrello, getSingoloProdottoAction } from "../../redux/action";

export const SingleMerce = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const singolaMerce = useSelector((state) => state.lortolano.singolaMerce);
  const allList = useSelector((state) => state.lortolano.listCarrello);

  const isInCarrello1 = allList.includes(singolaMerce);
  const isInCarrello2 = allList.includes(props.merci);

  useEffect(() => {
    dispatch(getSingoloProdottoAction(params?.id));
  }, [params?.id]);

  return (
    <>
      {params?.id !== undefined ? (
        <Row className="d-flex justify-content-center">
          <Col key={singolaMerce?.id} xs={12} md={4} lg={3}>
            <Card className="my-3">
              <ProdottoImage src={singolaMerce?.tipoMerce} id={singolaMerce?.id} altezza={"150px"} />
              <Card.Body>
                <Card.Title>{singolaMerce?.tipoMerce}</Card.Title>
                <Card.Text className="mb-0">
                  {singolaMerce?.utente?.nome} {singolaMerce?.utente?.cognome}
                </Card.Text>
                <Card.Text className="mb-0">Quantità {singolaMerce?.quantità} kg</Card.Text>
                <Card.Text className="mb-0">Prezzo {singolaMerce?.prezzoAlKg} €</Card.Text>
                {isInCarrello1 ? (
                  <p className="text-success fw-bold">Aggiunto al carrello!</p>
                ) : (
                  <Button
                    variant="primary"
                    className="bottoneLogin btn-success mt-4"
                    onClick={() => dispatch(addToCarrello(singolaMerce))}
                  >
                    Aggiungi al carrello
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Col key={props.merci?.id} xs={12} md={4} lg={3} className="d-flex justify-content-center">
          <Card className="my-3">
            <ProdottoImage
              src={props.merci?.tipoMerce}
              id={props.merci?.id}
              style={{ objectFit: "contain", aspectRatio: "1/1" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{props.merci?.tipoMerce}</Card.Title>
              <Card.Text className="mb-0">
                {props.merci?.utente.nome} {props.merci?.utente.cognome}
              </Card.Text>
              <Card.Text className="mb-0">Quantità {props.merci?.quantità} kg</Card.Text>
              <Card.Text className="mb-0">Prezzo {props.merci?.prezzoAlKg} €</Card.Text>
              {isInCarrello2 ? (
                <p className="text-success fw-bold">Aggiunto al carrello</p>
              ) : (
                <Button
                  variant="primary"
                  className="bottoneLogin btn-success mt-4"
                  onClick={() => dispatch(addToCarrello(props.merci))}
                >
                  Aggiungi al carrello
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

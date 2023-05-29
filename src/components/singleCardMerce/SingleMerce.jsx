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

  const isInCarrello = allList.includes(singolaMerce) || allList.includes(props?.merci);

  console.log(isInCarrello);
  console.log(allList);

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
                <Card.Text>
                  {singolaMerce?.venditore?.nome} {singolaMerce?.venditore?.cognome}
                </Card.Text>
                <Card.Text>Quantità {singolaMerce?.quantità} kg</Card.Text>
                <Card.Text>Prezzo {singolaMerce?.prezzoAlKg} €</Card.Text>
                {isInCarrello ? (
                  <p className="text-success fw-bold">Prodotto aggiunto</p>
                ) : (
                  <Button
                    variant="primary"
                    className="bottoneLogin btn-success"
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
        <Col key={props.merci?.id} xs={12} md={4} lg={3}>
          <Card className="my-3">
            <ProdottoImage
              src={props.merci?.tipoMerce}
              id={props.merci?.id}
              style={{ objectFit: "contain", aspectRatio: "1/1" }}
            />
            <Card.Body>
              <Card.Title>{props.merci?.tipoMerce}</Card.Title>
              <Card.Text>
                {props.merci?.venditore.nome} {props.merci?.venditore.cognome}
              </Card.Text>
              <Card.Text>Quantità {props.merci?.quantità} kg</Card.Text>
              <Card.Text>Prezzo {props.merci?.prezzoAlKg} €</Card.Text>
              {isInCarrello ? (
                <p className="text-success fw-bold">Prodotto aggiunto</p>
              ) : (
                <Button
                  variant="primary"
                  className="bottoneLogin btn-success"
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

import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProdottoImage } from "../image/ProdottoImage";
import { BsFillTrash3Fill } from "react-icons/bs";
import { removeFromCarrello } from "../../redux/action";
import AuthContext from "../login-page/AuthContextProvider";
import { useContext } from "react";

export const Carrello = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.lortolano.listCarrello);
  const somma = list.reduce((acc, obj) => acc + parseFloat(obj.prezzoAlKg.replace(",", ".")), 0);
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container className="my-5">
      {user ? (
        list.length > 0 ? (
          <>
            {list?.map((l) => (
              <ListGroup className="my-2" key={l.id}>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <ProdottoImage src={l?.tipoMerce} id={l?.id} altezza={"100px"} />
                    <div className="ms-4">
                      <p className="mb-0 fw-bold fs-5">{l.tipoMerce}</p>
                      <p className="mb-0">{l.prezzoAlKg} €</p>
                      <p className="mb-0">{l.quantità} kg</p>
                    </div>
                  </div>
                  <div>
                    <Button variant="danger" onClick={() => dispatch(removeFromCarrello(l))}>
                      <BsFillTrash3Fill className="fs-4" />
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            ))}
            <ListGroup className="my-2">
              <ListGroup.Item>
                <p className="mb-0 fw-bold fs-5">Totale: {somma} €</p>
              </ListGroup.Item>
            </ListGroup>
          </>
        ) : (
          <ListGroup className="mx-5 my-2">
            <ListGroup.Item>
              <p className="mb-0 fw-bold fs-5">Nessun prodotto!</p>
              <p className="mb-0">I prodotti che aggiungi al carrello verranno visualizzati qui!</p>
            </ListGroup.Item>
          </ListGroup>
        )
      ) : (
        <ListGroup className="mx-5 my-2">
          <ListGroup.Item>
            <h3>Prima di accedere al carrello devi fare il login!</h3>
          </ListGroup.Item>
        </ListGroup>
      )}
    </Container>
  );
};

import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProdottoImage } from "../image/ProdottoImage";
import { BsFillTrash3Fill } from "react-icons/bs";
import { removeFromCarrello } from "../../redux/action";

export const Carrello = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.lortolano.listCarrello);

  return (
    <Container className="my-5">
      {list.length}
      {list?.map((l) => (
        <ListGroup className="mx-5 my-2">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <ProdottoImage src={l?.tipoMerce} id={l?.id} altezza={"100px"} />
              <div className="ms-5">
                <p className="mb-0 fw-bold fs-5">{l.tipoMerce}</p>
                <p className="mb-0">{l.prezzoAlKg} €</p>
                <p className="mb-0">{l.quantità} kg</p>
              </div>
            </div>
            <div className="me-5">
              <Button variant="danger" onClick={() => dispatch(removeFromCarrello(l.id))}>
                <BsFillTrash3Fill className="fs-4" />
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
};

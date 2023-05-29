/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { SingleMerce } from "../singleCardMerce/SingleMerce";
import { useEffect } from "react";
import { getAllMerceAction } from "../../redux/action";
import { Container, Row } from "react-bootstrap";

export const AllProdotti = () => {
  const dispatch = useDispatch();
  const merci = useSelector((state) => state.lortolano.merci);
  useEffect(() => {
    dispatch(getAllMerceAction());
  }, []);
  return (
    <Container>
      <Row className="mt-3">
        {merci.map((merce) => (
          <SingleMerce merci={merce} id={merce.id} />
        ))}
      </Row>
    </Container>
  );
};

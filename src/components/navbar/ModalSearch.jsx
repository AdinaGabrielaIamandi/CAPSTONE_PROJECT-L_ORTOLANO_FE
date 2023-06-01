import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalSearch = (props) => {
  const handleClose = () => {
    props.setShowFunction(false);
  };

  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        {props.merci?.length <= 0 ? (
          <p className="ms-3 mt-3 fw-bold me-5 text-danger">Nessun prodotto trovato!</p>
        ) : (
          props.merci?.map((merce) => (
            <>
              <Link key={merce.id} to={"/prodotti-cercati/" + merce.id} className="text-decoration-none">
                <div className="mb-4 mt-3">
                  <p className="ms-3 mb-0 fw-bold text-dark me-5">{merce.tipoMerce}</p>
                  <small className="text-secondary ms-5">
                    Venditore: {merce.utente.nome} {merce.utente.cognome}
                  </small>
                </div>
              </Link>
            </>
          ))
        )}
      </Modal>
    </>
  );
};

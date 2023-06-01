export const GET_MERCE = "GET_MERCE";
export const GET_FOTO = "GET_FOTO";
export const GET_MERCE_PARTE_NOME = "GET_MERCE_PARTE_NOME";
export const ADD_TO_CARRELLO = "ADD_TO_CARRELLO";
export const REMOVE_FROM_CARRELLO = "REMOVE_FROM_CARRELLO";

export const addToCarrello = (props) => ({
  type: ADD_TO_CARRELLO,
  payload: props
});

export const removeFromCarrello = (props) => ({
  type: REMOVE_FROM_CARRELLO,
  payload: props
});

export const postRegisterAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const postLoginAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUtenteAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/utente`, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LORTOLANO
        }
      });
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllMerceAction = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("http://localhost:8080/api/merci", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LORTOLANO
        }
      });
      if (res.ok) {
        let merci = await res.json();
        dispatch({
          type: GET_MERCE,
          payload: merci
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingoloProdottoAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/merci/id/${props}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LORTOLANO
        }
      });
      if (res.ok) {
        let merciParteNome = await res.json();
        dispatch({
          type: GET_MERCE_PARTE_NOME,
          payload: merciParteNome
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

/*export const postVenditoreAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/venditori`, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LORTOLANO
        }
      });
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProdottoAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(`http://localhost:8080/api/merci`, {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LORTOLANO
        }
      });
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};*/

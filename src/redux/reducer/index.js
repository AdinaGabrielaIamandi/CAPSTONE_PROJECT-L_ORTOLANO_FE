import { ADD_TO_CARRELLO, GET_ID_ME, GET_MERCE, GET_MERCE_PARTE_NOME, REMOVE_FROM_CARRELLO } from "./../action/index";

const initialState = {
  merci: [],
  singolaMerce: [],
  listCarrello: [],
  utenti: []
};

//const mainReducer = (state = initialState, action) => {
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MERCE:
      return {
        ...state,
        merci: action.payload
      };
    case GET_MERCE_PARTE_NOME:
      return {
        ...state,
        singolaMerce: action.payload
      };
    case ADD_TO_CARRELLO:
      return {
        ...state,
        listCarrello: [...state.listCarrello, action.payload]
      };
    case REMOVE_FROM_CARRELLO:
      return {
        ...state,
        listCarrello: state.listCarrello.filter((el) => el !== action.payload)
      };
    case GET_ID_ME:
      return {
        ...state,
        utenti: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;

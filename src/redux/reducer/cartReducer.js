import { ADD_TO_CARRELLO, REMOVE_FROM_CARRELLO } from "../action";

export const cartReducer = (state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") }, action) => {
  switch (action.type) {
    case ADD_TO_CARRELLO:
      return {
        cartItems: action.payload.cartItems
      };
    case REMOVE_FROM_CARRELLO:
      return {
        cartItems: action.payload.cartItems
      };
    default:
      return state;
  }
};

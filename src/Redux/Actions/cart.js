import { Types } from "../types";

export const initializeCart = () => async (dispatch) => {
  const lsData = JSON.parse(localStorage.getItem("cart"));

  dispatch({
    type: Types.INITIALIZE_CART,
    payload: lsData ? lsData : [],
  });
};

export const updateCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  return {
    type: Types.UPDATE_CART,
    payload: cart,
  };
};

export const clearCart = () => async (dispatch) => {
  localStorage.removeItem("cart");
  return {
    type: Types.CLEAR_CART,
  };
};

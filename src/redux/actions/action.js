import { ADD_TO_CART } from "../types/types";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};

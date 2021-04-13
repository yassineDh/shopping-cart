import { ADD_TO_CART } from "../types/types";
import { DELETE_FROM_CART } from "../types/types";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};


export const deleteProductFromCart = (productId) => {
  return{
    type:DELETE_FROM_CART,
    payload:productId
  }
}
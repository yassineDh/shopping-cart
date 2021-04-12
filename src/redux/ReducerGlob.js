import { combineReducers } from "redux";
import { ADD_TO_CART } from "./types/types";
// import {your_reducers} from './Reducers/Budget-reducer'

const initialState = {
  producs: [],
  cartProducts: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let i;
      const found = state.cartProducts.some((el, index) => {
        i = index;
        return el.id === action.payload.id;
      });
      let v = [...state.cartProducts];
      if (found) {
        v[i].quantity += action.payload.quantity;
      }else{
        v=[...v,action.payload]
      }

      return { ...state, cartProducts: v };
    default:
      return state;
  }
};

export default cartReducer;

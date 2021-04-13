import { combineReducers } from "redux";
import { ADD_TO_CART } from "./types/types";
import { DELETE_FROM_CART } from "./types/types";
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
      } else {
        v = [...v, action.payload];
      }

      return { ...state, cartProducts: v };

    case DELETE_FROM_CART:
      let prods = [...state.cartProducts];
      let di;
      const foundI = prods.some((el, index) => {
        
        di = index;
        return el.id === action.payload;
      });
      if (foundI) {
        prods.splice(di,1)
        return { ...state, cartProducts: prods };
      }
      return { ...state, cartProducts: prods };
    default:
      return state;
  }
};

export default cartReducer;

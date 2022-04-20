import * as actionTypes from "./types";


const INITIAT_STATE = {
    products1: [],
    products2: [],
    products3: [],
    cart: JSON.parse(window.localStorage.getItem("cart")) || [],
  };

  const shopReducer = (state = INITIAT_STATE, action) => {
    switch (action.type) {
      case actionTypes.PRODUCTS1:
        return {
          ...state,
          products1: action.payload.products,
        };
      case actionTypes.PRODUCTS2:
        return {
          ...state,
          products2: action.payload.products,
        };
      case actionTypes.PRODUCTS3:
        return {
          ...state,
          products3: action.payload.products,
        };
      case actionTypes.ADD_TO_CART:
        const item = state.products1.find(
          (prod) => prod._id === action.payload._id
        )||state.products2.find(
          (prod) => prod._id === action.payload._id
        )||state.products3.find(
          (prod) => prod._id === action.payload._id
        )


        const inCart = state.cart.find((item) =>
          item._id === action.payload._id ? true : false
        );
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item._id === action.payload._id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };  
    default:
        return state;
    }
  };

  export default shopReducer
  
import * as actionTypes from "./types";


const INITIAT_STATE = {
    products: [],
    cart: JSON.parse(window.localStorage.getItem("cart")) || [],
  };

  const shopReducer = (state = INITIAT_STATE, action) => {
    switch (action.type) {
      case actionTypes.GET_ALL_PRODUCTS:
        return {
          ...state,
          products: action.payload.products,
        };
      case actionTypes.ADD_TO_CART:
        const item = state.products.find(
          (prod) => prod._id === action.payload._id
        );
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
  
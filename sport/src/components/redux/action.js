import * as actionTypes from "./types";

export const login = () => {
    return {
      type:actionTypes.LOGIN,
    };
  };
  
  export const logout = () => {
    return {
      type:actionTypes.LOGOUT,
    };
  };

  export const addToCart = (itemID) => {
    return {
      type: actionTypes.ADD_TO_CART,
      payload: {
        _id: itemID,
      },
    };
  };

  export const getallProds = (products) => {
    return {
      type: actionTypes.GET_ALL_PRODUCTS,
      payload: { products },
    };
  };
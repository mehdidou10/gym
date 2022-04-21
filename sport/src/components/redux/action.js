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

  export const getallProds1 = (products) => {
    return {
      type: actionTypes.PRODUCTS1,
      payload: { products },
    };
  };
  export const getallProds2 = (products) => {
    return {
      type: actionTypes.PRODUCTS2,
      payload: { products },
    };
  };
  export const getallProds3 = (products) => {
    return {
      type: actionTypes.PRODUCTS3,
      payload: { products },
    };
  };


  export const adjust = (itemID, value) => {
    return {
      type: actionTypes.ADJ_QTY,
      payload: {
        _id: itemID,
        qty: value,
      },
    };
  };

  export const removeFromCart = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: {
        _id: itemID,
      },
    };
  };
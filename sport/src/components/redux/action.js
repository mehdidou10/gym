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
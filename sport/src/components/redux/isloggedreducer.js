import * as actionTypes from "./types";

{/*const produits =(state=[],action)=> {
    if(action.type=='produits'){
        return [...state,action]
    }


    return state;
}
*/}
let exist = window.localStorage.getItem("TOKEN");
let logged = exist ? true : false;



  const INITIAT_STATE = {
    isLogged: logged,
  };
let isLoggedReducer = (state = INITIAT_STATE, action) => {
    switch(action.type){
      case actionTypes.LOGIN:
        return { ...state, isLogged: true };
      case actionTypes.LOGOUT:
        return { ...state, isLogged: false };
      default:
        return state;
    }
  };
  export default isLoggedReducer

// Combiner plusieurs reducers
// Créer le store qui serra utilisé par la suite dans l'app principale

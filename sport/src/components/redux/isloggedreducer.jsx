{/*const produits =(state=[],action)=> {
    if(action.type=='produits'){
        return [...state,action]
    }


    return state;
}
*/}
import * as actionTypes from "./types";
  const INITIAT_STATE = {
    isLogged: false,
  };
export let isLoggedReducer = (state = INITIAT_STATE, action) => {
    console.log(action)
    switch(action.type){
      case actionTypes.LOGIN:
        return { ...state, isLogged: true };
      case actionTypes.LOGOUT:
        return { ...state, isLogged: false };
      default:
        return state;
    }
  };



// Combiner plusieurs reducers


// Créer le store qui serra utilisé par la suite dans l'app principale

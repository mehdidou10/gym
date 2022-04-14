import * as actionTypes from "./types";


{/*const produits =(state=[],action)=> {
    if(action.type=='produits'){
        return [...state,action]
    }


    return state;
}
*/}


  const INITIAT_STATE = {
    isLogged: false,
  };
let isLoggedReducer = (state = INITIAT_STATE, action) => {
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
  export default isLoggedReducer

// Combiner plusieurs reducers
// Créer le store qui serra utilisé par la suite dans l'app principale

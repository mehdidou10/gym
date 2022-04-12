import { createStore, combineReducers } from 'redux'


const programmereducer = (state = '', action) => {
    if(action.type=='programme'){
        return state=action.abonnement
    }



    return state;
}


// Combiner plusieurs reducers
let reducers = combineReducers({
   
   abonnement:programmereducer
})


// Créer le store qui serra utilisé par la suite dans l'app principale
let store = createStore(reducers);

export {
    store
}
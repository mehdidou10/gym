import { combineReducers } from 'redux';
import isLoggedReducer from './isloggedreducer';
import programmereducer from './programmereducer';
import shopReducer from './produitsreducer';

let reducers = combineReducers({
    isLogged:isLoggedReducer,
    abonnement:programmereducer,
    shop: shopReducer,
 })
 export default reducers
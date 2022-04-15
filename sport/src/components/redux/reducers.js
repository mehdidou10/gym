import { combineReducers } from 'redux';
import isLoggedReducer from './isloggedreducer';
import programmereducer from './programmereducer'

let reducers = combineReducers({
    isLogged:isLoggedReducer,
    abonnement:programmereducer
 })
 export default reducers
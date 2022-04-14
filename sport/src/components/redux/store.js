import { createStore } from 'redux'
import reducers from './isloggedreducer'

let store = createStore(reducers);

export default store


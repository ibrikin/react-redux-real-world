import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import api from '../middleware/api'
import * as reducers from '../features'

const configureStore = preloadedState => {
    const rootReducer = combineReducers( reducers );
    return createStore(
        rootReducer,
  preloadedState,
  applyMiddleware(thunk, api)
)}

export default configureStore

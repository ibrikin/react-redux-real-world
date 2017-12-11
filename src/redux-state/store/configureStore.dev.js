import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'


import api from '../middleware/api'
import * as reducers from '../features'
import DevTools from '../utils/DevTools';

const configureStore = preloadedState => {
  const rootReducer = combineReducers( reducers );
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
    )
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(reducers)
  //   })
  // }

  return store
}

export default configureStore

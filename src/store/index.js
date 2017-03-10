import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import reducers from '../reducers'
import sagas from '../sagas'

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = composeWithDevTools({
    // DevTools extension options
  })
  const middlewares = composeEnhancers(applyMiddleware(sagaMiddleware))

  const store = createStore(reducers, preloadedState, middlewares)

  sagaMiddleware.run(sagas)

  return store
}

export default configureStore

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/';
import sagas from '../sagas';
import { localStorageMiddleware, reHydrateStore } from '../localStorage';
const persisedState = reHydrateStore();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persisedState,
  composeEnhancer(applyMiddleware(sagaMiddleware, localStorageMiddleware))
);

sagaMiddleware.run(sagas);

export default store;

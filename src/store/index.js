import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { save, load } from 'redux-localstorage-simple';

import rootReducer from '../reducers/';

import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const persistedState = load({ namespace: 'applicationState' });

const configureStore = preloadedState => createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware, save({ namespace: 'applicationState' }))));

const store = configureStore(persistedState);

sagaMiddleware.run(sagas);

export default store;

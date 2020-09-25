import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

import { watchLoginUser } from './sagas/user-saga';
// import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(sagas);
sagaMiddleware.run(watchLoginUser);

export default store;

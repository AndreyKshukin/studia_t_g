import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/reducer';
import sagaWatcher from '../saga/SagaWatcher';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(sagaWatcher);

  return store;
};

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const DEV = process.env.NODE_ENV !== 'production';

const middleware = DEV ? [thunk, logger] : [thunk];

const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
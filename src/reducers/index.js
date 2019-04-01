import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import customers from './customers';
import cart from './cart';
import app from './app'

const rootReducer = combineReducers({
  form: formReducer,
  products,
  customers,
  app,
  cart
});

export default rootReducer;
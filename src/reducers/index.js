import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import customers from './customers';
import app from './app.js'

const rootReducer = combineReducers({
  form: formReducer,
  products,
  customers,
  app
});

export default rootReducer;
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import customers from './customers';
import account from './account.js'

const rootReducer = combineReducers({
  form: formReducer,
  products,
  customers,
  account
});

export default rootReducer;
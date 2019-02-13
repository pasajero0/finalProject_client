import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import customers from './customers';

const rootReducer = combineReducers({
  form: formReducer,
  products,
  customers
});

export default rootReducer;
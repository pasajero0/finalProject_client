import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import products from './products/products.js';

const rootReducer = combineReducers({ 
	form: formReducer ,
	products
});

export default rootReducer;

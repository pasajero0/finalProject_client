import { ALL_PRODUCTS } from '../actions/products';

const initialState = {
  productsList: { allProducts:[]}
}

function products (state = initialState, action) {
 switch (action.type){
  case 'ALL_PRODUCTS':
    return {...state, productsList: {}}
  default:
    return {...state}
  }
}  
export default products 

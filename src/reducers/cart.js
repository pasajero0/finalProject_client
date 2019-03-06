import { ADD_TO_CART } from '../actions/cart'


const initialState =  {
  products: [],
  foo: 12345
};


const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    const product = action.payload;



    
        return {
          ...state, 
          products: [...state.products, {...product, quantity: 1}]
        }
    default:
      return state
  }
}

export default cart;

  
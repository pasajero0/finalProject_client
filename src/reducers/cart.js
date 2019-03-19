import {
  UPDATE_PRODUCTS_IN_CART
} from '../actions/cart';


const initialState = {
  products: [],
  total: 0,
  count: 0
};

/**
 * Calculate total sum of the products
 * @param products
 * @returns {number}
 */

const getTotal = (products) => {
  let total = 0;
  products.forEach(p => total += p.price * p.quantity);
  return total;
};

/**
 * Calculate number of the products
 * @param products
 * @returns {number}
 */
const getCount = (products) => {
  let count = 0;
  products.forEach(p => count += p.quantity);
  return count;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS_IN_CART:
      return {
        ...state,
        products: action.payload,
        total: getTotal(action.payload),
        count: getCount(action.payload),
      };
    default:
      return state;
  }
};

export default cart;

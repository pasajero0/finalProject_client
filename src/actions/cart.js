import axios from 'axios';
import { URL_API_STORE_CART } from '../config/app';

axios.defaults.withCredentials = true;

export const UPDATE_PRODUCTS_IN_CART = 'UPDATE_PRODUCTS_IN_CART';
export const INIT_CART = 'INIT_CART';


/**
 * Send cart content to the server
 * @returns {function(*, *)}
 */
export function sendToServer() {
  return (dispatch, getState) => {
    return axios.post(URL_API_STORE_CART, getState().cart)
      .catch(console.log);
  }
}
/**
 * Clear Cart
 * @returns {function(*)}
 */
export function clearCart() {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_PRODUCTS_IN_CART,
      payload: []
    });
    sendToServer()(dispatch, getState);
  };
}
/**
 * Init Cart
 * @returns {function(*)}
 */
export function initCart(cart) {
  return (dispatch) => {
    dispatch({
      type: INIT_CART,
      payload: cart
    });
  };
}
/**
 * Add product to cart. Check if already exits increment number else add new object.
 * @param product
 * @returns {function(*, *)}
 */
export function addProductToCart(product) {
  return (dispatch, getState) => {
    const storedProducts = getState().cart.products;
    const stored = storedProducts.filter(p => p.slug === product.slug);
    if (stored.length > 0) {
      dispatch({
        type: UPDATE_PRODUCTS_IN_CART,
        payload: storedProducts.map((p) => {
          if (product.slug === p.slug) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        })
      });
    } else {
      dispatch({
        type: UPDATE_PRODUCTS_IN_CART,
        payload: [...storedProducts, { ...product, quantity: 1 }]
      });
    }
    sendToServer()(dispatch, getState);
  };
}
/**
 * Update product quantity in cart. If 0 remove the record. Otherwise set new quantity
 * @param slug {String}
 * @param quantity {number}
 * @returns {function(*, *)}
 */
export function updateProductInCart(slug, quantity = 0) {
  return (dispatch, getState) => {
    const storedProducts = getState().cart.products;
    if (quantity > 0) {
      dispatch({
        type: UPDATE_PRODUCTS_IN_CART,
        payload: storedProducts.map((p) => {
          if (slug === p.slug) {
            return { ...p, quantity };
          }
          return p;
        })
      });
    } else {
      dispatch({
        type: UPDATE_PRODUCTS_IN_CART,
        payload: storedProducts.filter(p => slug !== p.slug)
      });
    }
    sendToServer()(dispatch, getState);
  };
}



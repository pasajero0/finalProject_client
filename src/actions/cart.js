export const UPDATE_PRODUCTS_IN_CART = 'UPDATE_PRODUCTS_IN_CART';

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
  };
}

export function clearCart() {
  return dispatch => {
    dispatch({
      type: UPDATE_PRODUCTS_IN_CART,
      payload: []
    });
  };
}
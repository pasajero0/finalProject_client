/**
 * Cart Component.
 * It responses on rendering cart view.
 * @module Cart
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { connect } from 'react-redux';
import { updateProductInCart } from '../../actions/cart';

import './Cart.scss';

const propTypes = {
  /** Array of products. */
  products: PropTypes.arrayOf(
    PropTypes.shape({
      /** Preview picture src. */
      picture: PropTypes.string.isRequired,
      /** Product name. */
      name: PropTypes.string.isRequired,
      /** In cart quantity. */
      quantity: PropTypes.string.isRequired,
      /** Product price. */
      price: PropTypes.number.isRequired,
    })
  ),
  /** Base dir for the images. */
  imagesDir: PropTypes.string.isRequired,
  /** Handler to change quantity. */
  callUpdateProductInCart: PropTypes.func.isRequired,
  /** Total cart price. */
  total: PropTypes.number.isRequired,
};
const defaultProps = {
  products: []
};


const Cart = ({ total, products, imagesDir, callUpdateProductInCart }) => {
  if(products.length === 0){
    return (
      <div>
        <div className="cart">
          <h1 className="cart__header">Cart</h1>
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="cart">
        <h1 className="cart__header">Cart</h1>
        <div className="cartTableHeader">
          <div className="cartTableHeader__product">Product</div>
          <div className="cartTableHeader__quantity">Quantity</div>
          <div className="cartTableHeader__price">Price</div>
        </div>

        {products.map(({
          slug, price, quantity, picture
        }) => (
          <CartItem
            key={slug}
            price={price}
            quantity={quantity}
            picture={`${imagesDir}/sm-${picture}`}
            onChangeQuantity={q => callUpdateProductInCart(slug, q)}
          />
        ))}
        <div className="cart__total">
          <span>Total</span>
          <span>
            ${total}
          </span>
        </div>
        <NavLink to="/checkout" className="cart__btnCheckout">
          Proceed to checkout
          <FaLongArrowAltRight />
        </NavLink>
      </div>
    </div>
  );
};

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

const mapStateToProps = state => ({
  total: state.cart.total,
  products: state.cart.products,
  imagesDir: state.products.imagesDir
});

const mapDispatchToProps = dispatch => ({
  callUpdateProductInCart: (slug, quantity) => dispatch(updateProductInCart(slug, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);




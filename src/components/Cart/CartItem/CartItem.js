/**
 * CartItem Component.
 * It responses on rendering item in cart view.
 * @module CartItem
 */
import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.scss';

const propTypes = {
  /** Preview picture src. */
  picture: PropTypes.string.isRequired,
  /** Product name. */
  name: PropTypes.string.isRequired,
  /** In cart quantity. */
  quantity: PropTypes.string.isRequired,
  /** Product price. */
  price: PropTypes.number.isRequired,
  /** Handler to change quantity. */
  onChangeQuantity: PropTypes.func.isRequired,
};

const CartItem = ({
  picture, price, name, quantity, onChangeQuantity
}) => (
  <div className="cartItem">
    <button onClick={() => onChangeQuantity(0)} className="cartItem__close">
      &#10005;
    </button>
    <div className="cartItem__product">
      <img src={picture} alt={name} className="cartItem__img"/>
      <span className="cartItem__title">
            {name}
          </span>
    </div>

    <div className="cartItem__counter">
      <input
        defaultValue={quantity}
        className="cartItem__counter_box"
        type="number"
        name="quantity"
        min="0"
        onChange={e => onChangeQuantity(e.currentTarget.value)}
      />
    </div>
    <div className="cartItem__price">
      {price}
    </div>
  </div>
);

CartItem.propTypes = propTypes;

export default CartItem;

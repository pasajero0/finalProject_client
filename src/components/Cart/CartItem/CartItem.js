import React, {Component} from 'react';
import './CartItem.scss';

class CartItem extends Component {
    
    render(){
        const {slug, picture, price, name, quantity} = this.props
        return(
            <div className="cartItem">
                <button
                    // onClick={this.props.removeItem}
                    className="cartItem__close"> &#10005;
                </button>
                <div className="cartItem__product">
                    <img src={picture}
                                 alt='Dress' className="cartItem__img"/>
                   <span className="cartItem__title">
                    {name}
                  </span>
                </div>

                <div className="cartItem__counter">
                     <input
                        defaultValue= {quantity}
                        className="cartItem__counter_box"
                        type="number"
                        name="quantity"
                        min="0"/>
                </div>
                <div className="cartItem__price">
                        {price}
                </div>
            </div>
        )
    }
}
export default CartItem;

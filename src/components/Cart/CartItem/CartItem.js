import React, {Component} from 'react';
import ProductListEntry from '../../ProductListEntry/ProductListEntry';
import './CartItem.scss';

class CartItem extends Component {

    render(){
    
        return(
            <div className="cartItem">
                <button 
                    onClick={this.props.removeItem} 
                    className="cartItem__close"> &#10005;
                </button>
                <div className="cartItem__product">
                    {/* <Product /> */}
                    <img src={this.props.imgSrc}
                                 alt='Dress' className="cartItem__img"/>
                   <span className="cartItem__title">
                    {this.props.title}
                  </span>
                </div>

                <div className="cartItem__counter">
                     <input 
                        onChange={this.props.getNumberInput}
                        defaultValue= "1"
                        className="cartItem__counter_box" 
                        type="number" 
                        name="quantity" 
                        min="1"/>
                </div>
                <div className="cartItem__price">
                        {this.props.price}
                </div>
            </div>
        )
    }
}
export default CartItem;
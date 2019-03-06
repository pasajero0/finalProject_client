import React, {Component} from 'react';
import CartItem from './CartItem/CartItem';
import Product from '../Product/Product';
import { FaLongArrowAltRight } from "react-icons/fa";
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart'

import './Cart.scss';

class Cart extends Component {

    render() {
      const {products, imagesDir} = this.props

        return (
         <div>
                <div className="cart">
                <h1 className="cart__header">Cart</h1>
                    <div className="cartTableHeader">
                        <div className="cartTableHeader__product">Product</div>
                        <div className="cartTableHeader__quantity">Quantity</div>
                        <div className="cartTableHeader__price">Price</div>
                    </div>

                     {products.map(product => {
                          return <CartItem 
                                  key={product.slug} 
                            
                                  price={product.price} 
                                  quantity={product.quantity} 
                                  picture={`${imagesDir}/sm-${product.picture}`}
                                  />
                      })}

                    <div className="cart__total">
                      <span>Total</span>
                      <span>$25</span>
                    </div>
                    <button className="cart__btnCheckout">Proceed to checkout <FaLongArrowAltRight/></button>
                </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
  products: state.cart.products,
   imagesDir: state.products.imagesDir
});


// const mapDispatchToProps = (dispatch) => {
//  addToCart
// };

export default connect(mapStateToProps)(Cart);




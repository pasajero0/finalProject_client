import React, {Component} from 'react';
import {FiShoppingCart} from 'react-icons/fi'
// import {FiShoppingBag} from 'react-icons/fi';
import './AddProductToCartIcon.scss';

class AddProductToCartIcon extends Component {
    state = {
        addProductToCart: false
    };

    toogleAddProductToCart = () => {
        this.setState({addProductToCart: !this.state.addProductToCart});
    };

    render() {
        return (
            <FiShoppingCart className={this.state.addProductToCart ? "addProductToCartIcon added" : "addProductToCartIcon"}
                     onClick={this.toogleAddProductToCart}
            />
        )
    }
}

export default AddProductToCartIcon;
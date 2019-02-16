import React, {Component} from 'react';
import {FiShoppingBag} from "react-icons/fi";
import './ProductListEntry.scss'
import PropTypes from "prop-types";

class ProductListEntry extends Component {

    render() {
        return (
            <div className="productItemContent">
                <div className='productItem'>
                    <a href="#" className="productItemImg__link">
                        <img src={this.props.imgSrc}
                             alt='Dress'
                             className='productItemImg__img'/>
                    </a>
                    <a href="#" className="productItemName__link">
                        {this.props.name}
                    </a>
                    <span className="productItemPrice">{this.props.price.sum}{this.props.price.currency}</span>
                    <button className="addProductItemToCartBtn">
                        <FiShoppingBag className="addProductItemToCartBtn__icon"/>
                    </button>
                </div>
            </div>
        );
    }
}

ProductListEntry.propTypes = {
    // gender: PropTypes.string,
    // category: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
        sum: PropTypes.number,
        currency: PropTypes.string,
    }),
    // color: PropTypes.string,
    // size: PropTypes.string,
    // text: PropTypes.string,
};

export default ProductListEntry;
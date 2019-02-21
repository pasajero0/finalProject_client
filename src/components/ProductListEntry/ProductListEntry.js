import React, {Component} from 'react';
import SaveForLaterIcon from '../SaveForLaterIcon/SaveForLaterIcon.js';
import './ProductListEntry.scss'
import PropTypes from "prop-types";

const propTypes = {
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
                    <SaveForLaterIcon className="saveForLaterIcon"/>
                    {/*<button className="addProductItemToCartBtn">*/}
                    {/*<FiShoppingBag className="addProductItemToCartBtn__icon"/>*/}
                    {/*</button>*/}
                </div>
            </div>
        );
    }
}

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;
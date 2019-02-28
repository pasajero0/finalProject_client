import React, {Component} from 'react';
import ProductSlider from './ProductSlider/ProductSlider.js';
import StarRating from "../StarRating/StarRating";
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon.js';
import {FiShoppingBag} from 'react-icons/fi';
import './Product.scss'
import PropTypes from "prop-types";
// import AddProductToCartIcon from "../ProductListEntry/ProductListEntry";

const propTypes = {
    gender: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    prices: PropTypes.shape({
        retail: PropTypes.number,
        sale: PropTypes.number,
    })
};

class Product extends Component {
    render() {
        return (
            <div className="product" key={this.props.index}>
                <div className="container">
                    <div className='productContent'>
                        <ProductSlider images={[
                            {id: 1, src: process.env.PUBLIC_URL + '/productSlider-images/1.jpg', alt: ''},
                            {id: 2, src: process.env.PUBLIC_URL + '/productSlider-images/2.jpg', alt: ''},
                            {id: 3, src: process.env.PUBLIC_URL + '/productSlider-images/3.jpg', alt: ''},
                            // {id: 4, src: process.env.PUBLIC_URL + '/productSlider-images/4.jpg', alt: ''},
                            // {id: 5, src: process.env.PUBLIC_URL + '/productSlider-images/5.jpg', alt: ''},

                        ]}
                                       settings={{
                                           customPaging: function (i) {
                                               return (
                                                   <a>
                                                       <img
                                                           src={`/productSlider-images/${i + 1}.jpg`}/>
                                                   </a>
                                               );
                                           },
                                           dots: true,
                                           dotsClass: "slick-dots slick-thumb",
                                           infinite: true,
                                           speed: 500,
                                           slidesToShow: 1,
                                           slidesToScroll: 1,
                                       }}
                        />
                        <div className="productInfo">
                            <p className="productInfo__name">{this.props.name}</p>
                            <StarRating className="productInfo__rating"/>
                            <p className="productInfo__price">${this.props.prices}</p>
                            <div className="productInfo__buy">
                                <button className="addProductToCartBtn">
                                    <FiShoppingBag className="addProductToCartBtn__icon"/>
                                    Add to cart
                                </button>
                                <SaveProductForLaterIcon className="saveForLaterBtn__icon"/>
                            </div>
                        </div>
                        {/*<div className="textContent">*/}
                        {/*<p className="productInfo__description">{this.props.description}</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}


Product.propTypes = propTypes;

export default Product;

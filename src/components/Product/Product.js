import React, {Component} from 'react';
import ProductSlider from './ProductSlider/ProductSlider.js'
import SaveForLaterIcon from '../SaveForLaterIcon/SaveForLaterIcon.js';
import {FiShoppingBag} from 'react-icons/fi';
import './Product.scss'
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

class Product extends Component {
    render() {
        return (
            <div className="product">
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
                                                           src={`/productSlider-images/${i + 1}.jpg`}
                                                       />
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
                            <p className="productInfo__name">Dress</p>

                            <div className="star-rating">
                                <div className="star-rating__wrap">
                                    <input className="star-rating__input" id="star-rating-5" type="radio" name="rating"
                                           value="5"/>
                                    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5"
                                           title="5 out of 5 stars">
                                    </label>
                                    <input className="star-rating__input" id="star-rating-4" type="radio"
                                           name="rating" value="4"/>
                                    <label className="star-rating__ico fa fa-star-o fa-lg"
                                           htmlFor="star-rating-4" title="4 out of 5 stars">
                                    </label>
                                    <input className="star-rating__input" id="star-rating-3" type="radio"
                                               name="rating" value="3"/>
                                    <label className="star-rating__ico fa fa-star-o fa-lg"
                                           htmlFor="star-rating-3" title="3 out of 5 stars">
                                    </label>
                                    <input className="star-rating__input" id="star-rating-2" type="radio"
                                                   name="rating" value="2"/>
                                    <label className="star-rating__ico fa fa-star-o fa-lg"
                                           htmlFor="star-rating-2" title="2 out of 5 stars">
                                    </label>
                                    <input className="star-rating__input" id="star-rating-1"
                                           type="radio" name="rating" value="1"/>
                                    <label className="star-rating__ico fa fa-star-o fa-lg"
                                           htmlFor="star-rating-1" title="1 out of 5 stars">
                                    </label>
                                </div>
                            </div>


                            {/*<div className="productInfoColors">*/}
                            {/*<span className="productInfoColors__title">*/}
                            {/*Color*/}
                            {/*</span>*/}
                            {/*<ul className="productInfoColors__list">*/}
                            {/*<li className="productInfoColors__item">*/}
                            {/**/}
                            {/*</li>*/}
                            {/*</ul>*/}
                            {/*</div>*/}


                            <div className="productInfo__counter">
                                <input
                                    onChange={this.props.getNumberInput}
                                    defaultValue="1"
                                    className="productInfo__box"
                                    type="number"
                                    name="quantity"
                                    min="1"/>
                            </div>
                            <div className="productInfo__buy">
                                <button className="addProductToCartBtn">
                                    <FiShoppingBag className="addProductToCartBtn__icon"/>
                                    Add to cart
                                </button>
                                {/*<button className="saveForLaterBtn">*/}
                                <SaveForLaterIcon className="saveForLaterBtn__icon"/>
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }

    Product.propTypes = propTypes;

    export default Product;
import React, {Component} from 'react';
import ProductSlider from './ProductSlider/ProductSlider.js';
import StarRating from "../StarRating/StarRating";
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon.js';
import {FiShoppingBag} from 'react-icons/fi';
import './Product.scss'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import AddProductToCartIcon from "../ProductListEntry/ProductListEntry";

const propTypes = {
    // _id: PropTypes.string,
    id: PropTypes.number,
    company: PropTypes.string,
    country: PropTypes.string,
    price: PropTypes.shape({
        sum: PropTypes.number,
        currency: PropTypes.string,
    }),
    // price: 848,
    // specialPrice: 169,
    size: PropTypes.string,
    color: PropTypes.string,
    gender: PropTypes.string,
    category: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    isBrandNew: PropTypes.bool,
    isPopular: PropTypes.bool,
    isAvailable: PropTypes.bool,
    isOnSale: PropTypes.bool,
    rate: PropTypes.number,
    img: PropTypes.string,
    // picture: PropTypes.string,
    // added: PropTypes.number,

};

class Product extends Component {
    render() {

        const {productsList} = this.props;

        let productRender = productsList.map((product, index) => {
            return (
                <div className="product" key={product.id}>
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
                                <p className="productInfo__name">{product.name}</p>
                                <StarRating className="productInfo__rating"/>
                                <p className="productInfo__price">{product.price.currency}{product.price.sum}</p>
                                <div className="productInfo__buy">
                                    <button className="addProductToCartBtn">
                                        <FiShoppingBag className="addProductToCartBtn__icon"/>
                                        Add to cart
                                    </button>
                                    <SaveProductForLaterIcon className="saveForLaterBtn__icon"/>
                                </div>
                            </div>
                            {/*<div className="textContent">*/}
                            {/*<p className="productInfo__description">{productItem[0].description}</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <>
                {productRender}
            </>
        )
    }
}

Product.propTypes = propTypes;


const mapStateToProps = (state) => {
    return {
        productsList: state.products.productsList,
    }
};

export default connect(mapStateToProps)(Product);

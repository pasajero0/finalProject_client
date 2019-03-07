import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating';
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon';
import { fetchProduct } from '../../actions/products';
import { addProductToCart } from '../../actions/cart';

import './Product.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  callFetchProduct: PropTypes.func.isRequired,
  imagesDir: PropTypes.string.isRequired,
  routeData: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string
    })
  }),
  callAddProductToCart: PropTypes.func.isRequired
};

const defaultProps = {
  productData: {
    slug: '',
    pictures: [],
    imagesDir: '',
    name: '',
    prices: {
      retail: 0,
      sale: 0
    }
  },
  onAddToCart: () => {}
};


class Product extends Component {

  componentDidMount() {
    const { routeData: { params }, callFetchProduct } = this.props;
    callFetchProduct(params.product);
  }
addToCart(product){
   const { callAddToCart } = this.props;
   callAddToCart(product);
}

  render() {
    const { productData:{ description, slug, pictures, name, prices }, imagesDir, isFetching,  callAddProductToCart} = this.props;

    return (
      <section className="product" key={slug}>
        <div className="container">
          <div className="product__content">
            { isFetching
              ? <span className="productsList__loader">Loading...</span>
              : (
                <>
                  <div className="productSlider">
                    <img className="productSlider__mainImg" src={`${imagesDir}/md-${pictures[0]}`} alt="Product" />
                    <div className="productSlider__smImg">
                      <img className="productSlider__img" src={`${imagesDir}/sm-${pictures[1]}`} alt="Product" />
                      <img className="productSlider__img" src={`${imagesDir}/sm-${pictures[2]}`} alt="Product" />
                      <img className="productSlider__img" src={`${imagesDir}/sm-${pictures[3]}`} alt="Product" />
                    </div>
                  </div>
                  <div className="product__info">
                    <p className="product__name">{name}</p>
                    <StarRating className="product__rating" />
                    <p className="product__price">${prices.retail}</p>
                    <div className="product__buy">
                      <button className="product__btn" onClick={() => callAddProductToCart({slug, picture: pictures[0], price: prices.retail, name})}>
                        <AddProductToCartIcon className="addProductToCartIcon" />
                        Add to cart
                      </button>
                      <SaveProductForLaterIcon className="saveProductForLaterIcon" />
                    </div>
                    <div className="product__textBlock">
                      <p className="product__description">{description}</p>
                    </div>
                  </div>
                </>
              )}
          </div>
        </div>
      </section>
    );
  }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

const mapStateToProps = state => ({
  productData: state.products.productData,
  isFetching: state.products.isFetching,
  imagesDir: state.products.imagesDir
});

const mapDispatchToProps = dispatch => ({
  callFetchProduct: requestData => dispatch(fetchProduct(requestData)),
  callAddProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
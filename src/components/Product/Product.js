import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import StarRating from '../StarRating/StarRating';
//import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon';
import ImageSlider from '../ImageSlider/ImageSlider';
import { fetchProduct } from '../../actions/products';
import { addProductToCart } from '../../actions/cart';
import ProductListLoader from '../ProductListLoader/ProductListLoader';

import './Product.scss';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  callFetchProduct: PropTypes.func.isRequired,
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
    isOnSale: false,
    isBrandNew: false,
    prices: {
      retail: 0,
      sale: 0
    }
  },
  onAddToCart: () => {
  }
};


class Product extends Component {
  constructor(props) {
    super(props);
    this.mainPicture = createRef();
    this.state = {
      isProductSaved: false
    };
  }

  componentDidMount() {
    const { routeData: { params }, callFetchProduct } = this.props;
    callFetchProduct(params.product);
  }

  onAddToCartStartAnimation() {
    const src = this.mainPicture.current.querySelectorAll('.imageSlider__mainImg_current')[0];
    const duplicate = src.cloneNode(true);
    const rect = src.getBoundingClientRect();
    const parent = document.getElementById('root');

    duplicate.style.position = 'fixed';
    duplicate.style.width = `${rect.width}px`;
    duplicate.style.height = `${rect.height}px`;
    duplicate.style.top = `${rect.top}px`;
    duplicate.style.left = `${rect.left}px`;
    duplicate.style.transition = 'all 0.6s ease-out';
    duplicate.style.transformOrigin = 'top-left';

    parent.append(duplicate);
    setTimeout(() => {
      duplicate.style.left = `${window.innerWidth}px`;
      duplicate.style.top = `${0 - rect.width}px`;
      duplicate.style.transform = 'scale(0.2) rotate(45deg)';
      duplicate.style.opacity = '0';
    }, 10);
    setTimeout(() => {
      duplicate.remove();
    }, 700);
  }

  onSaveProductForLater() {
    this.setState({ isProductSaved: !this.state.isProductSaved });
  }

  render() {
    const { productData: { description, slug, pictures, name, prices, brand, country, isOnSale }, isFetching, callAddProductToCart } = this.props;

    //const salePercents = Math.round((prices.sale-prices.retail)/prices.retail * 100);

    return (
      <section className="product" key={slug}>
        <div className="container">
          {isFetching
            ? <ProductListLoader/>
            : (
              <div className="product__content">
                <div ref={this.mainPicture} className="imageSlider__container">
                  <ImageSlider images={pictures}/>
                </div>
                <div className="product__info">
                  <p className="product__name">{name}</p>
                  {/*<StarRating className="product__rating"/>*/}
                  <p className="product__brand">{brand}, {country}</p>
                  {isOnSale
                    ? (
                      <div className="product__price">
                    <span className="product__price_sale">
                    ${prices.sale}
                    </span>
                        <span className="product__price_old">
                    ${prices.retail}
                    </span>
                      </div>
                    )
                    : <div className="product__price">${prices.retail}</div>}


                  <div className="product__buy">
                    <button
                      type="button"
                      className="product__btn"
                      onClick={() => {
                        callAddProductToCart({
                          slug,
                          picture: pictures[0],
                          price: isOnSale ? prices.sale : prices.retail,
                          name
                        });
                        this.onAddToCartStartAnimation();
                      }}
                    >
                      <AddProductToCartIcon className="addProductToCartIcon"/>
                      Add to cart
                    </button>
                    {/*<button type="button" className="product__save" onClick={this.onSaveProductForLater.bind(this)}>*/}
                    {/*<SaveProductForLaterIcon className={isProductSaved*/}
                    {/*? 'saveProductForLaterIcon saveProductForLaterIcon_saved'*/}
                    {/*: 'saveProductForLaterIcon'*/}
                    {/*} />*/}
                    {/*</button>*/}
                  </div>
                  <p className="product__description">{description}</p>
                </div>
              </div>
            )}
        </div>
      </section>
    );
  }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

const mapStateToProps = state => ({
  productData: state.products.productData,
  isFetching: state.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  callFetchProduct: requestData => dispatch(fetchProduct(requestData)),
  callAddProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
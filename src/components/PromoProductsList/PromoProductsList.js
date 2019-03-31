import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { replaceInRoute } from '../../utils/helpers';
import { URL_PRODUCT_IMAGES, URL_API_FETCH_PROMO_PRODUCTS } from '../../config/app';
import ProductListLoader from '../ProductListLoader/ProductListLoader';
import ProductCarousel from '../ProductCarousel/ProductCarousel'

import './PromoProductsList.scss';

axios.defaults.withCredentials = true;

const propTypes = {
  type: PropTypes.oneOf(['sale', 'new']),
  title: PropTypes.string,
};

const defaultProps = {
  type: 'sale',
  title: 'Special offers'
};

class PromoProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBusy: true,
      productsList: {
        records: [],
        page: 1,
        perPage: 10,
        count: 0,
        pagesTotal: 0
      }
    }
  }

  componentDidMount() {
    const { type } = this.props;
    axios.get(URL_API_FETCH_PROMO_PRODUCTS.replace(/:type/, type), {})
      .then(res => res.data)
      .then((data) => {
        if (data.success) {
          this.setState(prevState => ({
            ...prevState,
            productsList: data.data,
            isBusy: false
          }));
          console.log(data.data);
        } else {
          throw new Error('Fetching product data error');
        }
      });
  }


  render() {
    const { title } = this.props;
    const { isBusy, productsList } = this.state;
    const products = productsList.records.map(item => (
      <ProductListEntry
        key={item.slug}
        slug={item.slug}
        picture={`${URL_PRODUCT_IMAGES}/md-${item.pictures[0]}`}
        name={item.name}
        brand={item.brand}
        country={item.country}
        isBrandNew={item.isBrandNew}
        isOnSale={item.isOnSale}
        prices={item.prices}
        link={replaceInRoute(
          `/product/:product`,
          { product: item.slug }
        )}
      />
    ));
    return (
      <section className="promoProductsList">
        <div className="container">
          {productsList.records &&
          (
            <ProductCarousel
              images={products}
              settings={{
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,

              }}
              title={title}
            />

          )}
          {isBusy && <ProductListLoader/>}
        </div>
      </section>
    );
  }
}

PromoProductsList.propTypes = propTypes;
PromoProductsList.defaultProps = defaultProps;


export default PromoProductsList;

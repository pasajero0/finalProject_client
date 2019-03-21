import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { setCurrentDepartment } from '../../actions/products';
import { replaceInRoute } from '../../utils/helpers';
import { URL_PRODUCT_IMAGES, URL_API_FETCH_PROMO_PRODUCTS } from '../../config/app';
import ProductListLoader from '../ProductListLoader/ProductListLoader';
import Pagination from '../Pagination/Pagination';

import './PromoProductsList.scss';

axios.defaults.withCredentials = true;

const propTypes = {
  type: PropTypes.oneOf(['sale', 'new']),
  department: PropTypes.string.isRequired,
};

const defaultProps = {
  type: 'sale'
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
    const { department, type } = this.props;
    console.log(URL_API_FETCH_PROMO_PRODUCTS.replace(/:type/, type));

    axios.get(URL_API_FETCH_PROMO_PRODUCTS.replace(/:type/, type), {params:{department}  })
      .then(res => res.data)
      .then((data) => {
        if (data.success) {
          this.setState(prevState => ({
            ...prevState,
            productsList: data.data,
            isBusy: false
          }));
        } else {
          throw new Error('Fetching product data error');
        }
      });
  }


  render() {
    const { department } = this.props;
    const { isBusy, productsList } = this.state;
    return (
      <section className="PromoProductsList">
        <div className="container">
          {productsList.records &&
          (
            <div className="PromoProductsList__content">
              {productsList.records.map(item => (
                <ProductListEntry
                  key={item.slug}
                  slug={item.slug}
                  picture={`${URL_PRODUCT_IMAGES}/sm-${item.pictures[0]}`}
                  name={item.name}
                  prices={item.prices}
                  link={replaceInRoute(
                    `/:department/product/:product`,
                    { department, product: item.slug }
                  )}
                />
              ))}
            </div>
          )}
          {isBusy && <ProductListLoader/>}
        </div>
      </section>
    );
  }
}

PromoProductsList.propTypes = propTypes;
PromoProductsList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  productsList: state.products.productsList,
  isFetching: state.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  callSetCurrentDepartment: name => dispatch(setCurrentDepartment(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoProductsList);

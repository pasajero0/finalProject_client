 import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { fetchProducts, setCurrentDepartment } from '../../actions/products';
import { replaceInRoute } from '../../utils/helpers';
import { URL_PRODUCT_IMAGES } from '../../config/app';

import './ProductsList.scss';

const propTypes = {
  productsList: PropTypes.shape({
    records: PropTypes.array,
    page: PropTypes.number,
    perPage: PropTypes.number,
    count: PropTypes.number,
    pagesTotal: PropTypes.number,
  }),
  isFetching: PropTypes.bool.isRequired,
  callFetchProducts: PropTypes.func.isRequired,
  callSetCurrentDepartment: PropTypes.func.isRequired,
  routeData: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string
    })
  })
};

const defaultProps = {
  productsList: {
    records: [],
    page: 1,
    perPage: 10,
    count: 0,
    pagesTotal: 0,
  },
  routeData: {
    path: '',
    url: '',
    params: {
      department: '',
      page: '1'
    }
  }
};

class ProductsList extends Component {

  componentDidMount() {
    const { routeData: { params }, callFetchProducts, callSetCurrentDepartment } = this.props;
    callFetchProducts(params);
    callSetCurrentDepartment(params.department);
  }

  render() {
    const { routeData, productsList, isFetching } = this.props;
    return (
      <section className="productsList">
        <div className="container">
          <div className="productsList__content">
            {isFetching
              ? <span className="productsList__loader">Loading...</span>
              : (
                productsList.records.map(item => (
                  <ProductListEntry
                    key={item.slug}
                    slug={item.slug}
                    picture={`${URL_PRODUCT_IMAGES}/md-${item.pictures[0]}`}
                    name={item.name}
                    prices={item.prices}
                    link={replaceInRoute(
                      `${routeData.path}/product/:product`,
                      { ...routeData.params, product: item.slug }
                    )}
                  />
                ))
              )}
          </div>
        </div>
      </section>
    );
  }
}

ProductsList.propTypes = propTypes;
ProductsList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  productsList: state.products.productsList,
  isFetching: state.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  callFetchProducts: requestData => dispatch(fetchProducts(requestData)),
  callSetCurrentDepartment: name => dispatch(setCurrentDepartment(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

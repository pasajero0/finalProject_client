import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { fetchProducts } from '../../actions/products';

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
  startFetchProducts: PropTypes.func.isRequired,
  imagesDir: PropTypes.string.isRequired,
  page: PropTypes.number,
  department: PropTypes.string
};

const defaultProps = {
  productsList: {
    records: [],
    page: 1,
    perPage: 10,
    count: 0,
    pagesTotal: 0,
  },
  page: 1,
  department: ''
};

class ProductsList extends Component {
  componentDidMount() {
    const { page, department, startFetchProducts } = this.props;
    startFetchProducts({ department, page });
  }

  render() {
    const { productsList, imagesDir, isFetching } = this.props;
    return (
      <section className="productsList">
        <div className="container">
          <div className="productsListContent">
            {isFetching
              ? <span className="productsList__loader">Loading...</span>
              : (
                productsList.records.map(item => (
                  <ProductListEntry
                    key={item.slug}
                    pictures={`${imagesDir}/md-${item.pictures[0]}`}
                    name={item.name}
                    prices={item.prices}
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
  isFetching: state.products.isFetching,
  imagesDir: state.products.imagesDir,
});

const mapDispatchToProps = dispatch => ({
  startFetchProducts: requestData => dispatch(fetchProducts(requestData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

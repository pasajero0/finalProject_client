import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { setCurrentDepartment } from '../../actions/products';
import { replaceInRoute } from '../../utils/helpers';
import { URL_PRODUCT_IMAGES, URL_API_FETCH_PRODUCTS } from '../../config/app';
import ProductListLoader from '../ProductListLoader/ProductListLoader';
import Pagination from '../Pagination/Pagination';

import './ProductsList.scss';

axios.defaults.withCredentials = true;

const propTypes = {
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
      },
      loadedPages: []
    }
  }

  componentDidMount() {
    const { routeData: { params }, callSetCurrentDepartment } = this.props;
    this.fetchProducts(params, (data) => {
      this.setState(prevState => ({
        ...prevState,
        productsList: data,
        isBusy: false,
        loadedPages: [parseInt(data.page, 10)]
      }));
    });
    callSetCurrentDepartment(params.department);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  fetchProducts(params, callback) {
    this.setState(prevState => ({
      ...prevState,
      isBusy: true
    }));
    axios.get(URL_API_FETCH_PRODUCTS, { params })
      .then(res => res.data)
      .then((data) => {
        if (data.success) {
          callback(data.data);
        } else {
          throw new Error('Fetching product data error');
        }
      });
  }

  handleScroll(e) {
    const { isBusy, productsList: { page, pagesTotal }, loadedPages } = this.state;
    if (!isBusy && loadedPages[loadedPages.length - 1] <= pagesTotal) {

      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      const rate = (window.innerHeight + top) / e.target.body.scrollHeight;
      if (rate > 0.7) {
        const { routeData: { params } } = this.props;
        this.fetchProducts(
          { ...params, page: loadedPages[loadedPages.length -1] + 1 },
          (data) => {
            this.setState(prevState => ({
              ...prevState,
              productsList: {
                ...prevState.productsList,
                records: [
                  ...prevState.productsList.records,
                  ...data.records
                ]
              },
              isBusy: false,
              loadedPages: [
                ...prevState.loadedPages,
                parseInt(data.page, 10)
              ]
            }));
          }
        );
      }
    }
  }

  render() {
    const { routeData } = this.props;
    const { isBusy, productsList, loadedPages } = this.state;
    return (
      <section className="productsList">
        <div className="container">


          {productsList.records &&
          (
            <div className="productsList__content">
              <Pagination
                current={loadedPages}
                pagesTotal={productsList.pagesTotal}
                urlTemplate={replaceInRoute(
                  '/:department/page/:page',
                  { ...routeData.params, page: ':page' }
                )}
              />
              {productsList.records.map(item => (
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
              ))}
              <Pagination
                current={loadedPages}
                pagesTotal={productsList.pagesTotal}
                urlTemplate={replaceInRoute(
                  '/:department/page/:page',
                  { ...routeData.params, page: ':page' }
                )}
              />
            </div>
          )}
          {isBusy && <ProductListLoader/>}
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
  callSetCurrentDepartment: name => dispatch(setCurrentDepartment(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

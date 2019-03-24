import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductListEntry from '../ProductListEntry/ProductListEntry';
import { URL_PRODUCT_IMAGES, URL_API_FETCH_PRODUCTS } from '../../config/app';
import ProductListLoader from '../ProductListLoader/ProductListLoader';
import Pagination from '../Pagination/Pagination';
import ProductListHeader from '../ProductListHeader/ProductListHeader';

import './ProductsList.scss';

axios.defaults.withCredentials = true;

const propTypes = {
  /** Parameters for products fetching. */
  fetchProductsParams: PropTypes.shape({}).isRequired,
  /** URL template for pagination. */
  urlTemplatePagination: PropTypes.string.isRequired,
  /** URL template for product. */
  urlTemplateProduct: PropTypes.string.isRequired,
  /** Title of the list. */
  title: PropTypes.string.isRequired,
  /** Subtitle of the list. */
  subTitle: PropTypes.string.isRequired,
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
      loadedPages: [],
      stat: ''
    };
    this.isComponentMounted = false;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    const { fetchProductsParams } = this.props;
    this.fetchProducts(fetchProductsParams, (data) => {
      this.setState(prevState => ({
        ...prevState,
        productsList: data,
        isBusy: false,
        loadedPages: [parseInt(data.page, 10)]
      }));
      this.setStatistic();
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.isComponentMounted = false;
  }

  setStatistic() {
    const { count, records, page, perPage } = this.state.productsList;
    const from = (page - 1) * perPage;
    let stat = '';
    switch (count) {
      case 0:
        stat = 'Nothing has been found...';
        break;
      case 1:
        stat = 'Found one record!';
        break;
      default:
        stat = `Found ${count} records, the records from ${from + 1} to ${from + records.length}`;
    }

    this.setState(prevState => ({ ...prevState, stat }));
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
          if (this.isComponentMounted) {
            callback(data.data);
          }
        } else {
          throw new Error('Fetching product data error');
        }
      });
  }

  handleScroll(e) {
    const { isBusy, productsList: { pagesTotal }, loadedPages } = this.state;
    if (!isBusy && loadedPages[loadedPages.length - 1] < pagesTotal && loadedPages.length > 0) {
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      const rate = (window.innerHeight + top) / e.target.body.scrollHeight;
      if (rate > 0.7) {
        const { fetchProductsParams } = this.props;
        this.fetchProducts(
          { ...fetchProductsParams, page: loadedPages[loadedPages.length - 1] + 1 },
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
            this.setStatistic();
          }
        );
      }
    }
  }

  render() {
    const { title, subTitle, urlTemplatePagination, urlTemplateProduct } = this.props;
    const { isBusy, productsList, loadedPages, stat } = this.state;

    return (
      <section className="productsList">
        <ProductListHeader
          title={title}
          subTitle={subTitle}
          stat={stat}
        />
        <div className="container">
          {productsList.records &&
          (
            <div className="productsList__content">
              <Pagination
                current={loadedPages}
                pagesTotal={productsList.pagesTotal}
                urlTemplate={urlTemplatePagination}
              />
              {productsList.records.map(item => (
                <ProductListEntry
                  key={item.slug}
                  slug={item.slug}
                  picture={`${URL_PRODUCT_IMAGES}/md-${item.pictures[0]}`}
                  name={item.name}
                  prices={item.prices}
                  link={urlTemplateProduct.replace(/:product/, item.slug)}
                />
              ))}
              <Pagination
                current={loadedPages}
                pagesTotal={productsList.pagesTotal}
                urlTemplate={urlTemplatePagination}
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

export default ProductsList;
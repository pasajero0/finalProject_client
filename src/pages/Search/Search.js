import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Layout from '../../components/Layout/Layout';
import ProductsList from '../../components/ProductsList/ProductsList';
import { buildUrl } from '../../utils/helpers';

const propTypes = {
  /** Current department data. */
  currentDepartmentData: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  /** Match object of Route. */
  match: PropTypes.shape({
    params: PropTypes.shape({}),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  /** Location object of Route. */
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  }).isRequired
};


const Search = ({ location: { pathname, search }, match: { params }, currentDepartmentData }) => {

  const values = queryString.parse(search);
  const fetchProductsParams = { ...params, ...values };
  const urlTemplatePagination = buildUrl(`/search/page/:page${search}`, { ...params, page: ':page' });
  const urlTemplateProduct = buildUrl(`/search/page/:page/product/:product${search}`, {
    ...params,
    product: ':product'
  });
  // generate page list title
  const title = currentDepartmentData.name ? `search in ${currentDepartmentData.name}` : 'search';

  return (
    <Layout>
      <ProductsList
        fetchProductsParams={fetchProductsParams}
        urlTemplatePagination={urlTemplatePagination}
        urlTemplateProduct={urlTemplateProduct}
        title={title}
        subTitle={`Results by your request "${values.q}"`}
        key={`${pathname}${search}`}
      />
    </Layout>
  )
};

Search.propTypes = propTypes;

const mapStateToProps = state => ({
  currentDepartmentData: state.products.currentDepartmentData,
});

export default connect(mapStateToProps, null)(Search);


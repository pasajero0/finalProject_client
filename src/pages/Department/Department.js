import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  }).isRequired
};

const Department = ({ match: { params, url: key }, currentDepartmentData }) => {

  const fetchProductsParams = {...params};
  const urlTemplatePagination = buildUrl('/:department/filters/:filters/page/:page', { ...params, page: ':page' });
  const urlTemplateProduct = buildUrl('/:department/filters/:filters/page/:page/product/:product', { ...params, product: ':product' });

  return (
    <Layout>
      <ProductsList
        fetchProductsParams={fetchProductsParams}
        urlTemplatePagination={urlTemplatePagination}
        urlTemplateProduct={urlTemplateProduct}
        title={currentDepartmentData.name || 'product list'}
        subTitle=""
        key={key}
      />
    </Layout>
  )
};

Department.propTypes = propTypes;

const mapStateToProps = state => ({
  currentDepartmentData: state.products.currentDepartmentData,
});

export default connect(mapStateToProps, null)(Department);


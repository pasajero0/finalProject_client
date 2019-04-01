import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      department: PropTypes.string,
      page: PropTypes.string,
    }),
    path: PropTypes.string.isRequired
  })
};

const defaultProps = {
  match: {
    params: {
      department: '',
      page: 1,
    }
  },
};

const ProductSingle = ({ match }) => {
  return (
    <Layout>
      <Product routeData={match} />
    </Layout>
  )};

ProductSingle.propTypes = propTypes;
ProductSingle.defaultProps = defaultProps;

export default ProductSingle;

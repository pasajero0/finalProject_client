import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
    <>
      <Header />
      <Product routeData={match} />
      <Footer />
    </>
  )};

ProductSingle.propTypes = propTypes;
ProductSingle.defaultProps = defaultProps;

export default ProductSingle;

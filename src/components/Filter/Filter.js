import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Filter.scss';

const propTypes = {

};

const defaultProps = {

};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

const Filter = (props) => {
  const { products } = props;
  console.log('products-------------------------->: ', products);
  return (
    <div className="filter">
      <h1>hello filter</h1>
    </div>
  );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

const mapStateToProps = state => ({
  products: state.products.productsList.records,
});

// const mapDispatchToProps = dispatch => (
//   {
    
//   }
// );

export default connect(mapStateToProps, null)(Filter);

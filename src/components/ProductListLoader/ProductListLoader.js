/**
 * ProductListLoader Component.
 * Placeholder fot the description
 * @module ProductListLoader
 */
import React from 'react';
import PropTypes from 'prop-types';
import RenderLoader from '../RenderLoader/RenderLoader';

/**
 * PropTypes of the component
 * @type {object}
 */
const propTypes = {
  /** Text message of the toast. */
  //prop: PropTypes.string,
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  //prop: '',
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const ProductListLoader = ({ ...props }) =>{
  return (
    <div
      style={{
        margin: '1rem auto',
        textAlign: 'center'
      }}
    >
      <RenderLoader
        size={50}
        color="lightgrey"
      />
     </div>
  );
};

ProductListLoader.propTypes = propTypes;
ProductListLoader.defaultProps = defaultProps;

export default ProductListLoader;

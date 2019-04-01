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
  size: PropTypes.number,
  color: PropTypes.string,
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  size: 50,
  color: 'lightgrey',
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const ProductListLoader = ({size,  color}) =>{
  return (
    <div
      style={{
        margin: '1rem auto',
        textAlign: 'center'
      }}
    >
      <RenderLoader
        size={size}
        color={color}
      />
     </div>
  );
};

ProductListLoader.propTypes = propTypes;
ProductListLoader.defaultProps = defaultProps;

export default ProductListLoader;

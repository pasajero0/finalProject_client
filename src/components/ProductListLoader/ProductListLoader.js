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
      style={{ minHeight: '80vh', position: 'relative' }}
    >
    <span
      style={{
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <RenderLoader
        size={50}
        color="lightgrey"
      />
     </span>
    </div>
  );
};

ProductListLoader.propTypes = propTypes;
ProductListLoader.defaultProps = defaultProps;

export default ProductListLoader;

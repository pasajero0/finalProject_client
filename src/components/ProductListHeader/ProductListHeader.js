/**
 * ProductListHeader Component.
 * Placeholder fot the description
 * @module ProductListHeader
 */
import React from 'react';
import PropTypes from 'prop-types';

import './ProductListHeader.scss';

/**
 * PropTypes of the component
 * @type {object}
 */
const propTypes = {
  /** Product list title. */
  title: PropTypes.string.isRequired,
  /** Product list subtitle. */
  subTitle: PropTypes.string,
  /** Product list statistic. */
  stat: PropTypes.string,
};
/**
 * Default props of the component
 * @type {object}
 */
const defaultProps = {
  subTitle: '',
  stat: '',
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
const ProductListHeader = ({ title, subTitle, stat }) => {
  return (
    <div className="productListHeader">
      <h1 className="productListHeader__title">{title}</h1>
      <p className="productListHeader__subTitle">{subTitle}</p>
      <p className="productListHeader__stat">{stat}</p>
    </div>
  );
};

ProductListHeader.propTypes = propTypes;
ProductListHeader.defaultProps = defaultProps;

export default ProductListHeader;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currency: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};


const defaultProps = {
  currency: '$',
  num: 89,
};

const Price = (props) => {
  const { priceClass, num, currency } = props;

  const convertPrice = (value) => {
    return (value / 100).toFixed(2);
  };

  return (
    <span className={priceClass}>{`${currency} ${convertPrice(num)}`}</span>
  );
};

Price.propTypes = propTypes;
Price.defaultProps = defaultProps;

export default Price;
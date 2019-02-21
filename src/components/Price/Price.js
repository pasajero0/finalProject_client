import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Price = ( props ) => {
  const {priceClass, num, currency} = props;
  
  console.log(priceClass)
  
  const convertPrice = value => {
//   Переоброзовать цену/value чтобы выходило на выходе цена в parseint т.е. 8999 должно выходить 89.99
    return value.toFixed(2);
  }
  
  return (
    <span className={priceClass}>{`${currency} ${convertPrice(num)}`}</span>
  );
};

Price.propTypes = {
 currency: PropTypes.string,
 num: PropTypes.number
}


Price.defaultProps = {
  currency: '$'
};


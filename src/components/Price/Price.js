import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Price = ( props ) => {
  const {priceClass, num, currency} = props;

  console.log(priceClass)

  const convertPrice = value => {
//   Переоброзовать цену/value чтобы выходило на выходе цена в parseint т.е. 8999 должно выходить 89.99
    return (value/100).toFixed(2);


  }

  return
    <span className={priceClass}>{`${currency} ${convertPrice(num)}`}</span>
  );
};

Price.propTypes = {
 currency: PropTypes.string.isRequired,
 num: PropTypes.number.isRequired
}


Price.defaultProps = {
  currency: '$',
  num: 89
};



import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon';

import './ProductListEntry.scss';

const propTypes = {
  link: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    retail: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
  }).isRequired
};

const ProductListEntry = ({ link, picture, name, slug, prices, brand, country }) => {

  const sale = prices.retail && prices.sale
    ? Math.round(prices.sale / prices.retail * 100)
    : 0;

  return (
    <div className="productListEntry" key={slug}>
      <div className="productListEntry__content">
        <NavLink to={link} className="productListEntry__imgLink">
          <img
            src={picture}
            alt={name}
            className="productListEntry__img"
          />
          {sale >= 0 && <div className="productListEntry__sale">-{sale}%</div>}
        </NavLink>
        <NavLink to={link} className="productListEntry__nameLink">
          {name}
        </NavLink>
        <span className="productListEntry__info">{brand}, {country}</span>

        {sale < 0
          ? <div className="productListEntry__price">${prices.retail}</div>
          : (
            <div className="productListEntry__price">
        <span className="productListEntry__price_sale">
          ${prices.sale}
        </span>
              <span className="productListEntry__price_old">
          ${prices.retail}
        </span>
            </div>
          )}

        {/*<button className="productListEntry__btn" type="button">*/}
        {/*<SaveProductForLaterIcon className="saveProductForLaterIcon" />*/}
        {/*</button>*/}
      </div>
    </div>
  )
};

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;

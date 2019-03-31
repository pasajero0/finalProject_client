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
  isBrandNew: PropTypes.bool.isRequired,
  isOnSale: PropTypes.bool.isRequired,
  prices: PropTypes.shape({
    retail: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
  }).isRequired
};

const ProductListEntry = ({ link, picture, name, slug, prices, brand, country, isBrandNew, isOnSale }) => {
  const salePercents = Math.round((prices.sale-prices.retail)/prices.retail * 100);
  return (
    <div className="productListEntry" key={slug}>
      <div className="productListEntry__content">
        <NavLink to={link} className="productListEntry__imgLink">
          <img
            src={picture}
            alt={name}
            className="productListEntry__img"
          />
          {isOnSale && <div className="productListEntry__sale">{salePercents}%</div>}
        </NavLink>
        <NavLink to={link} className="productListEntry__nameLink">
          {name}
        </NavLink>
        <span className="productListEntry__info">{brand}, {country}</span>

        {isOnSale
          ? (
          <div className="productListEntry__price">
        <span className="productListEntry__price_sale">
          ${prices.sale}
        </span>
            <span className="productListEntry__price_old">
          ${prices.retail}
        </span>
          </div>
        )
          : <div className="productListEntry__price">${prices.retail}</div>
        }

        {/*<button className="productListEntry__btn" type="button">*/}
        {/*<SaveProductForLaterIcon className="saveProductForLaterIcon" />*/}
        {/*</button>*/}
      </div>
    </div>
  )
};

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;

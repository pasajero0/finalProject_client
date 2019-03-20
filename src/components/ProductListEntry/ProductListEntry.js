import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SaveProductForLaterIcon from '../SaveProductForLaterIcon/SaveProductForLaterIcon';

import './ProductListEntry.scss';

const propTypes = {
  link: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    retail: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
  }).isRequired
};

const ProductListEntry = ({ link, picture, name, slug, prices }) => (
  <div className="productListEntry" key={slug}>
    <div className="productListEntry__content">
      <NavLink to={link} className="productListEntry__imgLink">
        <img
          src={picture}
          alt={name}
          className="productListEntry__img"
        />
        <button className="productListEntry__btn" type="button">
          <SaveProductForLaterIcon className="saveProductForLaterIcon" />
        </button>
      </NavLink>
      <NavLink to={link} className="productListEntry__nameLink">
        {name}
      </NavLink>
      <span className="productListEntry__price">${prices.retail}</span>
    </div>
  </div>
);

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;

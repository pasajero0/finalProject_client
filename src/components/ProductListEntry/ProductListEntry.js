import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AddProductToCartIcon from '../AddProductToCartIcon/AddProductToCartIcon';
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
  }).isRequired,
};

const ProductListEntry = ({ link, picture, name, slug, prices }) => (
  <div className="productListEntry" key={slug}>
    <div className="productListEntryItem">
      <NavLink to={link} className="productListEntryItem__imgLink">
        <img
          src={picture}
          alt={name}
          className="productListEntryItem__img"
        />
      </NavLink>

      <NavLink to={link} className="productListEntryItem__nameLink">
        {name}
      </NavLink>
      <span className="productListEntryItem__price">${prices.retail}</span>
      <SaveProductForLaterIcon className="saveForLaterIcon" />
      <AddProductToCartIcon className="addProductToCartIcon" />
    </div>
  </div>
);

ProductListEntry.propTypes = propTypes;

export default ProductListEntry;

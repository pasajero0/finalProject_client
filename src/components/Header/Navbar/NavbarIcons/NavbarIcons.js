import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AddProductToCartIcon from '../../../AddProductToCartIcon/AddProductToCartIcon';
// import {FiShoppingBag} from 'react-icons/fi';
import Search from '../Search/Search';

import './NavbarIcons.scss';


const propTypes = {
  cartCount: PropTypes.number
};

const defaultProps = {
  cartCount: 0
};


const NavbarIcons = ({ cartCount }) => {
  return (
    <>
    <Search/>
    <ul className="navbarIcons">
      <li className="navbarIcons__item">
        <NavLink to="/login" className="navbarIcons__link">
          <FaRegUser className="navbarIcons__icon"/>
        </NavLink>
      </li>
      <li className="navbarIcons__item navbarIcons__buttonBox">
        {cartCount > 0 && (
          <NavLink to="/cart" className="navbarIcons__link navbarIcons__cartLink" id="shoppingCartIcon">
            <AddProductToCartIcon className="navbarIcons__icon addProductToCartIcon"/>
            <div className="productsQuantity">
              <span className="productsQuantity__number navbarIcons__cartQuantity">{cartCount}</span>
            </div>
          </NavLink>
        )}
        {cartCount === 0 && (
          <span style={{ opacity:0.2 }}>
            <AddProductToCartIcon className="navbarIcons__icon" />
          </span>
        )}
        


      </li>
    </ul>
    </>
  )
};

NavbarIcons.propTypes = propTypes;
NavbarIcons.defaultProps = defaultProps;

const mapStateToProps = state => ({
  cartCount: state.cart.count
});

export default connect(mapStateToProps, null)(NavbarIcons);

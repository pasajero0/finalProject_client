import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegUser, FaUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Tool from '../Tool/Tool';
import { setUserMenuVisibility } from '../../../../actions/app';

import './NavbarIcons.scss';


const propTypes = {
  cartCount: PropTypes.number,
  isAuthenticated: PropTypes.bool,
  callSetUserMenuVisibility: PropTypes.func.isRequired
};

const defaultProps = {
  cartCount: 0,
  isAuthenticated: false
};


const NavbarIcons = ({ cartCount, isAuthenticated, callSetUserMenuVisibility }) => {
  return (
    <>
    <ul className="navbarIcons">
      <li className="navbarIcons__item">
        {isAuthenticated
          ? (
            <button
              type="button"
              className="navbarIcons__button"
              onClick={(e) => {
                e.stopPropagation();
                callSetUserMenuVisibility(true);
              }}
            >
              <Tool className="userIcon" icon={FaUserCircle} />
            </button>
          )
          : (
            <NavLink to="/login">
              <Tool icon={FaRegUser} />
            </NavLink>
          )
        }
      </li>

      <li className="navbarIcons__item">
        {cartCount > 0 && (
          <NavLink to="/cart" className="navbarIcons__link">
            <Tool icon={FiShoppingCart}>
              <div className="navbarIcons__quantity">
                {cartCount}
              </div>
            </Tool>
          </NavLink>
        )}
        {cartCount === 0 && (
          <div className="navbarIcons__link">
            <Tool icon={FiShoppingCart} disabled />
          </div>
        )}
      </li>
    </ul>
    </>
  );
};

NavbarIcons.propTypes = propTypes;
NavbarIcons.defaultProps = defaultProps;

const mapStateToProps = state => ({
  cartCount: state.cart.count,
  isAuthenticated: state.customers.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  callSetUserMenuVisibility: value => dispatch(setUserMenuVisibility(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarIcons);

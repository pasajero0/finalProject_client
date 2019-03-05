import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavbarMenu.scss';

const leftPosHide = { left: '-3000px' };
const leftPosShow = { left: '0' };

class NavbarMenu extends Component {

  state = {
    menuOpened: false
  };

  render() {
    return (
      <div
        id="navbarMenu"
        className="navbarMenu"
        style={this.state.menuOpened ? leftPosShow : leftPosHide}>
        <div className="container">
          <ul className="navbarNav">
            <li className="navbarNav__item">
              <NavLink to="#" className="navbarNav__link">Clothing</NavLink>
            </li>
            <li className="navbarNav__item">
              <NavLink to="#" className="navbarNav__link">Accessories</NavLink>
            </li>
            <li className="navbarNav__item">
              <NavLink to="#" className="navbarNav__link">Shoes</NavLink>
            </li>
            <li className="navbarNav__item">
              <NavLink to="#" className="navbarNav__link">Sport</NavLink>
            </li>
            <li className="navbarNav__item">
              <NavLink to="#" className="navbarNav__link">Beauty</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavbarMenu;
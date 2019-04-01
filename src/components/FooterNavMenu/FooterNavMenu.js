import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterNavMenu.scss';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const FooterNavMenu = () => {
  return (
    <>
      <div className="footer__border" />
      <div className="footerInfo__wrapper">
        <div className="container">
          <div className="footerInfo">
            <div className="footerInfo__block footerInfo__block_logo">
             <CompanyLogo className="companyLogo" fill="#000000" />
            </div>
            <div className="footerInfo__block">
              <p className="footerInfo__section">SHOP</p>
              <ul>
                <li><NavLink to="/men" className="footerInfo__link">Men</NavLink></li>
                <li><NavLink to="/women" className="footerInfo__link">Women</NavLink></li>
              </ul>
            </div>
            <div className="footerInfo__block">
              <p className="footerInfo__section">ABOUT</p>
              <ul>
                <li><NavLink to="/about-us" className="footerInfo__link">About Us</NavLink></li>
                <li><NavLink to="/careers" className="footerInfo__link">Careers</NavLink></li>
              </ul>
            </div>
            <div className="footerInfo__block">
              <p className="footerInfo__section">HELP</p>
              <ul>
                <li><NavLink to="/returns" className="footerInfo__link">Returns</NavLink></li>
                <li><NavLink to="/delivery" className="footerInfo__link">Delivery</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">@2019 Copyright</div>
    </>
  );
};
export default FooterNavMenu;

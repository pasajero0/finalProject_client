import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterInfo.scss';


const FooterInfo = () => {
  return (
    <div className="container">
      <div className="footerInfo">
        <div className="footerInfo__block">
            <p className="footerInfo__section">SHOP UNO</p>
            <ul>
              <li><NavLink to="/men" className="footerInfo__link">Men</NavLink></li>
              <li><NavLink to="/women" className="footerInfo__link">Women</NavLink></li>
            </ul>
        </div>
        <div className="footerInfo__block">
            <p className="footerInfo__section">ABOUT UNO</p>
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


  );
};

export default FooterInfo;

import React from 'react';
import { NavLink } from 'react-router-dom';
import SocMedia from '../SocMedia/SocMedia';
import Map from './FooterMap';
import './Footer.scss';


const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <Map/>
        <div className="footer__content">
          <NavLink to="/" className="mainLogo__link">
            <span className="mainLogo">Uno</span>
          </NavLink>
          <p className="phone">
            <a className="phone__link" href="tel:1(212)1234567">1 (212) 123 45 67</a>
          </p>
          <p className="email">
            <a className="email__link" href="mailto:welcome@unostore.com">welcome@unostore.com</a>
          </p>
          <SocMedia />
        </div>
     
      </div>
        

    </footer>


  );
};

export default Footer;

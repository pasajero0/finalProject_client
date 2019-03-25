import React from 'react';
import { NavLink } from 'react-router-dom';
import SocMedia from '../SocMedia/SocMedia';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Map from './FooterMap/FooterMap';
import FooterInfo from './FooterInfo/FooterInfo';
import './Footer.scss';


const Footer = () => {
  return (
  <>
    <footer className="footer">
      <div className="container">  
        <div className="footer__content">
        <div className="footer__map"><Map/></div>
         <div className="footer__contacts">
           <p className="footer__logo">
            <NavLink to="/">
                <CompanyLogo fill="#ffff" width="60" height="40"/>
            </NavLink>

          </p>
          <p className="footer__address">
    69-25 Harrison Str<br/>
    New York, NY 100-13
  </p>

          <p className="footer__phone">
            <a className="phone__link" href="tel:1(212)1234567"><FaPhone/> 1 (212) 123 45 67</a>
          </p>

          <p className="footer__email">
            <a className="email__link" href="mailto:welcome@unostore.com"><FaEnvelope/> welcome@unostore.com</a>
          </p>


          <SocMedia />
         </div>
        </div>
      </div>
    </footer>
    <FooterInfo/>
  </>
  );
};

export default Footer;

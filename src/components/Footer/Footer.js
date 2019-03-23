import React from 'react';
import { NavLink } from 'react-router-dom';
import SocMedia from '../SocMedia/SocMedia';
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Map from './FooterMap/FooterMap';
import FooterInfo from './FooterInfo/FooterInfo';
import './Footer.scss';


const Footer = () => {
  return (
  <>
    <footer className="footer">
      <div className="container">  
        <div className="footer__content">
          <Map/>
         <div className="footer__contacts">
           <p className="mainLogo__link">
            <span className="mainLogo">UNO</span>
          </p>
          <p className="address">69-25 Harrison Str</p>
          <p className="address">New York, NY 100-13</p>
          <p className="phone">
            <a className="phone__link" href="tel:1(212)1234567"><FaPhone/> 1 (212) 123 45 67</a>
          </p>
          <p className="email">
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
